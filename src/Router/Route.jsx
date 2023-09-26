import { createBrowserRouter } from "react-router-dom";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=> fetch('./donation.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default myCreateRoute;