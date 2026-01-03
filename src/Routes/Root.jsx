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
import CategoryByProduct from "../Pages/CategoryByProduct/CategoryByProduct";
import Loading from "../Pages/Loading/Loading";
import BlogPage from "../Pages/Blog/Blog";
import ProfilePage from "../Pages/MyProfile/MyProfile";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Dashboardlayout from "../Components/AuthLayout/DashboardLayout/Dashboardlayout";
import ContactPage from "../Pages/Contact/Contact";
import TermsPrivacy from "../Pages/TermsPoliecy/TermPoliecy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
       {
    path:'/',
    element:<HomePage></HomePage>,
    loader:()=>fetch('https://pawmart-server-one.vercel.app/recent-product'),
    hydrateFallbackElement:<Loading></Loading>
    
  },
       {
    path:'/pets-supplies',
    element:<PetProducts></PetProducts>,
    loader:() => fetch('https://pawmart-server-one.vercel.app/pet_product'),
        hydrateFallbackElement:<Loading></Loading>

    
  },{
    path:'/blog',
    element:<BlogPage></BlogPage>
  },{
    path:'/contact',
    element:<ContactPage></ContactPage>
  },{
    path:'terms-policy',
    element:<TermsPrivacy></TermsPrivacy>
  }
  
  
    
  ,{
    
  },{
    path:'/product-details/:id',
    element:(
      <ProductDetails></ProductDetails>
    ),
  },
    
    
  
  {
    path:'/update-product/:id',
    element:(<PrivateRoute>
      <NewUpdatePro></NewUpdatePro>
    </PrivateRoute>),
     loader:({params}) => fetch(`https://pawmart-server-one.vercel.app/pet_product/${params.id}`),

  }
  ,{
    path:'/update-products/:id',
    element:(<PrivateRoute>
      <UpdateProduct></UpdateProduct>
    </PrivateRoute>),
     loader:({params}) => fetch(`https://pawmart-server-one.vercel.app/pet_product/${params.id}`),
         

  }
  ,{
    path:'myProfile',
    element:<ProfilePage></ProfilePage>
  }
  
  
  
 ,{
    path:'/category/:name',
    element:<CategoryByProduct></CategoryByProduct>
  }
    ]
  },{


path:'/dashboard',
element:<Dashboardlayout></Dashboardlayout>,
children:[
 {
 
    path:'my-order',
    element:<MyOrders></MyOrders>
    ,
    
  
 },{
  path:'add-list',
    element:<PrivateRoute>
      <AddListPet></AddListPet>
    </PrivateRoute>
 },{
  path:'my-list',
    element:<PrivateRoute> 
      <MyListing></MyListing>
    </PrivateRoute>
 }
]
  },
  
  
  {
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