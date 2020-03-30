import cartActionsTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

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
    default:
      return state;
  }
};
export default cartReducer;
