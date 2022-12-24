import React from 'react'
import './Footer.css'; 
import {Link} from "react-router-dom";
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
                            {/* <li><Link to="#">Order</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">Personal info</Link></li> */}
                        </ul>
                    </div>
                    {/* colomn 2 */}

                    <div className="col">
                        <ul className="list-unstyled">
                            <li>Store</li>
                            <li><Link to="/SentimentalStores">See our stores</Link></li>
                           
                           
                            

                        </ul>
                    </div>

                    {/* colomn3 */}

                    <div className="col">
                        <ul className="list-unstyled">
                           
                            <li> Follow us</li>
                            <div className="socials">
                            <li><a target="_blank" href="https://m.facebook.com/sentimental.wine?eav=AfYz-3Fj4bqOP2dDcAzWUmKOLiMmWpNreDdncAONdBrVwrkt9R4OzGwqCl1dpG_0ccc&paipv=0&_rdr"><FiFacebook className='face'/> </a></li>
                            <li><a target="_blank" href="https://www.instagram.com/sentimental.wine/?fbclid=IwAR0_uz6ZUMIoFh9OS6t9J144MVRMKN9P-ZjZ3TQJDMb8h2iG5xeOEg0f_wQ"><FaInstagram/></a></li>
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