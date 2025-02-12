import { lazy } from "react";
import LandingPage from "../../views/auth/LandingPage";
import AboutUs from "../../views/auth/AboutUs";
const Unauthorized = lazy(()=> import("../../views/Unauthorized"));
const Login = lazy(()=> import("../../views/auth/Login"));
const Register = lazy(()=> import("../../views/auth/Register"));
const AdminLogin = lazy(()=> import("../../views/auth/AdminLogin"));
const Home = lazy(()=> import("../../views/Home"));
import ShopHome from './../../pages/ShopHome';
import Shops from './../../pages/Shops';
import ProductDetails from './../../pages/ProductDetails';
import CategoryShop from './../../pages/CategoryShop';
import SearchProducts from './../../pages/SearchProducts';
import Wishlist from "../../pages/Wishlist";


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
