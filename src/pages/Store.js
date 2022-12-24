import React, {useEffect, useState} from 'react'
import sent_bySimon from "../assets/sent_bySimon.png";

import {Row, Col} from 'react-bootstrap';

// import { productsArray } from '../wines'

import ProductCart from '../components/ProductCart'
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './Store.css';

const Store = () => {
  const [wines,setWines]=useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/wine";
  
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setWines(data)
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);
 
  return (
    <>
    <div className='allStore'>
    <div className='store-container' >
        <img className='sent_bySimonStore' src={sent_bySimon} alt="logo" />
        <div className='menu-store'>
          </div>

          <div>
          <Menu basket />
        </div>
 </div>

      <h1> Welcome to the store! </h1>
      <div className='store_container'>
        {wines.map((product, index) => (
          <div key={index} >
            <img className="wine-bottle-shop" width="210" height="258px" src={product.image} alt='img' />
            <p> < ProductCart product={product} />  </p>
          </div>
        ))

        }
      </div>
      

      <Footer />
      </div>
    </>
  )
}

export default Store




