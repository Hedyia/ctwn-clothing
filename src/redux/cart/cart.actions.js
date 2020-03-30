import cartActionsTypes from "./cart.types";

export const triggerCartDropdown = () => ({
  type: cartActionsTypes.TRIGGER_SHOW_CART_DROPDOWN
});

export const addItem = item => ({
  type: cartActionsTypes.ADD_ITEM,
  payload: item
});
