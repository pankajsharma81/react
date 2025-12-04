import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // here we cannot call api directly
    loadcart: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const { loadcart } = cartSlice.actions;
