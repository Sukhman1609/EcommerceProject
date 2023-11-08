
import './App.css';
import { CartProvider } from './Project/Cart/CartContext';
import RouteComp from './Project/RouteComp';

function App() {
  return (
    <div >
      <CartProvider>
      <RouteComp/>
      </CartProvider>
    </div>
  );
}

export default App;
