import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  addItemToCart,
  subtractItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.actions';
import './checkout-item.scss';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addHandler = (item) => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const subtractHandler = (item) => {
    dispatch(subtractItemFromCart(cartItems, cartItem));
  };
  const removeHandler = (item) => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={subtractHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
