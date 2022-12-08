import React from 'react'
import {Row, Col} from 'react-bootstrap'
// import { productsArray } from '../wines'
import { wines } from '../api/wines'
import ProductCart from '../components/ProductCart'
import Menu from '../components/Menu';

const Store = () => {
  return (
    <>
    <Menu />
        <h1 align="center" className="p-3">Welcome to the store!</h1>
        <Row xs={1} md={3} className="g-4">
            {wines.map((product,index)=>(
            <Col align="center" key={index}>
            {/* <h1>{product.title}</h1> */}

            <ProductCart product={product}/>
            </Col>
            ))}
            
        
        
         </Row>
        </>
  )
}

export default Store