import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("Payment Successful");
};

const StripeCheckoutButton = ({ price }) => {
  const actualPrice = price * 100;
  const publishableKey = "pk_test_2UC5CH0KSmY3T9vRUThEoCel00YYWagTDS";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={actualPrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
