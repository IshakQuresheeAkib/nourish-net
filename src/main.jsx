import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routes from './routes/Routes';
import AvailableFoods from './pages/Availablefoods/AvailableFoods'
import AddFood from './pages/Addfood/AddFood'
import ManageFoods from './pages/ManageFoods/ManageFoods'
import FoodRequest from './pages/FoodRequest/FoodRequest'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ErrorElement from './ErrorElement/ErrorElement';
import FAQ from './components/FAQ/FAQ';
import AuthProvider from './provicer/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/available-foods',
        loader:()=>fetch('http://localhost:5000/available-foods'),
        element:<AvailableFoods></AvailableFoods>
      },
      {
        path:'/add-food',
        element:<PrivateRoutes><AddFood></AddFood></PrivateRoutes>
      },
      {
        path:'/manage-my-foods',
        element:<PrivateRoutes><ManageFoods></ManageFoods></PrivateRoutes>
      },
      {
        path:'/my-food-request',
        element:<PrivateRoutes><FoodRequest></FoodRequest></PrivateRoutes>
      },
      {
        path:'/faq',
        element:<FAQ></FAQ>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>
);