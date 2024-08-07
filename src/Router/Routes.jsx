import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import UserDashboard from "../UserDashboard/userDashboard";
import Bazar from "../Bazar/Bazar";
import Root from "../Root/Root";
import Bills from "../Bills/Bills";
import Task from "../Task/Task";
import MealRoutine from "../MealRoutine/MealRoutine";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import ManageMembers from "../ManageMembers/ManageMembers";
import UserProtectedRoute from "../ProtectedRoutes/UserProtectedRoute";



const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
       
        {
          path: "/",
          element: <UserProtectedRoute><Home></Home></UserProtectedRoute>,
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
        {
          path: "/tasks",
          element: <Task></Task>,
        },
        {
          path: "/mealroutine",
          element: <MealRoutine></MealRoutine>,
        },
        {
          path: "/managemembers",
          element: <UserProtectedRoute><ManageMembers></ManageMembers></UserProtectedRoute>,
        },
      ]
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/signup",
      element:<SignUp></SignUp>
    }
  ]);

export default Routes;
