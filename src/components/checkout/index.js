import React from 'react'
import styles from './checkout.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './localModal.css'
// Dialog
import Dialog from '@material-ui/core/Dialog';
// Tick Animation
import { Tick } from 'react-crude-animated-tick';


import cx from 'classnames'



function Checkout(props) {
    let dispatch = useDispatch();
    let [animationModal,setAnimationModal] = useState(false);
    let cartState = useSelector((state)=>state["cartReducer"]);
    if(cartState.length>1){
        var totalPrice = cartState[0]["totalPrice"]
        var orderproducts = cartState.slice(1)
        var formHandler = (form)=>{
            console.log(form.firstName.value)
            let formValues = {"First Name":form.firstName.value,
                              "Last Name":form.lastName.value}
            console.log(formValues)
            console.log(orderproducts)
            console.log(totalPrice)
            dispatch({ type: 'placeOrder',formValues,totalPrice,orderproducts})
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
                                <input type="text" class="form-control" id="firstName"placeholder="First name" required/>
                        </div>
                        <div className={cx("col")}>
                                <input type="text" class="form-control" id="lastName" placeholder="Last name" required/>
                        </div>
                        </div>
                    </div>  
                    <div className="form-group">
                        <label for="inputAddress">Address 1 *</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Address 2 </label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" required/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip"/>
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
                        <Tick size={200}/>
                        <h1>Order Placed</h1>
                   </div>
               </Dialog>
           </div> 
       </div>
    )
}

export default  withRouter(Checkout);
