import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayouts/MainLayout";
import AuthLayout from "../Components/AuthLayout/Authlayout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from "../Components/Error/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },{
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
        {
            path:'/auth/login',
            element:<Login></Login>,
        },
        {
          path:'/auth/signup',
            element:<Signup></Signup>  
        }
    ]
  },{
    path:'/*',
    element:<Error></Error>
  }
]);



export default router