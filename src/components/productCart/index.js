import React from 'react'
import styles from './productCart.module.scss'
import cx from 'classnames'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// Icons
import { AiFillMinusSquare,AiFillPlusSquare,AiFillDelete } from 'react-icons/ai'

// Empty Cart Image
import emptyCart from '../../assets/images/emptyCart.png'



function Index() {
    let dispatch = useDispatch()
    const cartState = useSelector((state)=>state["cartReducer"]);
    let loginState =useSelector((state)=>state["loginReducer"]["login"])
    
    // Dispatchers
    let deleteProduct = (index)=>{  
      dispatch({ type: 'removeProduct',payload:{index} })
    }
    let decreaseCount = (index)=>{
        dispatch({ type: 'decProductCount',payload:{index} })
    }
    let increaseCount = (index)=>{
        dispatch({ type: 'incProductCount',payload:{index} })
    }
    let clearCart = ()=>{
        dispatch({type:'clearCart'})
    }
    
   
    let cartProducts = cartState.map((product,index)=>{
        if(product.title){
            return (
                <div className={styles.cart}>
                <div className={styles.cart_container}>
                    <div className={styles.product}>
                        <div className={styles.product_img}>
                            <img src={product.imgSrc} alt="Product " className={styles.actual_img}/>
                        </div>
                        <div className={styles.product_description}>
                            <h3>{product.title}</h3>
                            <div className={styles.bottomBar}>

                                <div className={styles.counter}>
                                    <span className={styles.quantityTxt}>Quantity</span>
                                    <AiFillMinusSquare className={styles.countIcon} onClick={(e)=>decreaseCount(index)}/>
                                    <span className={styles.productCount}>{product.count}</span>
                                    <AiFillPlusSquare className={styles.countIcon} onClick={(e)=>increaseCount(index)}/>
                                </div>
                                <h4 className={styles.price}>Price : Rs {product.subPrice}</h4>
                            </div>
                          <div className={styles.deleteIcon} onClick={(e)=>deleteProduct(e,index)}><AiFillDelete/></div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        else{
            return false;
        }
    })

    if(cartProducts.length>1){
        return(
            <div className={styles.full}>
            <h2 className={styles.myBag}>MY  BAG</h2>
            <h1>{cartProducts}</h1>
            <div className={styles.totalPrice}>
                <div className={styles.totalPriceContainer}>
                    <h4>Order Summary</h4>
                    <div className={styles.orderContainer}>
                        <div className={styles.orderContainer_row}>
                            <span>{cartState[0]["totalProducts"]} {(cartState[0]["totalProducts"])==='1'?'Product':"Product's"} </span>
                        </div>
                        <div className={styles.orderContainer_row}>
                            <span>Product Total</span>
                            <span>Rs {cartState[0]["totalPrice"]}</span>
                        </div>
                        <div className={styles.orderContainer_row}>
                            <span>Delivery</span>
                            <span>FREE</span>
                        </div>
                        <div className={cx(styles.orderContainer_row,styles.orderTotal)}>
                            <span>Total</span>
                            <span>Rs {cartState[0]["totalPrice"]}</span>
                        </div>
                        <div className={cx(styles.orderContainer_row)}>
                            <button onClick={()=>clearCart()} className={cx(styles.checkoutBtn,"generic_btn")}>Clear Cart</button>
                            {loginState?
                            <Link to="/checkout"><button 
                            className={cx(styles.checkoutBtn,"generic_btn")}>Go to Checkout</button></Link>
                            :<h4 className={styles.loginTxt}>Login in to Checkout</h4>
                            }    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    else{
        return(
            <div className={cx(styles.emptyCart,styles.full)}>
                <div className={styles.emptyCartContainer}>
                    <img alt="Empty Cart img" src={emptyCart}></img>
                </div>
            </div>
        )
    }    
}

export default Index
