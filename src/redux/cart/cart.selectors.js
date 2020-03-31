import { createSelector } from "reselect";

const cart = state => state.cart;

export const items = createSelector([cart], cart => cart.items);

export const selectCartItemsCount = createSelector([items], items =>
  items.reduce((accmlator, item) => (accmlator += item.quantity), 0)
);
