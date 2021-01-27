import React from 'react'
import cx from 'classnames'
import styles from './navbar.module.scss'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// History
import { useHistory } from "react-router-dom";

// Modal Component
import Modal from '../modal'

// Icons
import { FaFacebookF,FaShoppingCart } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'




function Index() {
    let dispatch = useDispatch();
    let history = useHistory();

    let [modalState,setModalState] = useState(false);
    let cartState = useSelector((state)=>state["cartReducer"]);
    let loginState =useSelector((state)=>state["loginReducer"]["login"])

    // Cart Value in Navbar 
    var value=0;
    if(cartState.length){
        value=(cartState[0].totalProducts)
    }
    
   let closeModal=()=>{
       setModalState(false);
   }
    
   let logout = ()=>{
        dispatch({ type: 'logout'})
        closeModal();
        history.push('/')   
    }


    return (
        <>
        <nav className={cx(styles.nav)}>
            <div className={cx(styles.nav__container)}>
                <div>
                    <Link to="/"><h4 className={cx(styles.brand)}><span>e</span>Dukan</h4></Link>
                </div>
                <div className={cx(styles.nav__content)}>
                    <div className={cx(styles.social_icons,"d-none d-md-inline-block") }>
                        <ul >
                            <li><FaFacebookF className="social_icon fb_icon"/></li>
                            <li><FiInstagram className="social_icon insta_icon"/></li>
                            <li><AiOutlineTwitter className="social_icon twitter_icon"/></li>
                        </ul>
                    </div>
                    <div>
                        <Link
                         to="/cart" className={styles.productCart}><FaShoppingCart/><span className={styles.cartValue}>{value}</span></Link>
                         {(loginState)?
                                 <button onClick={()=>logout()}  className={cx("generic_btn",styles.login_btn)}>Logout</button>:
                                 <button onClick={()=>{setModalState(true)}}  className={cx("generic_btn",styles.login_btn)}>Login</button>
                         }
                         <Modal state={modalState} closeModal={closeModal}/>
                    </div>
                </div>
            </div>
        </nav>
        
        </>
    )
}

export default Index
