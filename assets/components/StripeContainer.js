// ! COMPONENTS
import CheckoutForm from './stripe/CheckoutForm';
// ! FILES
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripeTestPromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

console.log(stripeTestPromise);

const StripeContainer = () => {
  return <Elements stripe={stripeTestPromise}></Elements>;
};

export default StripeContainer;
