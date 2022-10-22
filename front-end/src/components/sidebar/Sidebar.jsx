import React from 'react';
import { BiListPlus, BiListUl } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { CgUserList } from "react-icons/cg";
import { FaRegListAlt, FaUserPlus, FaUsers, FaUserTie } from "react-icons/fa";
import { GiArchiveResearch, GiDesk } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp, IoMdAnalytics, IoMdCreate } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import style from "./sidebar.module.scss";

const Sidebar = () => {
    const [frontdes,setfrontdes] = React.useState(false)
    const [courseinfo,setcourseinfo] = React.useState(false)
    const [Instructor,setInstructor] = React.useState(false)
  return (
    <>
        <div className={style.main}>
            <div className={style.con}>
                {/* <div className={style.head}>
                    <h1>DICT</h1>
                </div> */}
                <div className={style.list}>
                    <ol>
                        
                        <li>
                            <div onClick={()=>setfrontdes(!frontdes)} className={style.link}>
                                <span><span className={style.icon}><GiDesk/></span> <p>front-desk <span>{frontdes?<IoIosArrowUp/>:<IoIosArrowDown/>}</span></p></span>
                            </div>
                            <div style={frontdes?{height:"auto"}:{}} className={style.listof}>
                                <ol className={style.childlist}>
                                    <li>
                                        <NavLink className={style.linkc} to="/">
                                            <span><span className={style.iconc}><IoMdAnalytics/></span> <p>Analytics</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/entry">
                                            <span><span className={style.iconc}><IoMdCreate/></span> <p>entry</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/query">
                                            <span><span className={style.iconc}><GiArchiveResearch/></span> <p>query</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/appointment">
                                            <span><span className={style.iconc}><FaUsers/></span> <p>appointment</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/sendmassage">
                                            <span><span className={style.iconc}><BsFillChatDotsFill/></span> <p>send SMS</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/config">
                                            <span><span className={style.iconc}><VscSettings/></span> <p>config</p></span>
                                        </NavLink>
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div onClick={()=>setcourseinfo(!courseinfo)} className={style.link}>
                                <span><span className={style.icon}><FaRegListAlt/></span> <p>Course Info <span>{courseinfo?<IoIosArrowUp/>:<IoIosArrowDown/>}</span></p></span>
                            </div>
                            <div style={courseinfo?{height:"auto"}:{}} className={style.listof}>
                                <ol className={style.childlist}>
                                    <li>
                                        <NavLink className={style.linkc} to="/courseentry">
                                            <span><span className={style.iconc}><BiListPlus/></span> <p>course entry</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/courselist">
                                            <span><span className={style.iconc}><BiListUl/></span> <p>course list</p></span>
                                        </NavLink>
                                    </li>
                                    
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div onClick={()=>setInstructor(!Instructor)} className={style.link}>
                                <span><span className={style.icon}><FaUserTie/></span> <p>Instructor <span>{Instructor?<IoIosArrowUp/>:<IoIosArrowDown/>}</span></p></span>
                            </div>
                            <div style={Instructor?{height:"auto"}:{}} className={style.listof}>
                                <ol className={style.childlist}>
                                    <li>
                                        <NavLink className={style.linkc} to="/addinstructor">
                                            <span><span className={style.iconc}><FaUserPlus/></span> <p>Add Instuctor</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/courselist">
                                            <span><span className={style.iconc}><CgUserList/></span> <p>Instructor list</p></span>
                                        </NavLink>
                                    </li>
                                    
                                </ol>
                            </div>
                        </li>
                        
                    </ol>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar