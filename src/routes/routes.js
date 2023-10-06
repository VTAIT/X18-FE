import Food from "../pages/Food";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Order from "../pages/Order";
import Payment from "../pages/Payment";
import Table from "../pages/Table";

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
];
export default routes;