import { useContext } from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleCart = () => {
    console.log('first')
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
