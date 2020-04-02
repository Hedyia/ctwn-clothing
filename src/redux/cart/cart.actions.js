import cartActionsTypes from "./cart.types";

export const triggerCartDropdown = () => ({
  type: cartActionsTypes.TRIGGER_SHOW_CART_DROPDOWN
});

export const addItem = item => ({
  type: cartActionsTypes.ADD_ITEM,
  payload: item
});

export const removeSelectedItem = item => ({
  type: cartActionsTypes.REMOVE_ITEM,
  payload: item
});

export const decrementItemQty = item => ({
  type: cartActionsTypes.DECREMENT_QTY,
  payload: item
});
