import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer';
import './About_us.css';
import Ellipse from "../assets/Ellipse.png";
import pic4 from "../assets/pic4.png";
import { IoIosSearch } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';
import { CiShoppingBasket } from 'react-icons/ci';




const About_us = () => {
  return (
    <>


      <ul className="socials1-about">
        <div className="Icons2">
          <li><IoIosSearch size="25px" /> </li>
          <li><CiHeart size="25px" /></li>
          <li><BsPerson size="25px" /></li>
          <li> <CiShoppingBasket size="25px" /></li>
        </div>
      </ul>

      <div className="ellips-about">
        <img className="logo-about" src={Ellipse} width='70px' height='70px' /> <br />
        <p className='vernagir-about'> SENTIMENTAL </p>
      </div>
      <p className="BySimon-about">BY SIMONYANS </p>



      {/* <div>
        <div header-container-about>

          <img className="logo_about" src={Ellipse} />


          <p className='header-about'> SENTIMENTAL </p>

        </div>

        <p className="BySimon-about">BY SIMONYANS </p>

      </div> */}

      <div>


        <Menu className='menuAbout' />
      </div>




      <div className='photo_about'>
        <img className='img-about' src={pic4} width='70%' height='10%' alt='wine-bottles' />

      </div>





      <div className='text_about'>
        Since ancient days Armenia has been famous for its winemaking traditions.Armenian Wine, as we know, is the favorite drink of Armenian people and a Christian sybol. Armenia is one of the most ancient countries of Viticulture, where Winemaking had reached significant development since the Urartian times (4-6 centures BC). <br/>
        So Simonyans Family start to make a Natural Wine named “Sentimental”. You know that people think that Natural Wine is a fad or a new thing, but it’s the traditional way to make wine. <br/>
        “Sentimental” Wine doesn’t have additives (like sugar,acid,sulfites, etc.). It’s made from sort of “Karmrahyut”, which is classifield as late-ripening wine grape varieties. It has relatively high frost resistance. High nutritional value, taste, healng properties are harmoniously combined in the fresh fruits of grapes. It has unique taste and color. <br/>  
        “Sentimental” Wine produced and bottles by Simonyans Family. It’s particularly  exciting type of wine and tasted alive and delicious.
        This Wine is made from unadulterated fermented grape juice and nothing else.
        So enjoy it...
      </div>



      <div>


        <Footer />
      </div>





    </>
  )
}

export default About_us;