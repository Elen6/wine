import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer';
import './About_us.css';
import pic4 from "../assets/pic4.png";
import sent_bySimon from "../assets/sent_bySimon.png";





const About_us = () => {
  return (
    <>
    <div className='allAbout'>
 <div className='about-container' >
        <img className='sent_bySimonAbout' src={sent_bySimon} alt="logo" />
        </div>
        <div className='menu-about'>
          <Menu />
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

      </div>
        <Footer />
      </div>





    </>
  )
}

export default About_us;