import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './searchBar.module.scss'
import cx from 'classnames'

function Index() {

    let [searchVal,setSearchVal] = useState();
    
    return (
        <div className={cx(styles.searchBar)}>
           <div className={cx(styles.searchBarContainer)}>
            <h4 className={styles.searchTitle}>Search the Store</h4>
            <div className={cx(styles.inputGroup,"input-group mb-3")}>
                    <input type="text" className="form-control" placeholder="Search Product..."
                    onChange={(e)=>{setSearchVal(e.target.value)}}
                    value={searchVal} 
                   />
                    <div>
                        <Link to={`/searchDetails/${searchVal}`}><button className={cx(styles.searchBtn,"generic_btn")} type="button">Search</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
