import React from 'react'
import wines from '../api/wines';
import './Products.css';

const Products = () => {
  return (
    <div>

      {/* products container */}

      <div className="products-container">

        {wines.map((elem, index) => (
          <div className="box" key={index}>
            <img className="wine-bottle" width="250" height="250px" src={elem.image} alt='img' />
            {/* <h3> {elem.title} </h3> */}
            <p className="elem-type"> {elem.type} </p>
            <p className="elem-price"> {elem.price}$ </p>
             


          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

