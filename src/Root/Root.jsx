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
            // {
            //     path: "/checkout/:id",
            //     element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
            //     loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            // },
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
                // loader: () => fetch(`https://tourism-server-beta.vercel.app/tourists`)
            },
            {
                path: "/myJobs",
                element: <PrivetRoute><MyJobs></MyJobs></PrivetRoute>,
                // loader: () => fetch(`https://tourism-server-beta.vercel.app/tourists`)
            },
            {
                path: "/blogs",
                element:<Blogs></Blogs>,
                // loader: () => fetch(`https://tourism-server-beta.vercel.app/tourists`)
            },

            // {
            //     path: "/countries/:countryName",
            //     element: <CountriesData></CountriesData>,
            //     loader: ({params}) => fetch(`https://tourism-server-beta.vercel.app/countries/${params.countryName}`)
            // },
            // {
            //     path: "/update/:id",
            //     element: <PrivetRoute><Update></Update></PrivetRoute>,
            //     loader: ({ params }) => fetch(`https://tourism-server-beta.vercel.app/single-tourists/${params.id}`)
            // },
        ]
    },
]);

export default router;