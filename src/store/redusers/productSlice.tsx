import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IpreProducts, IProduct } from "../../models/models";
import { dummApi } from "./dummApi";

interface productSliceProps {
  products: IProduct[] | [],
  totalPage: number
}

const initialState: productSliceProps = {
  products: [],
  totalPage: 1
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addMatcher(dummApi.endpoints.getProductsRepos.matchFulfilled, (state, { payload }: PayloadAction<IpreProducts>) => {
        state.products = payload.products;
        state.totalPage = +Math.ceil(payload.total / 4);
      })
      .addMatcher(dummApi.endpoints.getCategories.matchFulfilled, (state, { payload }: PayloadAction<IpreProducts>) => {
        state.products = payload.products;
        state.totalPage = +Math.ceil(payload.total / 4);
      })
      .addMatcher(dummApi.endpoints.getSearch.matchFulfilled, (state, { payload }: PayloadAction<IpreProducts>) => {
        state.products = payload.products;
        state.totalPage = +Math.ceil(payload.total / 4);
      })
  },
})


// export const { } = productSlice.actions
export const productReducer = productSlice.reducer  