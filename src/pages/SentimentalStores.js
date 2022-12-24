// import React  from 'react';
import './SentimentalStores.css';
import "./Home.css";
import Footer from '../components/Footer';
import sent_bySimon from "../assets/sent_bySimon.png";
import Menu from '../components/Menu';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';





const SentimentalStores = () => {
  return (
    <div className='wholePage'>
      <div className='allSent'>
        <div className='sent-container' >
          <img className='sent_bySimonSent' src={sent_bySimon} alt="logo" />
          <div className='menu-sent'>
          </div>

          <div>


            <Menu />
          </div>
        </div>


        <div className="lines-sent"><img width="6%" height="6%" src="/images/group38.png" alt='img' /> </div>

        <p className='ourStor'>OUR STORES</p>
      </div>


      <div className='storesContainer' >

        <div className='arandzin'>
          <div className='storePhoto' >
            <img width="100%"  src="/images/alkohol.png" alt='img' />
          </div>

          <div className='storeText'>

            <p className="alcohol"> Alcohall Wine & Spirites Shop</p>
            <p className='headerStore'>Find Store</p>




            <div className="socSent">
              <a target="_blank"
                href="https://m.facebook.com/sentimental.wine?eav=AfYz-3Fj4bqOP2dDcAzWUmKOLiMmWpNreDdncAONdBrVwrkt9R4OzGwqCl1dpG_0ccc&paipv=0&_rdr"
              >
                <FiFacebook size="25px" className='face-sent' />
              </a>
              <a href="https://www.instagram.com/sentimental.wine/?fbclid=IwAR0_uz6ZUMIoFh9OS6t9J144MVRMKN9P-ZjZ3TQJDMb8h2iG5xeOEg0f_wQ">
                <FaInstagram size="25px" className='face-sent' />
              </a>

            </div>

            <p className='headerStore'>Address</p>
            <p className='text-store'>4/5 Amiryan Street, Yerevan, Armenia</p>

            <p className='headerStore'>Phone Number</p>
            <p className='text-store'>+374 11 575777</p>
          </div>
        </div>



        <div className='arandzin'>
          <div className='storePhoto' >
            <img width="100%"  src="/images/alkohol.png" alt='img' />
          </div>

          <div className='storeText'>

            <p className="alcohol"> Alcohall Wine & Spirites Shop</p>
            <p className='headerStore'>Find Store</p>




            <div className="socSent">
              <a target="_blank"
                href="https://m.facebook.com/sentimental.wine?eav=AfYz-3Fj4bqOP2dDcAzWUmKOLiMmWpNreDdncAONdBrVwrkt9R4OzGwqCl1dpG_0ccc&paipv=0&_rdr"
              >
                <FiFacebook size="25px" className='face-sent' />
              </a>
              <a href="https://www.instagram.com/sentimental.wine/?fbclid=IwAR0_uz6ZUMIoFh9OS6t9J144MVRMKN9P-ZjZ3TQJDMb8h2iG5xeOEg0f_wQ">
                <FaInstagram size="25px" className='face-sent' />
              </a>

            </div>

            <p className='headerStore'>Address</p>
            <p className='text-store'>4/5 Amiryan Street, Yerevan, Armenia</p>

            <p className='headerStore'>Phone Number</p>
            <p className='text-store'>+374 11 575777</p>
          </div>
        </div>






        <div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default SentimentalStores