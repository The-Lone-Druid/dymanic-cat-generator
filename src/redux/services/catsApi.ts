// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpoints } from "./endpoints";

// Define a service using a base URL and expected endpoints
export const catsApi = createApi({
  reducerPath: "catsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CATS_API }),
  endpoints: (builder) => ({
    getCat: builder.query({
      query: (args) => ({
        url: `${endpoints.getCat}?${args}`,
        method: "GET",
      }),
    }),
    getCatOnDemand: builder.mutation({
      query: (args) => ({
        url: `${endpoints.getCat}?${args}`,
        method: "GET",
      }),
    }),
    // getAllCats: builder.mutation({
    //   query: (args) => ({
    //     url: `/api/cats?${args}`,
    //     method: "GET",
    //   }),
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCatQuery, useGetCatOnDemandMutation } = catsApi;
