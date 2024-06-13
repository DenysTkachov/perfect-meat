import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  issuedProducts: {},
  returnedProducts: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addIssuedProduct: (state, action) => {
      const { userId, product } = action.payload;
      if (!state.issuedProducts[userId]) {
        state.issuedProducts[userId] = [];
      }
      state.issuedProducts[userId].push(product);
    },
    addReturnedProduct: (state, action) => {
      const { userId, product } = action.payload;
      if (!state.returnedProducts[userId]) {
        state.returnedProducts[userId] = [];
      }
      state.returnedProducts[userId].push(product);
    },
  },
});

export const { addIssuedProduct, addReturnedProduct } = productsSlice.actions;
export default productsSlice.reducer;