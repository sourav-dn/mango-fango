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
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import DashBoard from "../Components/DashBoard/DashBoard";
import OverView from "../Components/OverView/OverView";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "/allplants",
          Component: AllPlants
        },
        // {
        //   path: "/addplant",
        //   element: <PrivateRoute><AddPlant></AddPlant></PrivateRoute>
        // },
        {
          path: "/about-us",
          Component: AboutUs
        },
        {
          path: "/contact",
          Component: Contact
        },
        // {
        //   path: "/myplants",
        //   element: <PrivateRoute><MyPlants></MyPlants></PrivateRoute>
        // },
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
          element: <PlantDetails></PlantDetails>
        },
        {
          path: "/update/:id",
          element: <PrivateRoute><UpdatePlant></UpdatePlant></PrivateRoute>
        },
        {
          path: "/dashboard",
          element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
          children: [
            {
              path: "overview",
              element: <OverView></OverView>
            },
            {
              path: "allplants",
              element: <PrivateRoute><AllPlants></AllPlants></PrivateRoute>
            },
            {
              path: "addplant",
              element: <PrivateRoute><AddPlant></AddPlant></PrivateRoute>
            },
            {
              path: "myplants",
              element: <PrivateRoute><MyPlants></MyPlants></PrivateRoute>
            }
          ]
        }
    ]
  },
]);