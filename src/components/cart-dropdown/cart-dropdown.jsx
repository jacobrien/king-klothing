import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import './cart-dropdown.scss';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();

  const clickHandler = () => {
    setIsCartOpen(!isCartOpen);
    navigate('checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div className="empty-message">Your cart is empty</div>
        )}
      </div>
      <Button onClick={clickHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
