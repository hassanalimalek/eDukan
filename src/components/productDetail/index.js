import React from 'react'
import cx from 'classnames'
import styles  from './productDetail.module.scss'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'
// Icons
import { MdAddShoppingCart } from 'react-icons/md'
import { BiLeftArrowCircle} from 'react-icons/bi'



const addToCart = (category,singleProduct,selectedSize,sizeCheck,dispatch)=>{
 
    if(sizeCheck===false && category!=="watches"){
        let notify = () => toast.error(<h5 className="text-weight-bold">Select Product Size</h5>,{
            position: "top-right",
            autoClose: 1500,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            });
        notify();
    }
    else{
        let product = {
            ...singleProduct,
            "selectedSize": selectedSize
        }
        dispatch({ type: 'addToCart',payload:{product: product} })
        let notify = () => toast.dark("Added to cart",{
            position: "top-right",
            autoClose: 1500,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            });
        notify();
    }
}

function Index(props) {

    let page = props.location.state.page;
    if(page === "search"){
        var searchTerm = props.location.state.searchTerm;
    }

    let dispatch = useDispatch()
    let [selectedSize,setSelectedSize]=useState(0);
    let [sizeCheck,setSizeCheck] = useState(false);
   
    let {category,id} = props.match.params;

    const product = useSelector((state)=>state.rootReducer[0]["products"][category][id])
    
    useEffect(() => {
        window.scrollTo(0,0);
     }, [])

    let radioClick = (e)=>{
        // Update Selected Size
        setSelectedSize(e.target.value);
        setSizeCheck(true)
    }
        
    if(product){
        let productSizes;
        let sizeTitle;
        if(category!=="watches"){
            sizeTitle  = () => {return(
            <span className="text-dark">Available Sizes</span>)}
            productSizes = Object.keys(product.sizes).map((size)=>{
                return (
                    <span key = {size} className={cx("form-group",styles.boxed)}>
                        <input onClick={(e)=>{radioClick(e)}}  type="radio" id={size}  name="size" value = {product.sizes[size]} />
                        <label  htmlFor={size} >{product.sizes[size]}</label>          
                    </span>
                )
        })}
        return (
            <div className={cx(styles.productDetail)}>
            <ToastContainer 
            transition={Slide}/>
            <div className={cx(styles.productContainer)}>
                <div className={cx(styles.productImg)}>
                    <Link  to={page==="search"?`/searchDetails/${searchTerm}`:'/'} 
                    className={styles.backArrow}><BiLeftArrowCircle/></Link>
                    <img alt="Product Detail img" src={product.imgSrc}></img>
                </div>
                <div className={cx(styles.productTxt)}>
                    <h2>{product.title}</h2>
                    <h4 className="mb-3 text-muted">{product.type}</h4>
                    <h4>{sizeTitle()}</h4>
                    <span>{productSizes}</span>
                    <p>{product.description}</p>
                    <div className={cx(styles.inliner)}>
                         <h3 className="font-weight-bold"><span >Rs </span>{product.basePrice}</h3>
                         <button onClick={()=>addToCart(category,product,selectedSize,sizeCheck,dispatch)} className={cx(styles.addCartBtn,"generic_btn")}>Add to Cart <MdAddShoppingCart/></button>
                    </div>
                </div>
            </div>    
        </div>
        )
    }
    else{
    return (
        <h1>Loading...</h1>
    )}
   
}

export default Index
