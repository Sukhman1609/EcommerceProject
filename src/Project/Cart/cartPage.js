// CartPage.js
import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, calculateTotal } = useCart();

  const handleIncrement = (item) => {
    incrementQuantity(item);
  };

  const handleDecrement = (item) => {
    decrementQuantity(item);
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}, Price: {item.price} each{' '}
            <button onClick={() => handleIncrement(item)}>+</button>{' '}
            <button onClick={() => handleDecrement(item)}>-</button>{' '}
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotal(cart)}</p>
    </div>
  );
};

export default CartPage;
