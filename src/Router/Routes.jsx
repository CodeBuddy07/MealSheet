import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import UserDashboard from "../UserDashboard/userDashboard";
import Bazar from "../Bazar/Bazar";
import Root from "../Root/Root";
import Bills from "../Bills/Bills";



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
          path: "/bazar",
          element: <Bazar></Bazar>,
        },
        {
          path: "/dashboard",
          element: <UserDashboard></UserDashboard>,
        },
        {
          path: "/bills",
          element: <Bills></Bills>,
        },
      ]
    }
  ]);

export default Routes;
