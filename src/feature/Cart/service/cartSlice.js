import { createSlice } from "@reduxjs/toolkit";

const cartListFromLocalStorage = JSON.parse(
  localStorage.getItem("cartList") || "[]"
);
export const cartListReducer = createSlice({
  name: "cart",
  initialState: {
    cartList: cartListFromLocalStorage,
    // [], // [{...product, quantity},..]
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

      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },

    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter((item) => {
        return item.id !== action.payload.id;
      });

      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },

    adjustQuantity: (state, action) => {
      const qty = parseInt(action.payload.quantity);
      state.cartList = state.cartList.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: qty }
          : item;
      });

      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    displayCartPopUp: (state, action) => {
      state.cartPopUp.status = action.payload;
    },
  },
});
