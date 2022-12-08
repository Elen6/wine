import React from 'react'
import { Button } from 'react-bootstrap';
import CartProduct from './CartProduct';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import './Modal.css';

const Modal = ({ open, onClose }) => {

    const cart = useContext(CartContext)
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    if (!open) return null;
    return (

        <div onClick={onClose} className='overlay'>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='modalContainer'
            >

                <div className='modalRight'>
                    <p className='closeBtn' onClick={onClose}>
                        X
                    </p>
                    <div className='content'>
                        {productsCount > 0 ?
                            <>
                                <p>Items in your cart:</p>
                                {cart.items.map((currentProduct, idx) => (
                                    // <h1> {currentProduct.id} </h1>
                                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                                ))}

                                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                                <Button variant="success">
                                    Purchase items!
                                </Button>
                            </>
                            :
                            <h1>There are no items in your cart!</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal






