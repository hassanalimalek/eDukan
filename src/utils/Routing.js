import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from '../components/navbar'
import LandingSection from '../components/landingSection'
import ProductCarousel from '../components/productCarousel'
import ProductCover from '../components/productCover'
import ProductDetail from '../components/productDetail'
import ProductCart from '../components/productCart'
import Checkout from '../components/checkout'
import Footer from '../components/footer'


function Routing() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route exact path="/">
                <LandingSection/>
                <ProductCarousel type="shoes"/>
                <ProductCover type="watchesHeader"/>
                <ProductCarousel type="watches"/>
                <ProductCover type="jerseyHeader"/>
                <ProductCarousel type="jersey"/>
            </Route>
            <Route exact path='/products/:category/:id' render={(props)=>
                     <ProductDetail {...props}/>
            } />
            <Route exact path="/cart">
                <ProductCart/>
            </Route>
            <Route exact path="/checkout">
                <Checkout/>
            </Route>
            
               
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing
