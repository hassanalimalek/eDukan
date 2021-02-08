import React from 'react'
import styles from './productCover.module.scss'
import cx from 'classnames'
import {Link} from 'react-scroll'
import {useSelector} from 'react-redux'


function Index(props) {
    let category = props.type

    // Id for Scolling
    let id = category.substr(0, category.indexOf('H')); 

    const state = useSelector((state)=>state.coverPageReducer[category][0])
    const theme = state.theme === 'dark' ? 'dark':'light'

    return (
        <div className={cx(styles.productCover,styles[theme])}>
            <div className={cx(styles.productContainer)}>
                <div className={cx(styles.product_txt)}>
                <div className={cx(styles.card)}>
                    <div className="card-body">
                    <h3 className="card-title ">{state.title}</h3>
                    <div className={cx(styles.horizantal_bar)}/>
                    <p className="card-text">{state.description}</p>
                    <Link to={id} smooth={true}>
                        <button className={cx(styles.view_btn,"generic_btn")}>View More</button>
                    </Link>
                  </div>
                </div>
                </div>
                <div className={cx(styles.product_img)}>
                    <img alt="alt text" src={state.imgSrc}/>
                </div>
            </div>
        </div>
      
    )
}

export default Index
