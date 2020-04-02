export const addItemToCart = (cartItems, itemToAdd) => {
  const isItemExist = cartItems.find(item => item.id === itemToAdd.id);
  if (isItemExist) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, item) => {
  return cartItems.filter(cartItem => item.id !== cartItem.id);
};

export const decrementQty = (cartItems, item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => item.id !== cartItem.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === item.id
      ? { ...item, quantity: item.quantity - 1 }
      : cartItem
  );
};
