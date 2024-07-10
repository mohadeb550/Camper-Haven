import { TProduct } from "../../../components/ui/Modal/CreateProductModal";
import baseApi from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createProduct : builder.mutation({
            query: (product : TProduct) => ({
                url : '/create-product',
                method : "POST",
                body: product,   
            }),
           invalidatesTags: ['Products']
        }),
        getProducts : builder.query({
            query: () => ({
                url : '/products',
                method : "GET",   
            }),
            providesTags: ['Products']
        }),
    })
})

export const { useCreateProductMutation, useGetProductsQuery } = productApi;