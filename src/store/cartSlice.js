import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existProduct = state.items.find((item) => item.id === product.id);
      if (!existProduct) {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.items.push({ ...productId, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
      if (product.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
