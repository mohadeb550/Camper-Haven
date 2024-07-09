import baseApi from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createProduct : builder.mutation({
            query: (product) => ({
                url : '/create-product',
                method : "POST",
                body: product,   
            })
        })     
    })
})

export const { useCreateProductMutation } = productApi;