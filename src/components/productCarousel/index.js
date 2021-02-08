import React from 'react'
import cx from 'classnames'
import styles from './productCarousel.module.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// Icon
import { BsArrowRight } from 'react-icons/bs'
// Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Carousel Responsive Object
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 820, min: 620 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
      items: 1
    }
  };

function Index(props) {
    let category = props.type;
    const productArray = useSelector((state)=>state.rootReducer[0]["products"][category]);
   
    if(productArray){
      let products1 =Object.keys(productArray).map((id)=>{
          return (
              <div key = {id} className={cx(styles.carousel_item,"card")}>
                <img alt="alt" src={productArray[id]["imgSrc"]}></img>
                <hr/>
                <div className={cx("card-body")}>
                    <h4 className={cx("card-title")}>{productArray[id]["title"]}</h4>
                    <h5 className={cx("card-subtile",styles.card_pricing)}>Rs {productArray[id]["basePrice"]}</h5>
                    <p className="card-text">{productArray[id]["type"]}</p>
                    <Link to={{
                            pathname:`/products/${category}/${id}`,
                            state:{page:"home"}}}  className={cx(styles.product_btn,"generic_btn")}>View Details &nbsp;<BsArrowRight className={styles.btn_arrow}/></Link>
                </div>
          </div>
          )
      })
      if(products1.length){
          return (
              <div id={category} className={cx(styles.products)}>
                  <div className={cx(styles.products_container)}>
                      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Collection</h2>
                      <div className={cx(styles.products_carousel)}>
                      <Carousel
                          swipeable={true}
                          draggable={true}
                          showDots={false}
                          responsive={responsive}
                          ssr={true} // means to render carousel on server-side.
                          infinite={true}
                          autoPlaySpeed={1000}
                          keyBoardControl={true}
                          customTransition="all .5"
                          transitionDuration={500}
                          containerClass="carousel-container"
                          dotListClass="custom-dot-list-style"
                          itemClass="carousel-item-padding-60-px"
                          >
                          {products1}
                      </Carousel>
                      </div>
                  </div>
              </div>
        )
      }
    }
    
}

export default Index
