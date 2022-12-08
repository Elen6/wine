
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About_us from './pages/About_us';
import Home from './pages/Home';
import Sentimental_favorites from './pages/Sentimental_favorites';
import Contact_us from './pages/Contact_us';
import Sentimental_exclusive from './pages/Sentimental_excusive';
// import { Navbar } from 'react-bootstrap';
import Store from './pages/Store';



// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent from './components/Navbar';
// import { Container } from 'react-bootstrap';


import CartProvider from './CartContext';


function App() {
  return (
    <>
      <CartProvider>
        {/* <Container> */}
          {/* <NavbarComponent>
          </NavbarComponent> */}
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={< Home />} />
              <Route path='/about' element={< About_us />}></Route>
              <Route path='/favorites' element={< Sentimental_favorites />}></Route>
              <Route path='/contact' element={< Contact_us />}></Route>
              {/* <Route path='/shop' element={< NavbarComponent />}></Route> */}
              <Route path='/exclusive' element={< Sentimental_exclusive />}></Route>
              <Route path='/store' element={<Store />}></Route>
            </Routes>
          </BrowserRouter>

        {/* </Container> */}
      </CartProvider>
    </>

  );
}

export default App;
