import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectItems } from "../../redux/cart/cart.selectors";
import { triggerCartDropdown } from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(triggerCartDropdown());
          history.push("/checkout");
        }}
      >
        {"go to check out".toUpperCase()}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
