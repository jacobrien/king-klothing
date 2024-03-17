import { useState } from 'react';
import Button from '../button/button';

import './cart-dropdown.scss';

const CartDropdown = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    //
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button onClick={clickHandler}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
