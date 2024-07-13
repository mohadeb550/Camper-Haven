import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://campers-shop-backend-eta.vercel.app'
    }),
    tagTypes: ['Products', 'Single-product'],
    endpoints: () => ({})
})

export default baseApi;