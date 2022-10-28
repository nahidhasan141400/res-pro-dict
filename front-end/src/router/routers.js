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
import CourseDe from "../components/CourseList/Details/CourseDe";
// instructor
import AddInstructor from "../components/instructorInfo/Addinstructor/AddInstructor";
import InstructorDe from "../components/instructorInfo/instructordetails/InstructorDe";
import InstructorList from "../components/instructorInfo/List/InstructorList";
// bacth
import addBacth from "../components/Bacth/addBach/addBacth";
import Batchdetails from "../components/Bacth/detailse/Batchdetails";
import BatchList from "../components/Bacth/list/BatchList";
// Student Admition 
import StudentAdmition from "../components/Student/Admition/StudentAdmition";

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
    {
        path: "/coursedetails/:id",
        element: <SecretRoute Element ={Layout} Ch={CourseDe}/>,
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
    },
    {
        path: "/instructordetails/:id",
        element: <SecretRoute Element ={Layout} Ch={InstructorDe}/>,
    },
    // bacth
    {
        path: "/addBacth",
        element: <SecretRoute Element ={Layout} Ch={addBacth}/>,
    },
    {
        path: "/batchlist",
        element: <SecretRoute Element ={Layout} Ch={BatchList}/>,
    }, 
    {
        path: "/batchupdate/:id",
        element: <SecretRoute Element ={Layout} Ch={addBacth}/>,
    }, 
    {
        path: "/batchdetails/:id",
        element: <SecretRoute Element ={Layout} Ch={Batchdetails}/>,
    }, 
    // student admition
    {
        path: "/studentadmition",
        element: <SecretRoute Element ={Layout} Ch={StudentAdmition}/>,
    }, 
  ]);

  export default router;