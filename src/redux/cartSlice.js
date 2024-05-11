import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cartProducts: [],
  orders: {
    address: "",
    products: [],
  },
};

export const cartSliceReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    addTocart: (state, action) => {
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    },
    removeFromCart: (state, action) => {
      const findIndexToDelete = state.cartProducts.findIndex(
        (prod) => prod.id === action.payload
      );
      state.cartProducts.splice(findIndexToDelete, 1);
    },
    handleIncrement: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (prod) => prod.id === action.payload
      );
      state.cartProducts[productIndex].count += 1;
      console.log(current(state));
    },

    handleDecrement: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (prod) => prod.id === action.payload
      );

      if (state.cartProducts[productIndex].count > 1) {
        state.cartProducts[productIndex].count -= 1;
        console.log(current(state));
      }
    },
    placedOrder: (state, action) => {
      state.orders.products = state.cartProducts;
      state.cartProducts = [];
      state.orders.address = action.payload;
    },
  },
});

export const {
  addTocart,
  updateCount,
  loadAllProducts,
  removeFromCart,
  handleIncrement,
  handleDecrement,
  placedOrder,
} = cartSliceReducer.actions;
export default cartSliceReducer.reducer;
