
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import './ProductCart.css'

function ProductCart(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <>

                <div className='cardBody'>
                <p className='cartTitle'>{product.title} </p>
                  
                <p className='cartText'>${product.price}</p>
                { productQuantity > 0 ?
                    <div className='cart-conteiner'>
                      
                                <p className='inCart'>In Cart: {productQuantity}</p>
                            
                           <div className='plusMinus'>
                                <button  onClick={() => cart.addOneToCart(product.id)} className='addOneToCart'> + </button>
                               
                                <button  onClick={() => cart.removeOneFromCart(product.id)} className='removeOneFromCart'> - </button>
                                </div>
                            
                        <button className='removeAll'  onClick={() => cart.deleteFromCart(product.id)} >Remove from cart</button>
                    </div>
                    :
                    
                    <button className='addToCart'  onClick={() => cart.addOneToCart(product.id)}>Add To Cart</button>
                }
            
            </div>
        
        </>
    )
}

export default ProductCart;



