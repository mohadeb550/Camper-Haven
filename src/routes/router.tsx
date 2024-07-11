import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../pages/Home";
import ProductManagement from "../pages/ProductManagement";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/> ,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/product-management',
                element: <ProductManagement/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/products/:productId',
                element: <ProductDetails/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
        ]
    }
])