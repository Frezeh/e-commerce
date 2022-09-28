import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType, SingleProductListType } from "../types";

const initialState: CartType = {
  cart: [],
  currency: "USD",
  openCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartType, action: PayloadAction<SingleProductListType>) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if(item) item.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if(item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }    
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    changeCurrency: (state, action: PayloadAction<string>) => {    
      state.currency = action.payload;
    },
    openCart: (state, action: PayloadAction<boolean>) => {    
      state.openCart = action.payload;
    },
    clearCart: (state) => {    
      state.cart = [];
    }
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  changeCurrency,
  openCart,
  clearCart
} = cartSlice.actions;
