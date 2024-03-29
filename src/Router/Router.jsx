import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import UserDetails from "../Components/UseerDetails/UserDetails";
import AddUser from "../Components/AddUser/AddUser";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/userDetails/:id",
                element: <UserDetails></UserDetails>,
                loader: ({params}) => fetch(`https://dummyjson.com/users/${params.id}`)
            },
            {
                path:'/addUser',
                element:<AddUser></AddUser>
            }
        ]
    }
])
export default router;