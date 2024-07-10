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


        getSingleProduct : builder.query({
            query: (productId: string) => ({
                url : `/products/${productId}`,
                method : "GET",   
            }),
        }),

        deleteProduct : builder.mutation({
            query: (productId: string) => ({
                url : `/products/${productId}`,
                method : "DELETE",   
            }),
            invalidatesTags: ['Products']
        }),

        updateProduct : builder.mutation({
            query: ({ productId , payload } : { productId: string, payload:TProduct}) => ({
                
                url : `/products/${productId}`,
                method : "PATCH", 
                body : payload,  
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const {
     useCreateProductMutation,
      useGetProductsQuery,
       useDeleteProductMutation,
        useUpdateProductMutation, useGetSingleProductQuery } = productApi;