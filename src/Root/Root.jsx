import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
// import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Home from "../Pages/Home";

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
            // {
            //     path: "/bookings",
            //     element: <PrivetRoute><Bookings></Bookings></PrivetRoute>,
            // },
            // {
            //     path: "/addTourists",
            //     element: <PrivetRoute><AddTourists></AddTourists></PrivetRoute>
            // },
            // {
            //     path: "/myList",
            //     element: <PrivetRoute><MyList></MyList></PrivetRoute>,
            //     loader: () => fetch(`https://tourism-server-beta.vercel.app/tourists`)
            // },
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