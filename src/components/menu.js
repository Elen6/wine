import React from 'react'
import { Link } from "react-router-dom"
import "./Menu.css";
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import Modal from './Modal';
import { CiShoppingBasket } from 'react-icons/ci';



const Menu = ({backgroundColor, color, basket}) => {

  const cart = useContext(CartContext)
  const [openModal, setOpenModal] = useState(false)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
      <nav className={`menu ${backgroundColor ? 'menu1': ""}`}>
        <ul className='list' >
          <li>
            <Link to="/" className={`${color ? 'link1': "link"}`}>HOME</Link>
          </li>
          <li>
            <Link to="/about" className={`${color ? 'link1': "link"}`}>ABOUT US</Link>
          </li>
          
          <li>
            <Link to="/store"  className={` ${color ? 'link1': "link"}`}>SHOP WINE</Link>
          </li>
          
          <li>
            <Link to="/contact"  className={`${color ? 'link1': "link"}`}>CONTACT US</Link>
          </li>
          <li>
            {/* <Link to="/SentimentalStores"  className={`${color ? 'link1': "link"}`}>OUR STORES</Link> */}
          </li>
          {/* <li>
          <button className={`${ basket ? 'modalBtn1': "modalBtn"}`} onClick={() => setOpenModal(true)}> <li> <CiShoppingBasket size="25px" /></li>Cart ({productsCount} Items) </button>
          </li> */}
          
        </ul>
      </nav>
      {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}



      
    </>
  )
}



export default Menu;