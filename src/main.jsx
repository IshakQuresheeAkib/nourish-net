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
import FoodRequest from './pages/FoodRequest/FoodRequest'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ErrorElement from './ErrorElement/ErrorElement';
import FAQ from './components/FAQ/FAQ';
import AuthProvider from './provicer/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes/PrivateRoutes';
import FoodDetails from './pages/FoodDetails/FoodDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RequestedFood from './pages/RequestedFood/RequestedFood';
import ManageFoods from './pages/Managefoods/ManageFoods';


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/available-foods',
        element:<AvailableFoods></AvailableFoods>
      },
      {
        path:'/available-foods/:id',
        element:<PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>
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
      },
      {
        path:'/requested-food',
        element:<PrivateRoutes><RequestedFood></RequestedFood></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
);