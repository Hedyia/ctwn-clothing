import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { items } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>{"go to check out".toUpperCase()}</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: items(state)
});
export default connect(mapStateToProps)(CartDropdown);
