import React from 'react'
import cx from 'classnames'
import footerStyle from './footer.module.scss'

// Icons
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'

function Index() {
    var date = new Date();
    return (
        <footer className={cx(footerStyle.footer)}>
            <div className={cx(footerStyle.footer_container)}>
                <div className={cx(footerStyle.txt)}>
                eDukan {date.getFullYear()}  &copy;  All Rights Reserved
                </div>
                <div className={cx("social_icons") }>
                        <ul >
                            <li><FaFacebookF className="social_icon fb_icon"/></li>
                            <li><FiInstagram className="social_icon insta_icon"/></li>
                            <li><AiOutlineTwitter className="social_icon twitter_icon"/></li>
                        </ul>
                    </div>
            </div>
        </footer>
    )
}

export default Index
