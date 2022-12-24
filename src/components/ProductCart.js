
import { CartContext } from '../CartContext';
import { useContext } from 'react';

import './ProductCart.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Button from './Button';


function ProductCart(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product._id);
    console.log(cart.items);
    const initialOptions = {
        "client-id": process.env.REACT_APP_CLIENT_ID,
        currency: "USD",
        intent: "capture",
        components: "buttons",
    };
    return (
        <>

            <div className='cardBody'>
                <p className='cartTitle'>{product.title} </p>

                <p className='cartText'>${product.price}</p>
                {productQuantity > 0 ?
                    <div className='cart-conteiner'>

                        <p className='inCart'> Quantity: {productQuantity}</p>

                        <div className='plusMinus'>
                            <button onClick={() => cart.addOneToCart(product._id)} className='addOneToCart'> + </button>

                            <button onClick={() => cart.removeOneFromCart(product._id)} className='removeOneFromCart'> - </button>

                            <div>
                                <PayPalScriptProvider options={initialOptions}>
                                    <Button product={product} productQuantity={productQuantity} />
                                </PayPalScriptProvider>
                            </div>
                        </div>



                        <button className='removeAll' onClick={() => cart.deleteFromCart(product._id)} >Remove from cart</button>
                    </div>


                    :

                    <button className='addToCart' onClick={() => cart.addOneToCart(product._id)}>Add To Cart</button>


                }

            </div>

        </>
    )
}

export default ProductCart;



