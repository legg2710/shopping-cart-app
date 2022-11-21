import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import SignUp from './components/Signup';
import Login from './components/Login';

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
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={SignUp}/>
              <Route path="/login" component={Login}/>
            </Switch>
          </AuthProvider>
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
