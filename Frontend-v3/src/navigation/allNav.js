import {AiOutlineDashboard, AiOutlineShoppingCart} from 'react-icons/ai'
import {BiCategory} from 'react-icons/bi'
import {FaBook, FaBookReader, FaMoneyBill, FaShoppingCart, FaUser, FaUsers, FaUserTimes} from 'react-icons/fa'
import {MdDiscount, MdPayment} from 'react-icons/md'
import {FaCodePullRequest} from 'react-icons/fa6'
import { IoChatbubbles } from "react-icons/io5";

export const allNav =[
    {
        id:18,
        title: 'Home',
        icon: <FaBookReader />,
        role: 'seller',
        path: '/'
    },
    {
    id:1,
    title: 'Dashboard',
    icon: <AiOutlineDashboard/>,
    role: 'admin',
    path: '/admin/dashboard'
    },
    {
        id:2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart/>,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id:3,
        title: 'Genres',
        icon: <BiCategory/>,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id:4,
        title: 'Seller',
        icon: <FaUsers/>,
        role: 'admin',
        path: '/admin/dashboard/seller'
    },
    {
        id:5,
        title: 'Payment request',
        icon: <MdPayment/>,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id:6,
        title: 'Deactivate Sellers',
        icon: <FaUserTimes/>,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id:7,
        title: 'Seller Request',
        icon: <FaCodePullRequest/>,
        role: 'admin',
        path: '/admin/dashboard/sellers-request'
    },
    {
        id:8,
        title: 'Live Chat',
        icon: <IoChatbubbles />,
        role: 'admin',
        path: '/admin/dashboard/chat-seller'
    },
    // {
    //     id:9,
    //     title: 'Dashboard',
    //     icon: <AiOutlineDashboard />,
    //     role: 'seller',
    //     path: '/seller/dashboard'
    // },
    
    {
        id:10,
        title: 'Add Books',
        icon: <FaBook />,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id:11,
        title: 'My Books',
        icon: <FaBookReader />,
        role: 'seller',
        path: '/seller/dashboard/products'
    },
    // {
    //     id:12,
    //     title: 'Discount Books',
    //     icon: <MdDiscount />,
    //     role: 'seller',
    //     path: '/seller/dashboard/discount-product'
    // },
    // {
    //     id:13,
    //     title: 'Orders',
    //     icon: <FaShoppingCart />,
    //     role: 'seller',
    //     path: '/seller/dashboard/orders'
    // },
    // {
    //     id:14,
    //     title: 'Payments',
    //     icon: <FaMoneyBill />,
    //     role: 'seller',
    //     path: '/seller/dashboard/payments'
    // },
    {
        id:15,
        title: 'Chat',
        icon: <IoChatbubbles />,
        role: 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id:16,
        title: 'Chat With Support',
        icon: <IoChatbubbles />,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id:17,
        title: 'Profile',
        icon: <FaUser />,
        role: 'seller',
        path: '/seller/dashboard/profile'
    },
    

]