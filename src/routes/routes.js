import Home from "../pages/Home";
import Login from "../pages/Login";
import Table from "../pages/Table";

export const routes = [
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

];
export default routes;