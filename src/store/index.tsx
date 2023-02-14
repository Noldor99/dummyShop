import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { filterReducer } from './redusers/filterSlice'
import { productReducer } from './redusers/productSlice'
import { dummApi } from './redusers/dummApi'
import { cartReducer } from './redusers/cartSlice'


export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
    [dummApi.reducerPath]: dummApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dummApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch