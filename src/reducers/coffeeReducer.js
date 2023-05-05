import { coffeeStore } from "../store/coffeeStore";

// defining a reducer that will return the new state based on action
const coffeeReducer = (state = coffeeStore, action) => {
  let cart = [...state.cart];
  switch (action.type) {
    // update cart with new coffee - either by increasing amount by 1 or adding to cart
    case "ADD_COFFEE":
      let coffeeToAdd = action.payload;
      let coffeeIndex = cart.findIndex(
        (cartItem) => cartItem.id === coffeeToAdd.id
      );
      if (coffeeIndex > -1) {
        cart[coffeeIndex].amount += 1;
      } else {
        coffeeToAdd.amount = 1;
        cart.push(coffeeToAdd);
      }
      return {
        ...state,
        cart: [...cart],
      };
    case "REMOVE_COFFEE":
      // decreasing amount by 1 or removing coffee from cart
      let coffeeToRemove = action.payload;
      let index = cart.findIndex(
        (cartItem) => cartItem.id === coffeeToRemove.id
      );
      if (coffeeToRemove.amount > 1) {
        cart[index].amount -= 1;
      } else {
        cart.splice(index, 1);
      }
      return {
        ...state,
        cart: [...cart],
      };
    case "FILL_STOCK":
      // update the drinks array with a new batch of drinks
      return {
        ...state,
        drinks: [...action.payload],
      };
    default:
      return state;
  }
};

export default coffeeReducer;
