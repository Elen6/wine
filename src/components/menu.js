import React from 'react'
import {Link} from "react-router-dom"
import "./Menu.css";


const menu = () => {
  return ( <>
    <nav className='menu'>
        <ul className='list' >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/exclusive">SENTIMENTAL EXCLUSIVE</Link>
          </li>
          <li>
            <Link to="/shop">SHOP WINE</Link>
          </li>
          <li>
            <Link to="/favorites">SENTIMENTAL FAVORITES</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
        </ul>
      </nav>

      <div Classname="viewAll"> </div>
      </>
  )
}

export default menu