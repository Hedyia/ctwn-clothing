export const addItemToCart = (cartItems, itemToAdd) => {
  const isItemExist = cartItems.find(item => item.id === itemToAdd.id);
  if (isItemExist) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
