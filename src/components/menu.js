import React from 'react'
import { Link } from "react-router-dom"
import "./Menu.css";
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import Modal from './Modal';



const Menu = () => {

  const cart = useContext(CartContext)
  const [openModal, setOpenModal] = useState(false)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
      <nav className='menu'>
        <ul className='list' >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          
          <li>
            <Link to="/store">SHOP WINE</Link>
          </li>
          
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li>
            <button className='modalBtn' onClick={() => setOpenModal(true)}>Cart ({productsCount} Items) </button>
          </li>
        </ul>
      </nav>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />



      
    </>
  )
}



export default Menu;