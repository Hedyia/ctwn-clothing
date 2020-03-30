import React from "react";
import { ReactComponent as ShoppingCart } from "../../assets/cart-icon.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { triggerCartDropdown } from "../../redux/cart/cart.actions";
const CartIcon = ({ triggerCartDropdown, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={triggerCartDropdown}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  triggerCartDropdown: () => dispatch(triggerCartDropdown())
});
const mapStateToProps = state => ({
  itemsCount: state.cart.items.length
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
