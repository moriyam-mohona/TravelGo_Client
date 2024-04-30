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
import AllTouristSpotDetails from "../Pages/AllTouristSpotDetails";
import MyList from "../Pages/MyList";
import UpdatePage from "../Pages/UpdatePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allTouristsSpot",
        element: (
          <PrivateRoute>
            <AllTouristSpot></AllTouristSpot>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://assignment-10-server-five-gamma.vercel.app/api/v1/touristSpot"
          ),
      },
      {
        path: "/allTouristsSpot/:id",
        element: (
          <PrivateRoute>
            <AllTouristSpotDetails></AllTouristSpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-five-gamma.vercel.app/api/v1/touristSpot/byId/${params.id}`
          ),
      },
      {
        path: "/touristSpot/:id",
        element: (
          <PrivateRoute>
            <TouristSpotDetails></TouristSpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-five-gamma.vercel.app/api/v1/touristSpot/byId/${params.id}`
          ),
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
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList/:id",
        element: (
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
