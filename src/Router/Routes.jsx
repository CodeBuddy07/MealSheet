import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import UserDashboard from "../UserDashboard/userDashboard";
import Bazar from "../Bazar/Bazar";
import Root from "../Root/Root";



const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/dashboard",
          element: <UserDashboard></UserDashboard>,
        },
        {
          path: "/bazar",
          element: <Bazar></Bazar>,
        },
      ]
    }
  ]);

export default Routes;
