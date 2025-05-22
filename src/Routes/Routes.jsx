import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPassword from "../Pages/ForgetPassword";
import PrivateRoute from "./PrivateRoute";
import Footer from "../Components/Footer/Footer";
import PlantDetails from "../Components/PlantDetails/PlantDetails";
import UpdatePlant from "../Components/UpdatePlant/UpdatePlant";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "/allplants",
          Component: AllPlants
        },
        {
          path: "/addplant",
          element: <PrivateRoute><AddPlant></AddPlant></PrivateRoute>
        },
        {
          path: "/myplants",
          element: <PrivateRoute><MyPlants></MyPlants></PrivateRoute>
        },
        {
          path: "/login",
          Component: Login
        },
        {
          path: "/register",
          Component: Register
        },
        {
          path: "/forgetpassword",
          Component: ForgetPassword
        },
        {
          path: "/footer",
          Component: Footer
        },
        {
          path: "/plant/:id",
          element: <PrivateRoute><PlantDetails></PlantDetails></PrivateRoute>
        },
        {
          path: "/update/:id",
          element: <PrivateRoute><UpdatePlant></UpdatePlant></PrivateRoute>
        }
    ]
  },
]);