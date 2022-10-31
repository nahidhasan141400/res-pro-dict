import React from 'react';
import { useLoad } from "../../context/LodingAuth";
import Load from '../LoadingCotext/Load';
import Nav from "../nav/Nav";
import Sidebar from '../sidebar/Sidebar';
import style from "./layout.module.scss";
const Layout = ({El}) => {
  const {loading} = useLoad();
  
  return (
    <>
        <div className={style.main}>
                {loading?<Load/>:"" }
            <div className={style.top}>
                <Nav/>
            </div>
            <div className={style.sidebar}>
            <Sidebar/>
            </div>
            <div className={style.con}>
              <El/>
            </div>
        </div>
    </>
  )
}

export default Layout