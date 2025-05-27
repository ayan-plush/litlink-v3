import { lazy } from "react";
import Verify from "../../views/seller/Verify";
import OAuthRedirectHandler from "../../views/auth/OAuthRedirectHandler";
const ForDevs = lazy(()=> import("../../views/auth/ForDevs"));
const AboutUs = lazy(()=> import("../../views/auth/AboutUs"));
const ShopHome3 = lazy(()=> import("../../pages/ShopHome3"));
const Unauthorized = lazy(()=> import("../../views/Unauthorized"));
const Login = lazy(()=> import("../../views/auth/Login"));
const Register = lazy(()=> import("../../views/auth/Register"));
const AdminLogin = lazy(()=> import("../../views/auth/AdminLogin"));
const Home = lazy(()=> import("../../views/Home"));
const Shops = lazy(()=> import('./../../pages/Shops'));
const ProductDetails = lazy(()=> import('./../../pages/ProductDetails'));
const CategoryShop = lazy(()=> import('./../../pages/CategoryShop'));
const SearchProducts = lazy(()=> import('./../../pages/SearchProducts'));
const Wishlist = lazy(()=> import('../../pages/Wishlist'));


const publicRoutes = [

    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/googleVerify/:token',
        element: <OAuthRedirectHandler/>
    },
    {
        path: '/verify/:token',
        element: <Verify/>
    },
    {
        path: '/admin/login',
        element: <AdminLogin/>
    },
    // {
    //     path: '/dashboard',
    //     element: <Home/>
    // },
    {
        path: '/unauthorized',
        element: <Unauthorized/>
    },
    {
        path: '/aboutus',
        element: <AboutUs/>
    },
    {
        path: '/fordev',
        element: <ForDevs/>
    },
    {
        path: '/',
        element: <ShopHome3/>
    },
    {
        path: '/library',
        element: <Shops/>
    },
    {
        path: '/product/details/:productId',
        element: <ProductDetails/>
    },
    {
        path: '/products?',
        element: <CategoryShop/>
    },
    {
        path: '/products/search',
        element: <SearchProducts/>
    },
    {
        path: '/wishlist',
        element: <Wishlist/>
    },

]

export default publicRoutes
