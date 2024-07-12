import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import UserDashboard from "../UserDashboard/userDashboard";
import Bazar from "../Bazar/Bazar";
import Root from "../Root/Root";
import Bills from "../Bills/Bills";
import Task from "../Task/Task";
import MealRoutine from "../MealRoutine/MealRoutine";



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
        {
          path: "/tasks",
          element: <Task></Task>,
        },
        {
          path: "/mealroutine",
          element: <MealRoutine></MealRoutine>,
        },
      ]
    }
  ]);

export default Routes;
