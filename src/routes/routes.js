import { ManageNavbar } from "../modelUI/ManageNavbar";
import Food from "../pages/Food";
import Home from "../pages/Home";
import Order from "../pages/Order";
import Payment from "../pages/Payment";
import Reservation from "../pages/Reservation";
import Table from "../pages/Table";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Account from "../pages/manages/Account";
import Board from "../pages/manages/Board";
import Manage from "../pages/manages/Manage";

const routes = [
    {
        path: "/",
        component: <Home />,
        isPrivate: false,
        isAdmin: false,
    },
    {
        path: "/login",
        component: <Login />,
        isPrivate: false,
        isAdmin: false,
    },
    {
        path: "/register",
        component: <Register />,
        isPrivate: false,
        isAdmin: false,
    },
    {
        path: "/table",
        component: <Table />,
        isPrivate: false,
        isAdmin: false,
    },
    {
        path: "/order",
        component: <Order />,
        isPrivate: false,
        isAdmin: false,
    },
    {
        path: "/reservation",
        component: <Reservation />,
        isPrivate: false,
        isAdmin: false,
    },
    {
        path: "/menu",
        component: <Food />,
        isPrivate: false,
        isAdmin: false,
    },
    {
        path: "/payment",
        component: <Payment />,
        isPrivate: false,
        isAdmin: false,
    },
    {
        path: "/manage",
        component: <Manage />,
        isPrivate: false,
        isAdmin: false,
        navBar: ManageNavbar
    },
];
export default routes;