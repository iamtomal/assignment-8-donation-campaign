import { createBrowserRouter } from "react-router-dom";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";


const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=> fetch('')
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