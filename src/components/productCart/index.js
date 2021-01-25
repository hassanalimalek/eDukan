import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import styles from './productCard.module.scss'
import img1 from '../../assets/images/shoes/shoe1.png'
import cx from 'classnames'

// Icons
import { AiFillMinusSquare,AiFillPlusSquare,AiFillDelete } from 'react-icons/ai'

// Empty Cart
import emptyCart from '../../assets/images/emptyCart.png'



function Index() {
    let dispatch = useDispatch()

    const state = useSelector((state)=>state["cartReducer"]);

   let deleteProduct = (e,index)=>{
    console.log("Decrease")
    console.log(e,index)
    dispatch({ type: 'removeProduct',payload:{index} })
    }
    
    let decreaseCount = (e,index)=>{
        console.log("Minus")
        console.log(e,index)
        dispatch({ type: 'decProductCount',payload:{index} })
    }
    let increaseCount = (e,index)=>{
        console.log("Minus")
        console.log(e,index)
        dispatch({ type: 'incProductCount',payload:{index} })
    }
    
   
    let cartProducts = state.map((product,index)=>{
        
        if(product.title){
            return (
                <div className={styles.cart}>
                <div className={styles.cart_container}>
                    <div className={styles.products}>
                        <div className={styles.product_img}>
                            <img src={product.imgSrc} className={styles.actual_img}/>
                        </div>
                        <div className={styles.product_description}>
                            <h3>{product.title}</h3>
                            <div className={styles.bottomBar}>

                                <div className={styles.counter}>
                                    <span className={styles.quantityTxt}>Quantity</span>
                                    <AiFillMinusSquare className={styles.countIcon} onClick={(e)=>decreaseCount(e,index)}/>
                                    <span className={styles.productCount}>{product.count}</span>
                                    <AiFillPlusSquare className={styles.countIcon} onClick={(e)=>increaseCount(e,index)}/>
                                </div>
                                <h4 className={styles.price}>Rs {product.subPrice}</h4>
                            </div>
                          <div className={styles.deleteIcon} onClick={(e)=>deleteProduct(e,index)}><AiFillDelete/></div>
                        </div>
                       
                    </div>
                </div>
            </div>
            )
        }
    
        
    })


    console.log("Cart!!!")
   
        if(cartProducts.length>1){
            return(
                <div className={styles.full}>
                <h1>{cartProducts}</h1>
                <div className={styles.totalPrice}>
                    <div className={styles.totalPriceContainer}>
                        <h4>Order Summary</h4>
                        <div className={styles.orderContainer}>
                            <div className={styles.orderContainer_row}>
                                <span>{state[0]["totalProducts"]} {(state[0]["totalProducts"])=='1'?'Product':"Product's"} </span>
                            </div>
                            <div className={styles.orderContainer_row}>
                                <span>Product Total</span>
                                <span>Rs {state[0]["totalPrice"]}</span>
                            </div>
                            <div className={styles.orderContainer_row}>
                                <span>Delivery</span>
                                <span>FREE</span>
                            </div>
                            <div className={cx(styles.orderContainer_row,styles.orderTotal)}>
                                <span>Total</span>
                                <span>Rs {state[0]["totalPrice"]}</span>
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
                       <img src={emptyCart}></img>
                    </div>
               </div>
            )
        }

       
    
    
}

export default Index
