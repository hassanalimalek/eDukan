import React from 'react'
import cx from 'classnames'
import styles from './navbar.module.scss'
import './modal.css'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

// Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// Icons
import { FaFacebookF,FaShoppingCart } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'

// Slide
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


function Index() {
    let [modal,setModal] = useState(false);
    const state = useSelector((state)=>state["cartReducer"]);
    var value=0;
    if(state.length){
        value=(state[0].totalProducts)
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
                        <button onClick={()=>setModal(true)} className={cx("generic_btn",styles.login_btn)}>Login</button>
                    </div>
                </div>
            </div>
        </nav>
        <div>
            <Dialog
            open = {modal}
            TransitionComponent={Transition}
            onBackdropClick = {()=>setModal(false)}
            onEscapeKeyDown  = {()=>setModal(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <div className="login-form">
                    <form>
                        <div className="avatar">
                        <i className="material-icons"><BiUserCircle/></i>
                        </div>
                        <h4 className="modal-title">Login to Your Account</h4>
                        <div className="form-group">
                            <input type="text" className="form-control"
                            placeholder="UserName" required/>
                        </div>
                        <div>
                            <input type="text" className="form-control"
                            placeholder="Password"
                            require/>
                        </div>
                        <div className="form-group small clearfix">
                            <label className="check-inline">
                                <a href="#" className="forgot-link">Forgot Password?</a>
                            </label>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block" value="Login"/>
                    </form>
                    <div className="text-center small">
                        Don't have an account.
                    </div>
                </div>
                
            </Dialog>
        </div>
        
        </>
    )
}

export default Index
