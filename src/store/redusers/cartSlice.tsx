
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLSCart } from "../../utils/getLSCart";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { IProduct } from "../../models/models";



export interface ICartSliceState {
  totalPrice: number;
  items: IProduct[]
}

const { items, totalPrice } = getLSCart();

const initialState: ICartSliceState = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemAction: (state, action: PayloadAction<IProduct>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItemAction: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem && findItem.count !== 0) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItemAction: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItemsAction: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});


export const {
  addItemAction,
  removeItemAction,
  clearItemsAction,
  minusItemAction,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer  
