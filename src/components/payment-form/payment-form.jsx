import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Button from '../button/button';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from 'react-icons/fa6';
import './payment-form.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);

    const response = await fetch(
      'https://0dpifdq04i.execute-api.us-east-1.amazonaws.com/dev/stripe',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.REACT_APP_API_GATEWAY_KEY}`,
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }
    )
      .then((resp) => resp.json())
      .catch((err) => console.log(err));

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Succesful');
      }
    }
  };

  return (
    <div className="payment-form-container">
      <div className="form-container">
        <h2>Credit Card Payment:</h2>
        <h3>Test Card: 4242 4242 4242 4242</h3>
        <div className="card-element">
          <CardElement />
        </div>
        <div>
          <FaCcVisa size={50} />
          <FaCcMastercard size={50} />
          <FaCcAmex size={50} />
          <FaCcDiscover size={50} />
        </div>
        <Button
          buttontype="inverted"
          onClick={paymentHandler}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
