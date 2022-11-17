import { createSlice } from "@reduxjs/toolkit";

export const cartListReducer = createSlice({
  name: "cart",
  initialState: {
    cartList: [], // [{...product, quantity},..]
    cartPopUp: {
      status: false,
    },
  },
  reducers: {
    // action creators
    addToCart: (state, action) => {
      const isInCart = state.cartList.find((product) =>
        product.id === action.payload.id ? true : false
      );
      state.cartList = isInCart
        ? state.cartList.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cartList, { ...action.payload, quantity: 1 }];
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    adjustQuantity: (state, action) => {
      const qty = parseInt(action.payload.quantity);
      state.cartList = state.cartList.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: qty }
          : item;
      });
    },
    displayCartPopUp: (state, action) => {
      state.cartPopUp.status = action.payload;
    },
  },
});
