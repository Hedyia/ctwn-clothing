import cartActionsTypes from "./cart.types";
import { addItemToCart, removeItem, decrementQty } from "./cart.utils";

const INTIAL_STATE = {
  hidden: false,
  items: []
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case cartActionsTypes.TRIGGER_SHOW_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionsTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload)
      };
    case cartActionsTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItem(state.items, action.payload)
      };

    case cartActionsTypes.DECREMENT_QTY:
      return {
        ...state,
        items: decrementQty(state.items, action.payload)
      };
    default:
      return state;
  }
};
export default cartReducer;
