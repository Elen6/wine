import React from 'react'
import './Footer.css'; 
import {Link} from "react-router-dom"
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* colomn 1 */}

                    <div className="col">
                        <ul className="list-unstyled">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="#">Order</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">Personal info</Link></li>
                        </ul>
                    </div>
                    {/* colomn 2 */}

                    <div className="col">
                        <ul className="list-unstyled">
                            <li> <a href="#">Store</a></li>
                            <li> <a href="#">See our stors</a></li>
                           
                            

                        </ul>
                    </div>

                    {/* colomn3 */}

                    <div className="col">
                        <ul className="list-unstyled">
                            <li> <a href="#">Lng</a></li>
                            <li> <a href="#">Follow us</a></li>
                            <div className="socials">
                            <li><FiFacebook/></li>
                            <li><FaInstagram/> </li>
                            </div>
                        </ul>
                    </div>
                    
                </div>

                <hr />
                <div className="row">
                    <p className="col-sm"> 
                    &copy; Sentimental   {new Date().getFullYear()} 
                     </p>



                </div>
            </div>
        </div>
    )
}

export default Footer