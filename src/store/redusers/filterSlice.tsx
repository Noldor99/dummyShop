
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dummApi } from "./dummApi";

interface filterSliceProps {
  searchValue: string,
  categoryAll: [],
  currentСategory: string,
  currentPage: number
}

const initialState: filterSliceProps = {
  searchValue: '',
  categoryAll: [],
  currentСategory: '',
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValueAction: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.currentPage = 1;
    },
    setCurrentСategory: (state, action: PayloadAction<string>) => {
      state.searchValue = '';
      state.currentСategory = action.payload;
      state.currentPage = 1;
    },
    setCurrentPageAction: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(dummApi.endpoints.getCategoriesAll.matchFulfilled, (state, { payload }) => {
        state.categoryAll = payload;
      })
  },
});


export const {
  setSearchValueAction,
  setCurrentPageAction,
  setCurrentСategory,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer

