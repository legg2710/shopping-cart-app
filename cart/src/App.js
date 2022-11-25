import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import Navbar from './components/Navbar';
import { NavLink } from 'react-router-dom';
import { Switch } from "react-native";
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import SignUp from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='body container-fluid py-20px'>
      <>
      <Navbar />
      <div className="container">
        <React.Fragment>
          <NavLink path='/' element={<Home />}/>  
          <NavLink path='/menu' element={<Menu />}/>  
          <NavLink path='/contact' element={<Contact />}/>
          <AuthProvider>
            <Switch>
              <NavLink exact path='/' component={Dashboard}/>
              <NavLink path="/signup" component={SignUp}/>
              <NavLink path="/login" component={Login}/>
            </Switch>

          </AuthProvider>
        </React.Fragment>  
      </div>

      </>
      
      <CartProvider>
        <Cart />
      </CartProvider>


    </div>
  );
}

export default App;
