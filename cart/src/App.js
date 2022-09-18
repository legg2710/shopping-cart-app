import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
     
    </div>
  );
}

export default App;
