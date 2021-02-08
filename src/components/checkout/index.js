import React from 'react'
import cx from 'classnames'
import styles from './checkout.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './localDialog.css'
// Dialog
import Dialog from '@material-ui/core/Dialog';
// Tick Animation
import { Tick } from 'react-crude-animated-tick';
// Toastify for Error Case
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'

// Firebase databse
import {db} from '../../utils/firebase'



function Checkout(props) {
    let dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0,0);
     }, [])
    let [animationModal,setAnimationModal] = useState(false);
    let loginState =useSelector((state)=>state["loginReducer"]["login"])
    let cartState = useSelector((state)=>state["cartReducer"]);
    if(cartState.length>1 && loginState === true){
        var totalPrice = cartState[0]["totalPrice"]
        var orderedProducts = cartState.slice(1)
        var formHandler = (form)=>{
            console.log(form.firstName.value)
            db.ref(`orders/`).push(
                {
                    "First Name":form.firstName.value,"Last Name":form.lastName.value,
                    "Address 1":form.address1.value,"Address 2":form.address2.value,
                    "City":form.city.value,"Province":form.province.value,
                    "Zip":form.zip.value,
                    "Total Price":totalPrice,
                    "Orders":orderedProducts
                },function(error) {
                    if (error)
                      {
                      let notify = () => toast.error(error);
                      notify();
                      }
                    else{
                        setAnimationModal(true)
                        setTimeout(()=>
                       { 
                        setAnimationModal(false)
                            setTimeout(()=>{
                                dispatch({type:'clearCart'})
                                props.history.push('/')
                            },800)
                        }, 2500);
                        }
                  }
            )
        }
        return (
        <div className={styles.checkout}>
            <h2 className={styles.checkoutTitle}>CHECKOUT</h2>
            <h4>Shipping Details</h4>
            <div className={styles.checkout_container}>
                <div className={styles.form}>
                    <form id="checkOutForm" onSubmit={(e)=>{
                                e.preventDefault();
                                formHandler(e.target)
                                }}>
                        <div className={cx("form-group")}>
                            <div className={cx("row")}>
                            <div className={cx("col")}>
                                    <input type="text" className="form-control" id="firstName"placeholder="First name" required/>
                            </div>
                            <div className={cx("col")}>
                                    <input type="text" className="form-control" id="lastName" placeholder="Last name" required/>
                            </div>
                        </div>
                        </div>  
                        <div className="form-group">
                            <label htmlFor="address1">Address 1 *</label>
                            <input type="text" className="form-control" id="address1" placeholder="1234 Main St" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address2">Address 2 </label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city" required/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="province">Province</label>
                                <select id="province" className="form-control">
                                    <option value>Federal</option>
                                    <option >Punjab</option>
                                    <option >Sindh</option>
                                    <option >KPK</option>
                                    <option >Balochistan</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip"
                                required/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles.totalCard}>
                    <div className={styles.totalCard_container}>
                        <div className={cx(styles.cardTitle,styles.cardContainer_row)}>
                                <span>Order Summary</span>
                                <Link to="/cart" className={styles.editCart}>Edit Cart</Link>
                        </div>
                        <div className={cx(styles.cardContainer_row)}>
                                <span>Sub Total</span>
                                <span>Rs {totalPrice}</span>
                        </div>
                        <div className={cx(styles.cardContainer_row)}>
                                <span>Delivery</span>
                                <span>Free</span>
                        </div>
                        <div className={cx(styles.lastRow,styles.cardContainer_row)}>
                                <span>Total</span>
                                <span>Rs {totalPrice}</span>
                        </div>
                        <div className={cx(styles.lastRow,styles.cardContainer_row)}>   
                            <input className={cx(styles.placeOrderBtn,"generic_btn")} type="submit" form="checkOutForm" value="Place Order"/>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <Dialog
                open={animationModal}
                className="dialogDiv"
                >
                    <div >
                            <Tick size={100}/>
                            <h1>Order Placed</h1>
                    </div>
                </Dialog>
                <ToastContainer 
                transition={Slide}/>
            </div> 
        </div>
        )
        }
    else {
        return (  
            <div className={styles.checkout}>
                <h2>Please Login and Add Products to Cart to Check Out</h2>
            </div>
        )
  }
}

export default Checkout;
