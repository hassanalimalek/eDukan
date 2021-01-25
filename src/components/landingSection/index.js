import React from 'react'
import Styles from './landingSection.module.scss'
import cx from 'classnames'
import landingImg from '../../assets/images/landingImg.png'
import Typist from 'react-text-typist';
// Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

function index() {
    return (
        <div className={cx(Styles.landing)}>
            <div className={cx(Styles.landing_container)}>
                <div className={cx(Styles.landing_txt)}>
                    <h3 className={cx(Styles.landing_main_txt)}>You Name it</h3>
                    <h3 className={cx(Styles.animation_txt)}><Typist sentences={['Watches', 'Shoes', "Jersey's"]} 
                    cursorSmooth={true} typingSpeed={120} pauseTime={1500}
                    ></Typist></h3>
                    <h3 className={cx(Styles.landing_main_txt)}>We got it.</h3>
                </div>
                <div className={cx(Styles.landing_img)}>
                   <img alt="landing" src={landingImg}></img>
                </div>
            </div>
            <Dialog
                        open
                        // onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div>
                            <h1>Hassan</h1>
                            <h2>Modal</h2>
                        </div>

            </Dialog>
        </div>
    )
}

export default index
