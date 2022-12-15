import React, {useEffect, useState} from 'react'
import { wines } from '../api/wines';
import './Products.css';

const Products = () => {
console.log(1)
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
    <div>
      {/* products container */}
      <div className="products-container">
        {wines.map((elem, index) => (
          <div className="box" key={index}>
            {/* linkeri mej dnel___________ */}
            <img className="wine-bottle" width="250" height="250px" src={elem.image} alt='img' />
            {/* <h3> {elem.title} </h3> */}
            <p className="elem-title"> {elem.title} </p>
            <p className="elem-price"> {elem.price}$ </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

