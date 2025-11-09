import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayouts/MainLayout";
import AuthLayout from "../Components/AuthLayout/Authlayout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from "../Components/Error/Error";
import HomePage from "../Pages/HomePage/HomePage";
import PetProducts from "../Components/PetProducts/PetProducts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
       {
    path:'/',
    element:<HomePage></HomePage>,
    loader:()=>fetch('http://localhost:3000/recent-product')
    
  },
       {
    path:'/pets-supplies',
    element:<PetProducts></PetProducts>,
    loader:() => fetch('http://localhost:3000/pet_product'),
  }
    ]
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