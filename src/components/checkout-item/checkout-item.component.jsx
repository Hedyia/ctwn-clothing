import React from "react";
import "./checkout-item.styles.scss";
import {
  removeItem,
  removeSelectedItem,
  decrementItemQty,
  addItem
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
const CheckoutItem = ({ cartItem, dispatch }) => {
  const { id, imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(decrementItemQty(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeSelectedItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null)(CheckoutItem);
