
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About_us from './pages/About_us';
import Home from './pages/Home';
import Sentimental_favorites from './pages/Sentimental_favorites';
import Contact_us from './pages/Contact_us';
import Shop_wine from './pages/Shop_wine';
import Sentimental_exclusive from './pages/Sentimental_excusive';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< Home />} />
        <Route path='/about' element={< About_us />}></Route>
        <Route path='/favorites' element={< Sentimental_favorites />}></Route>
        <Route path='/contact' element={< Contact_us />}></Route>
        <Route path='/shop' element={< Shop_wine />}></Route>
        <Route path='/exclusive' element={< Sentimental_exclusive />}></Route>
     </Routes>
     </BrowserRouter>

  );
}

export default App;
