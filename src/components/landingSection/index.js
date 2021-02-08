import React from 'react'
import Styles from './landingSection.module.scss'
import cx from 'classnames'
import landingImg from '../../assets/images/landingImg.png'
import Typist from 'react-text-typist';


function index() {
    return (
        <div className={cx(Styles.landing)}>
            <div className={cx(Styles.landing_container)}>
                <div className={cx(Styles.landing_txt)}>
                    <h4 className={cx(Styles.landing_main_txt)}>You Name it</h4>
                    <h3 className={cx(Styles.animation_txt)}><Typist sentences={['Watches', 'Shoes', "Jersey's"]} 
                    cursorSmooth={true} typingSpeed={120} pauseTime={1500}
                    ></Typist></h3>
                    <h4 className={cx(Styles.landing_main_txt)}>We got it.</h4>
                </div>
                <div className={cx(Styles.landing_img)}>
                   <img alt="landing" src={landingImg}></img>
                </div>
            </div>
          
        </div>
    )
}

export default index
