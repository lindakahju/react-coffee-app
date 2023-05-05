// action for adding coffee to the cart
export const addCoffee = (coffee) => ({
  type: "ADD_COFFEE",
  payload: coffee,
});

// action for removing coffee from the cart
export const removeCoffee = (coffee) => ({
  type: "REMOVE_COFFEE",
  payload: coffee,
});

// action for filling the stock with a new batch of drinks
export const fillStock = (drinks) => ({
  type: "FILL_STOCK",
  payload: drinks,
});
