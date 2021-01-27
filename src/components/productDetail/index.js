import React from 'react'
import cx from 'classnames'
import styles  from './productDetail.module.scss'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
// Icons
import { MdAddShoppingCart } from 'react-icons/md'
import { BiLeftArrowCircle} from 'react-icons/bi'


const addToCart = (product,dispatch)=>{
    dispatch({ type: 'addToCart',payload:{product: product} })
}

function Index(props) {
    let dispatch = useDispatch()
    const [product,setProduct] = useState([]);
    let {category,id} = props.match.params;
    const singleProduct = useSelector((state)=>state.rootReducer[category][id])
    
    useEffect(() => {
        setProduct(singleProduct);
      },[singleProduct]);
    
    
    if(product){
        return (
            <div className={cx(styles.productDetail)}>
            <div className={cx(styles.productContainer)}>
                <div className={cx(styles.productImg)}>
                    <Link exact to='/' className={styles.backArrow}><BiLeftArrowCircle/></Link>
                    <img alt="Product Detail img" src={product.imgSrc}></img>
                </div>
                <div className={cx(styles.productTxt)}>
                    <h2>{product.title}</h2>
                    <span>Men's Collection</span>
                    <p>{product.description}</p>
                    <div className={cx(styles.inliner)}>
                         <h3 ><span>Rs </span>{product.basePrice}</h3>
                         <button onClick={()=>addToCart(product,dispatch)} className={cx(styles.addCartBtn,"generic_btn")}>Add to Cart <MdAddShoppingCart/></button>
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
