import Menu from './Menu';
import './Header.css';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom"; 
// import { BsPerson } from 'react-icons/bs';

import Ellipse from "../assets/Ellipse.png";




function Header() {
  return (
    <header className="header">

      <div className="sent2022">

        <p>Get 15% off with code Sent{new Date().getFullYear()} </p>

      </div>
      <ul className="socials1">
        <li>
        <a target="_blank" 
         href="https://m.facebook.com/sentimental.wine?eav=AfYz-3Fj4bqOP2dDcAzWUmKOLiMmWpNreDdncAONdBrVwrkt9R4OzGwqCl1dpG_0ccc&paipv=0&_rdr"
       >
        <FiFacebook size="25px" className='face'  />
      </a>
        </li>
        <li> <a href="https://www.instagram.com/sentimental.wine/?fbclid=IwAR0_uz6ZUMIoFh9OS6t9J144MVRMKN9P-ZjZ3TQJDMb8h2iG5xeOEg0f_wQ">
        <FaInstagram size="25px" className='insta' />
      </a></li>
        <div className="Icons2">
         
          {/* <li><BsPerson size="25px" /></li> */}
          
        </div>
      </ul>
        <div className='sentimental-container'>
      <div className="ellips">
        <img className="logo" src={Ellipse} /> <br />
        <p className='vernagir'> SENTIMENTAL </p>
      </div>
      <p className="BySimon">BY SIMONYANS </p>
      </div>

    <Menu tandz color />

      <div className='view'>
        {/* divi poxaren routeri meji link grel u p-n hanel */}
        <div className="view-container" > 
        <p>
      
         <Link to= "/store"> VIEW ALL </Link>
         {/* <li><Link to="/div className="products-container">About Us</Link></li>  */}
          </p>
        </div>
      </div>

    </header>
  );
}

export default Header;