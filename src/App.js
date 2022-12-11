
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About_us from './pages/About_us';
import Home from './pages/Home';

import Contact_us from './pages/Contact_us';


import Store from './pages/Store';





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
              
              <Route path='/contact' element={< Contact_us />}></Route>
              {/* <Route path='/shop' element={< NavbarComponent />}></Route> */}
              
              <Route path='/store' element={<Store />}></Route>
            </Routes>
          </BrowserRouter>

        {/* </Container> */}
      </CartProvider>
    </>

  );
}

export default App;
