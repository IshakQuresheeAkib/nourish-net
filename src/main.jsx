import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routes from './routes/Routes';
import About from './pages/About/About';
import AvailableFoods from './pages/Availablefoods/AvailableFoods'
import AddFood from './pages/Addfood/AddFood'
import ManageFoods from './pages/ManageFoods/ManageFoods'
import FoodRequest from './pages/FoodRequest/FoodRequest'
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/available-foods',
        element:<AvailableFoods></AvailableFoods>
      },
      {
        path:'/add-food',
        element:<AddFood></AddFood>
      },
      {
        path:'/manage-my-foods',
        element:<ManageFoods></ManageFoods>
      },
      {
        path:'/my-food-request',
        element:<FoodRequest></FoodRequest>
      },
      {
        path:'/contact-us',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);