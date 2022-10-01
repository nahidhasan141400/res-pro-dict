import Config from "../components/config/Config";
import Layout from "../components/layout/Layout";
import Login from "../components/login/login";
import SecretRoute from "./SecretRoute";

import {
  createBrowserRouter
} from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SecretRoute Element ={Layout} Ch={Config}/> ,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/config",
        element: <SecretRoute Element ={Layout} Ch={Config}/>,
    }
  ]);

  export default router;