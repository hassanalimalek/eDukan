import React from 'react'
import cx from 'classnames'
import styles from './navbar.module.scss'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

// Icons
import { FaFacebookF,FaShoppingCart } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'


function Index() {
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
                        <Link to="/cart" className={styles.productCart}><FaShoppingCart/><span className={styles.cartValue}>{value}</span></Link>
                        <button className={cx("generic_btn",styles.login_btn)}>Login</button>
                    </div>
                    
                </div>
            </div>
        </nav>
        
        </>
    )
}

export default Index
