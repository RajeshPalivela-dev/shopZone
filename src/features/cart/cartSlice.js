import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  searchInput: "",
  cartQuanty: {},
};
const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItem(state, action) {
      console.log(state, action, "state and action in reducers add");
      state.cartItems.push(action.payload);
      state.totalAmount += action.payload.price;
      //find no occurences
      state.cartQuanty = state.cartItems.reduce((acc, item) => {
        acc[item.id] = (acc[item.id] || 0) + 1;
        return acc;
      }, {});
      console.log(state.cartQuanty, "state cartquanti");
    },

    removeItem(state, action) {
      console.log(state, action, "action and state");
      const id = action.payload.id;

      const index = state.cartItems.findIndex((item) => item.id === id);

      if (index !== -1) {
        const product = state.cartItems[index];

        state.totalAmount -= product.price;
        state.cartItems.splice(index, 1);
      }

      state.cartQuanty = state.cartItems.reduce((acc, item) => {
        acc[item.id] = (acc[item.id] || 0) + 1;
        return acc;
      }, {});
    },
    removeAll(state, action) {
      console.log(state, action, "state and action in remoall");
      state.cartItems = [];
      state.totalAmount = 0;
    },
    searchItem(state, action) {
      console.log(state, action, "search in state nd actions");
      state.searchInput = action.payload;
    },
  },
});
console.log(cartSlice, "cartSlice");
console.log(initialState, "inital state");
export const { addItem, removeItem, removeAll, searchItem } = cartSlice.actions;
export default cartSlice.reducer;
