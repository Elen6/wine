import React from 'react'

// import { productsArray } from '../wines'
import { wines } from '../api/wines'
import ProductCart from '../components/ProductCart'
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './Store.css';

const Store = () => {
  return (
    <>
      <Menu />

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

    </>
  )
}

export default Store




