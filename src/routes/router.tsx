import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../pages/Home";
import ProductManagement from "../pages/ProductManagement";

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
        ]
    }
])