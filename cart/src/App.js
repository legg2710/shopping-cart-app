import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Contacto from './pages/Contacto';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break 
    case "/menu":
      component = <Menu />
        break
    case "/contacto":
      component = <Contacto />
  }
  return (
    <div>
      <>
      <Navbar />
      <div> </div>
     {component}
      </>
      
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
     
    </div>
  );
}

export default App;
