import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllJobs from "../Pages/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs";
import AddJob from "../Pages/AddJob";
import MyJobs from "../Pages/MyJobs";
import Blogs from './../Pages/Blogs';
import ViewDetails from './../Pages/ViewDetails';
import Update from "../Pages/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/allJob",
                element: <AllJobs></AllJobs>,
            },
            {
                path: "/appliedJobs",
                element: <PrivetRoute><AppliedJobs></AppliedJobs></PrivetRoute>
            },
            {
                path: "/addJob",
                element: <PrivetRoute><AddJob></AddJob></PrivetRoute>,
            },
            {
                path: "/job/:id",
                element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: "/myJobs",
                element: <PrivetRoute><MyJobs></MyJobs></PrivetRoute>,
            },
            {
                path: "/blogs",
                element:<Blogs></Blogs>
            },
            {
                path: "/update/:id",
                element: <PrivetRoute><Update></Update></PrivetRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },
        ]
    },
]);

export default router;