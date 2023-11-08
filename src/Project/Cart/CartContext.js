// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If yes, update the quantity
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If not, add the item to the cart
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'REMOVE_FROM_CART':
      // Remove the item from the cart
      return state.filter(item => item.id !== action.payload.id);

    case 'INCREMENT_QUANTITY':
      // Increment the quantity of a specific item
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREMENT_QUANTITY':
      // Decrement the quantity of a specific item, and remove if it reaches 0
      return state.map(item =>
        item.id === action.payload.id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : null
          : item
      ).filter(Boolean);

    default:
      return state;
  }
};

const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const removeFromCart = (item) => dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  const incrementQuantity = (item) => dispatch({ type: 'INCREMENT_QUANTITY', payload: item });
  const decrementQuantity = (item) => dispatch({ type: 'DECREMENT_QUANTITY', payload: item });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity , calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
