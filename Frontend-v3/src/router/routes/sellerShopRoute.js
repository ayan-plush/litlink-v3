import { lazy } from "react";
const Pending = lazy(()=> import("../../views/Pending"));
const Deactive = lazy(()=> import("../../views/Deactive"));
const OrderDetails = lazy(()=> import("../../views/seller/OrderDetails"));
const EditProduct = lazy(()=> import("../../views/seller/EditProduct"));
const Profile = lazy(()=> import("../../views/seller/Profile"));
const SellerToCustomer = lazy(()=> import("../../views/seller/SellerToCustomer"));
const SellerToAdmin = lazy(()=> import("../../views/seller/SellerToAdmin"));
const Payments = lazy(()=> import("../../views/seller/Payments"));
const Orders = lazy(()=> import("../../views/seller/Orders"));
const DiscountProducts = lazy(()=> import("../../views/seller/DiscountProducts"));
const Products = lazy(()=> import("../../views/seller/Products"));
const AddProduct = lazy(()=> import("../../views/seller/AddProduct"));
const SellerDashboard = lazy(()=> import("../../views/seller/SellerDashboard"));
const Unauthorized = lazy(()=> import("../../views/Unauthorized"));
import Wishlist from './../../pages/Wishlist';



export const sellerShopRoutes = [

    {
        path: '/wishlist',
        element: <Wishlist/>,
        role: 'seller',
        visability : ['active','deactive','pending']
    },
    // {
    //     path: '/seller/dashboard',
    //     element: <SellerDashboard/>,
    //     role: 'seller',
    //     status : 'active'
    // },
    // {
    //     path: '/seller/dashboard/add-product',
    //     element: <AddProduct/>,
    //     role: 'seller',
    //     status : 'active'
    // },
    // {
    //     path: '/seller/dashboard/products',
    //     element: <Products/>,
    //     role: 'seller',
    //     status : 'active'
    // },
    // {
    //     path: '/seller/dashboard/discount-product',
    //     element: <DiscountProducts/>,
    //     role: 'seller',
    //     status : 'active'
    // },
    // {
    //     path: '/seller/dashboard/orders',
    //     element: <Orders/>,
    //     role: 'seller',
    //     visability : ['active','deactive']
    // },
    // {
    //     path: '/seller/dashboard/payments',
    //     element: <Payments/>,
    //     role: 'seller',
    //     status : 'active'
    // },
    // {
    //     path: '/seller/dashboard/chat-customer',
    //     element: <SellerToCustomer/>,
    //     role: 'seller',
    //     status : 'active'
    // },
    // {
    //     path: '/seller/dashboard/chat-customer/:customerId  ',
    //     element: <SellerToCustomer/>,
    //     role: 'seller',
    //     status : 'active'
    // },
    // {
    //     path: '/seller/dashboard/chat-support',
    //     element: <SellerToAdmin/>,
    //     role: 'seller',
    //     visability : ['active','deactive','pending']
    // },
    // {
    //     path: '/seller/dashboard/profile',
    //     element: <Profile/>,
    //     role: 'seller',
    //     visability : ['active','deactive','pending']
    // },
    // {
    //     path: '/seller/dashboard/edit-product/:productId',
    //     element: <EditProduct/>,
    //     role: 'seller',
    //     status: 'active'
    // },
    // {
    //     path: '/seller/dashboard/order/details/:orderId',
    //     element: <OrderDetails/>,
    //     role: 'seller',
    //     visability : ['active','deactive']
    // },
    // {
    //     path: '/seller/account-pending',
    //     element: <Pending/>,
    //     ability: 'seller'
    // },
    // {
    //     path: '/seller/account-deactive',
    //     element: <Deactive/>,
    //     ability: 'seller'
    // },
    // {
    //     path: '/unauthorized',
    //     element: <Unauthorized/>,
    //     ability: 'seller'
    // }

]