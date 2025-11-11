import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayouts/MainLayout";
import AuthLayout from "../Components/AuthLayout/Authlayout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from "../Components/Error/Error";
import HomePage from "../Pages/HomePage/HomePage";
import PetProducts from "../Components/PetProducts/PetProducts";
import AddListPet from "../Pages/AddListPet/AddListPet";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import MyListing from "../Pages/MyListing/MyListing";
import MyOrders from "../Pages/MyOrders/MyOrders";
import NewUpdatePro from "../Components/NewUpdatePro/NewUpdatePro";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";


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
    
  },{
    path:'/add-list',
    element:<PrivateRoute>
      <AddListPet></AddListPet>
    </PrivateRoute>
  },{
    path:'/my-list',
    element:<PrivateRoute> 
      <MyListing></MyListing>
    </PrivateRoute>
  },{
    path:'/product-details/:id',
    element:(<PrivateRoute>
      <ProductDetails></ProductDetails>
    </PrivateRoute>),
    // loader:({params}) => fetch(`http://localhost:3000/pet_product/${params.id}`)
  },{
    path:'/update-product/:id',
    element:(<PrivateRoute>
      <NewUpdatePro></NewUpdatePro>
    </PrivateRoute>),
     loader:({params}) => fetch(`http://localhost:3000/pet_product/${params.id}`)
  }
  ,{
    path:'/update-products/:id',
    element:(<PrivateRoute>
      <UpdateProduct></UpdateProduct>
    </PrivateRoute>),
     loader:({params}) => fetch(`http://localhost:3000/pet_product/${params.id}`)
  }
  
  
  ,{
    path:'/my-order',
    element:<PrivateRoute>
      <MyOrders></MyOrders>
    </PrivateRoute>,
    
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