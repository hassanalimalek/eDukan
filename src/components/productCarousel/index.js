import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import styles from './productCarousel.module.scss'
// React btn
import { BsArrowRight } from 'react-icons/bs'
// Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
      breakpoint: { max: 820, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

let viewOnclick = (id,category,dispatch)=>{
 
  console.log("View Onclick")
  console.log(id)
  console.log(category)
  dispatch({ type: 'getProduct',payload:{category:category,id:id} })
}

function Index(props) {
    let dispatch = useDispatch()
    let category = props.type;
    console.log(category)
    const shoeArr = useSelector((state)=>state.rootReducer[category]);
    console.log(shoeArr)
    let products = shoeArr.map((product)=>{
        let id = product.id
        return (
            <div  className={cx(styles.carousel_item,"card")}>
              <img alt="alt" src={product.imgSrc}></img>
              <hr/>
              <div className={cx("card-body")}>
                  <h4 className={cx("card-title")}>{product.title}</h4>
                  <h5 className={cx("card-subtile",styles.card_pricing)}>Rs {product.basePrice}</h5>
                  <p class="card-text">{product.description}</p>
                  <Link to={`/products/${category}/${product.id}`} onClick={(e)=>viewOnclick(id,category,dispatch)} class={cx(styles.product_btn,"generic_btn")}>View Details &nbsp;<BsArrowRight className={styles.btn_arrow}/></Link>
                
              </div>
        </div>
        )
    })
    console.log(shoeArr)

    
    return (
        <div id={category} className={cx(styles.products)}>
            <div className={cx(styles.products_container)}>
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Collection</h2>
                <div className={cx(styles.products_carousel)}>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-60-px"
                    >
                    {products}
                </Carousel>
                </div>
            </div>
            

        </div>
    )
}

export default Index
