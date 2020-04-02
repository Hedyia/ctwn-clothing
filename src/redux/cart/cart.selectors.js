import { createSelector } from "reselect";

const cart = state => state.cart;

export const selectItems = createSelector([cart], cart => cart.items);
export const selectCartHidden = createSelector([cart], cart => cart.hidden);

export const selectCartItemsCount = createSelector([selectItems], items =>
  items.reduce((accmlator, item) => (accmlator += item.quantity), 0)
);

export const selectCartItemsTotal = createSelector([selectItems], items =>
  items.reduce(
    (accmlator, item) => (accmlator += item.quantity * item.price),
    0
  )
);
