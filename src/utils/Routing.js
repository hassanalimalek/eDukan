import React from 'react'
import {db} from '../utils/firebase'

// Initial Bar Loader
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";


import { BrowserRouter, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import LandingSection from '../components/landingSection'
import ProductCarousel from '../components/productCarousel'
import ProductCover from '../components/productCover'
import ProductDetail from '../components/productDetail'
import SearchBar from '../components/searchBar'
import SearchDetail from '../components/searchDetails'
import ProductCart from '../components/productCart'
import Checkout from '../components/checkout'
import Footer from '../components/footer'

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  width:25%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Routing() {

    let dispatch = useDispatch();
    var [productObjects,setProductObject]=useState(false)

    // Get Products from DB
    let getProducts = async ()=>{
        await db.ref('products').on('value',snapshot=>{
            if(snapshot.val()!=null){
              let x ={...(snapshot.val())}
              dispatch({ type: 'intialProducts',payload:{products: x} })
              setProductObject([x])
            }
        })
    }

    useEffect(()=>{
        getProducts()
    },[])// eslint-disable-line

    // Loading Bar While fetching Products.
    if(productObjects===false){
        return (
            <BarLoader loading={true} css={override}/>
        )
     }
     else{
        return (
            <BrowserRouter>
                <Navbar/>
                <Route exact path="/">
                    <LandingSection/>
                    <SearchBar/>
                    <ProductCarousel type="shoes"/>
                    <ProductCover type="watchesHeader"/>
                    <ProductCarousel type="watches"/>
                    <ProductCover type="jerseyHeader"/>
                    <ProductCarousel type="jersey"/>
                </Route>
                <Route exact path='/products/:category/:id' render={(props)=>
                        <ProductDetail {...props}/>
                } />
                <Route exact path='/searchDetails/:productName' render={(props)=>
                        <SearchDetail {...props}/>
                } />
                <Route exact path="/cart">
                    <ProductCart/>
                </Route>
                <Route exact path="/checkout" render={(props)=>
                      <Checkout {...props}/>
                }/>   
                <Footer/>
           </BrowserRouter>
            )
     }
    
}

export default Routing
