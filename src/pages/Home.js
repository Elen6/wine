import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';
import "./Home.css";
import glass from "../assets/glass.png";



const Home = () => {
  return (
    <div>
      <Header />
      {/* bajaka@ berel aystex  */}

      <div className='glass'>
        <img src={glass} />

      </div>

      <p className="glass-text"> Life is too short to drink bad wine </p>

      <div className='shop'>  <div className='shop-container'> Shop </div>     </div>

      <Products />

      <img className="wine-bottle-with-flowers" width="100%" height="100%" src="/images/pic5.png" alt='img' />


      <div className='naturalWine'>Natural Wine is not New.It’s what Wine always was and yet, somehow today it has become a rarity...</div>
      <div className="lines"><img width="6%" height="6%" src="/images/group38.png" alt='img' /> </div>

      <div className='karmrahyut'>

        <div className='text-karmrahyut'><p className='karmrahyut_header'>GRAPE OF KARMRAHYUT</p> <p className='karmrahyut_main_text'>Armenian delicious Red Wine “Sentimental” is made from sort of “Karmrahyut”, which is one of the latercomer varieties of grapes.It has unique taste and color, which makes the Wine wonderful and immortal.
          Sentimental is a pure Wine and not contain additives.
          After trying it you will remember its miracle taste wishing to enjoy it again and again...</p></div>

        <aside className='photo-karmrahyut'>
          <img className='karmrahyutPhoto' width='835px' height='800px' src="/images/karmrahyut.jpg" alt='img' />
        </aside>

      </div>
      
      <Footer />
    </div>
  )
}

export default Home