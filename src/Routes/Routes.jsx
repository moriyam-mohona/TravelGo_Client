import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import PrivateRoute from "./PrivateRoutes";
import TouristSpotDetails from "../Components/TouristSpotDetails";
import AllTouristSpot from "../Pages/AllTouristSpot";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/touristSpot"),
      },
      {
        path: "/touristSpot/:_id",
        element: (
          <PrivateRoute>
            <TouristSpotDetails></TouristSpotDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/touristSpot"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addTouristsSpot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/allTouristsSpot",
        element: (
          <PrivateRoute>
            <AllTouristSpot></AllTouristSpot>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
