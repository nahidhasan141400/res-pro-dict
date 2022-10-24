import Analisys from "../components/analisys/Analisys";
import Appointment from "../components/appointment/Appointment";
import Config from "../components/config/Config";
import Details from "../components/details/Details";
import Detailsup from "../components/details/entry/Entry";
import Entry from "../components/entry/Entry";
import Layout from "../components/layout/Layout";
import Login from "../components/login/login";
import Msg from '../components/msg/Msg';
import Query from "../components/query/Query";
import SecretRoute from "./SecretRoute";
// courese info 
import CourseEntry from "../components/CourseList/courseEntry/CourseEntry";
import CourseList from "../components/CourseList/courseList/CourseList";

// instructor
import AddInstructor from "../components/instructorInfo/Addinstructor/AddInstructor";
import InstructorList from "../components/instructorInfo/List/InstructorList";


import {
    createBrowserRouter
} from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SecretRoute Element ={Layout} Ch={Analisys}/> ,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/config",
        element: <SecretRoute Element ={Layout} Ch={Config}/>,
    },
    {
        path: "/query",
        element: <SecretRoute Element ={Layout} Ch={Query}/>,
    },
    {
        path: "/entry",
        element: <SecretRoute Element ={Layout} Ch={Entry}/>,
    },
    {
        path: "/appointment",
        element: <SecretRoute Element ={Layout} Ch={Appointment}/>,
    },
    {
        path: "/entrydetailse/:id",
        element: <SecretRoute Element ={Layout} Ch={Details}/>,
    },
    {
        path: "/updatevisitorentry/:id",
        element: <SecretRoute Element ={Layout} Ch={Detailsup}/>,
    },
    {
        path: "/sendmassage",
        element: <SecretRoute Element ={Layout} Ch={Msg}/>,
    },
    // course info 
    {
        path: "/courseentry",
        element: <SecretRoute Element ={Layout} Ch={CourseEntry}/>,
    },
    {
        path: "/courselist",
        element: <SecretRoute Element ={Layout} Ch={CourseList}/>,
    },
    {
        path: "/updatecourse/:id",
        element: <SecretRoute Element ={Layout} Ch={CourseEntry}/>,
    },
    // instructor 
    {
        path: "/addinstructor",
        element: <SecretRoute Element ={Layout} Ch={AddInstructor}/>,
    },
    {
        path: "/instructorlist",
        element: <SecretRoute Element ={Layout} Ch={InstructorList}/>,
    },
    {
        path: "/updateinstructor/:id",
        element: <SecretRoute Element ={Layout} Ch={AddInstructor}/>,
    }
  ]);

  export default router;