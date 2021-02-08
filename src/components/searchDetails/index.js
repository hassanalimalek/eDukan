import React from 'react'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import styles from './searchDetails.module.scss'
import cx from 'classnames'
// No Product Image 
import noProductImage from '../../assets/images/noProductFound.png'
// Icon
import { BiLeftArrowCircle} from 'react-icons/bi'



function Index(props) {
    // Search Value
    let [inputVal,setinputVal] = useState(props.match.params.productName);
    // Matched Products State
    let [matchState,setMatchState] = useState([]);
    const productArray = useSelector((state)=>state.rootReducer[0]["products"])

    // Find Searched Products
    let findProducts = (searchedTerm)=>{
        let matchedResult = []
        Object.keys(productArray).map((category)=>{
            Object.keys(productArray[category]).map((productId)=>{
                let actualProduct = productArray[category][productId]
                if((actualProduct.title.toLowerCase()).includes(searchedTerm.toLowerCase())){
                    actualProduct["id"] = productId;
                    actualProduct["category"]=category;
                    matchedResult.push(actualProduct)
                }
                return true
            })
            return true 
        })
        if(matchedResult.length===0 || searchedTerm.length===0){
            setMatchState("No Products")
        }
        else{
            setMatchState(matchedResult)
        }
      
    }

    let searchItem = ()=>{
        findProducts(inputVal)
    }

    // Searched Products JSX
    let getProductJsx = ()=>{
        console.log("Get product")
        let p = matchState.map((product) =>{
            // console.log(product.title)
           return (
              <div key = {product.id} className = {cx(styles.productCard,"card col-12 col-sm-6 col-md-4 mb-3 p-0")  }>
                  <img alt="producImg" className={cx(styles.productImg,"card-img-top")}  src={product.imgSrc}/>
                  <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.type}</p>
                      <div className={cx(styles.productBottomBar)}>
                        <h3 href="#" className={cx(styles.pricingTxt)}>Rs <span>{product.basePrice}</span></h3>
                        <Link to={{
                            pathname:`/products/${product.category}/${product.id}`,
                            state:{page:"search",searchTerm:inputVal}}} ><button className={cx(styles.searchDetailBtn,"generic_btn")}>View Details</button>
                        </Link>
                      </div>
                  </div>
              </div>
           )
        })
        return (p)
    }

    useEffect(()=>{
        findProducts(inputVal)
    },[])// eslint-disable-line
    useEffect(() => {
        window.scrollTo(0,0);
     }, [])
   

    if(matchState.length===0){
    return (
        <div>
            <h1>Loading</h1>
        </div>
          )
    }
    else{
        if(matchState==="No Products"){
            return (
                <div>
                     <div className="m-4">
                         <Link  to={'/'} 
                         className={styles.backArrow}><BiLeftArrowCircle/></Link>
                        <div  className={cx(styles.inputDiv,"input-group mb-3")}>
                            <input type="text" className="form-control" placeholder="Search a Product" 
                            value={inputVal}
                            onChange={e=>(setinputVal(e.target.value))}/>
                            <div className="input-group-append">
                            <button className="btn btn-outline-secondary" 
                            onClick={searchItem}
                            type="button">Search</button>
                            </div>
                            <br/>
                        </div>
                      </div>
                      <div className={cx(styles.noProduct)}>
                            <img alt="noProductImg" src={noProductImage}></img>
                      </div>
                </div>
            )
        }
        else{
        return(
            <div className="m-4 mt-2">
                <Link  to={'/'} 
                className={styles.backArrow}><BiLeftArrowCircle/></Link>
                <h4 className={styles.searchDetailTitle}>Search the Store</h4>
                <div  className={cx(styles.inputDiv,"input-group mb-3")}>
                    <input type="text" className="form-control" placeholder="Search a Product" 
                    value={inputVal}
                    onChange={e=>(setinputVal(e.target.value))}/>
                    <div className="input-group-append">
                    <button className={cx(styles.searchBtn,"generic_btn")} onClick={searchItem} type="button">Search</button>
                    </div>
                    <br/>
                </div>
                <h4 style={{fontWeight:'300'}} className="mt-4 mb-4">{matchState.length} {(matchState.length)==='1'?'Product':"Product's"} Found</h4>
                <div className="row m-sm-0">
                    {getProductJsx()}
                </div>
            </div>  
          )
        }
    }
}

export default Index
