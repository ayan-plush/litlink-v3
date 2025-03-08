import { lazy } from "react";
import LandingPage from "../../views/auth/LandingPage";
import AboutUs from "../../views/auth/AboutUs";

const Unauthorized = lazy(()=> import("../../views/Unauthorized"));
const Login = lazy(()=> import("../../views/auth/Login"));
const Register = lazy(()=> import("../../views/auth/Register"));
const AdminLogin = lazy(()=> import("../../views/auth/AdminLogin"));
const Home = lazy(()=> import("../../views/Home"));
const ShopHome = lazy(()=> import('./../../pages/ShopHome'));
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
        path: '/admin/login',
        element: <AdminLogin/>
    },
    {
        path: '/dashboard',
        element: <Home/>
    },
    {
        path: '/unauthorized',
        element: <Unauthorized/>
    },
    {
        path: '/welcome',
        element: <LandingPage/>
    },
    {
        path: '/aboutus',
        element: <AboutUs/>
    },
    {
        path: '/',
        element: <ShopHome/>
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
