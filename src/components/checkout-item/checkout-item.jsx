import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, subtractItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const addHandler = (item) => addItemToCart(cartItem);
  const subtractHandler = (item) => subtractItemFromCart(cartItem);
  const removeHandler = (item) => removeItemFromCart(cartItem);

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