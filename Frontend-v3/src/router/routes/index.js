import { privateRoutes } from "./privateRoute";
import MainLayout from './../../layout/MainLayout';
import { Children } from "react";
import ProtectRoute from "./ProtectRoute";
import DashboardMainLayout from "../../layout/DashboardMainLayout";
import { sellerShopRoutes } from "./sellerShopRoute";


export const getRoutes = ()=> {

    privateRoutes.map(r => {
        r.element = <ProtectRoute route={r}>{r.element}</ProtectRoute>
    })

    // sellerShopRoutes.map(r => {
    //     r.element = <ProtectRoute route={r}>{r.element}</ProtectRoute>
    // })

    // Array.prototype.push.apply(privateRoutes,sellerShopRoutes); 



    return {
        path : '/',
        element: <MainLayout/>,
        children: privateRoutes
    }
}
