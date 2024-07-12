import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../pages/Home";
import ProductManagement from "../pages/ProductManagement";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccessPage from "../pages/OrderSuccessPage";
import AboutUs from "../pages/AboutUs";

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
            {
                path: '/checkout',
                element: <Checkout/>
            },
            {
                path: '/order-successful',
                element: <OrderSuccessPage/>
            },
            {
                path: '/about-us',
                element: <AboutUs/>
            },
        ]
    }
])