import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import SignUp from './components/Signup';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='body container-fluid py-20px'>
      <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}/>  
          <Route path='/menu' element={<Menu />}/>  
          <Route path='/contact' element={<Contact />}/>  
          <Route path='/signup' element={<SignUp />}/>  
        </Routes>  
      </div>
   
      </>
      
      <CartProvider>
        <Cart />
      </CartProvider>
     
    </div>
  );
}

export default App;
