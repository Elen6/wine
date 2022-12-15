import Menu from './Menu';
import './Header.css';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';
import { CiShoppingBasket } from 'react-icons/ci';
import Ellipse from "../assets/Ellipse.png";




function Header() {
  return (
    <header className="header">

      <div className="sent2022">

        <p>Get 15% off with code Sent{new Date().getFullYear()} </p>

      </div>
      <ul className="socials1">
        <li>
        <a href="https://m.facebook.com/sentimental.wine?eav=AfYz-3Fj4bqOP2dDcAzWUmKOLiMmWpNreDdncAONdBrVwrkt9R4OzGwqCl1dpG_0ccc&paipv=0&_rdr"
       >
        <FiFacebook size="25px" className='face'  />
      </a>
        </li>
        <li> <a href="https://www.instagram.com/sentimental.wine/?fbclid=IwAR0_uz6ZUMIoFh9OS6t9J144MVRMKN9P-ZjZ3TQJDMb8h2iG5xeOEg0f_wQ">
        <FaInstagram size="25px" className='insta' />
      </a></li>
        <div className="Icons2">
          <li><IoIosSearch size="25px" /> </li>
          <li><CiHeart size="25px" /></li>
          <li><BsPerson size="25px" /></li>
          <li> <CiShoppingBasket size="25px" /></li>
        </div>
      </ul>

      <div className="ellips">
        <img className="logo" src={Ellipse} /> <br />
        <p className='vernagir'> SENTIMENTAL </p>
      </div>
      <p className="BySimon">BY SIMONYANS </p>


      <Menu />

      <div className='view'>
        {/* divi poxaren routeri meji link grel u p-n hanel */}
        <div className="view-container" > <p1>VIEW ALL</p1></div>
      </div>




      {/* <div className='glass'>
        <img src={glass} />

      </div>

      <p className="glass-text"> Life is too short to drink bad wine </p> */}





    </header>
  );
}

export default Header;