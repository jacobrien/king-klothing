import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const subtractCartItem = (cartItems, itemToRemove) => {
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  subtractItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(count);
  }, [cartItems]);

  const addItemToCart = async (cartItem) => {
    setCartItems(addCartItem(cartItems, cartItem));
  };

  const subtractItemFromCart = (cartItem) => {
    if (cartItem.quantity === 1) {
      removeItemFromCart(cartItem);
    } else {
      setCartItems(subtractCartItem(cartItems, cartItem));
    }
  };

  const removeItemFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    subtractItemFromCart,
    removeItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
