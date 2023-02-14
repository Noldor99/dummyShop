import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IpreProducts, IProduct } from '../../models/models'


export const dummApi = createApi({
  reducerPath: 'dumm/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com'
  }),
  refetchOnFocus: false,
  endpoints: build => ({
    getProductsRepos: build.query<IpreProducts, number>({
      query: (skip) => ({
        url: `/products?limit=4&skip=${skip * 4 - 4}`,
        method: 'GET'
      }),
    }),
    getSingleProducts: build.query<IProduct, any>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET'
      }),
    }),
    getCategoriesAll: build.query({
      query: () => ({
        url: `/products/categories`,
        method: 'GET'
      }),
    }),
    getCategories: build.query<IpreProducts, any>({
      query: (obj) => ({
        url: `/products/category/${obj.category}?limit=4&skip=${obj.page * 4 - 4}`,
        method: 'GET'
      }),
    }),
    getSearch: build.query<IpreProducts, any>({
      query: (obj) => ({
        url: `/products/search?q=${obj.search}&limit=4&skip=${obj.page * 4 - 4}`,
        method: 'GET'
      }),
    }),
  })
})

export const { useLazyGetProductsReposQuery,
  useGetCategoriesAllQuery,
  useLazyGetCategoriesQuery,
  useLazyGetSearchQuery,
  useLazyGetSingleProductsQuery
} = dummApi