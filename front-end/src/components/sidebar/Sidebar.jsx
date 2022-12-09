import React from 'react';
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiListUl } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { CgUserList } from "react-icons/cg";
import { FaRegCalendarAlt, FaRegCalendarPlus, FaRegListAlt, FaUserGraduate, FaUserPlus, FaUsers, FaUserShield, FaUserTie } from "react-icons/fa";
import { GiArchiveResearch, GiDesk } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp, IoMdAddCircle, IoMdAnalytics, IoMdCreate } from "react-icons/io";
import { MdMoreTime, MdOutlineAdminPanelSettings } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { VscSettings } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import style from "./sidebar.module.scss";

const Sidebar = () => {
    const [frontdes,setfrontdes] = React.useState(false);
    const [courseinfo,setcourseinfo] = React.useState(false);
    const [Instructor,setInstructor] = React.useState(false);
    const [Admitio,setAdmitio] = React.useState(false);
    const [Bacth,setBacth] = React.useState(false);
    const [Admin,setAdmin] = React.useState(false);

    //reset btn
    const reset =(fn,v)=>{
        setfrontdes(false);
        setcourseinfo(false);
        setInstructor(false);
        setAdmitio(false);
        setBacth(false);
        setAdmin(false);
        fn(v);
    }
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
                            <div onClick={()=>reset(setfrontdes,!frontdes)} className={style.link}>
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
                            <div onClick={()=>reset(setcourseinfo,!courseinfo)} className={style.link}>
                                <span><span className={style.icon}><FaRegListAlt/></span> <p>Course Info <span>{courseinfo?<IoIosArrowUp/>:<IoIosArrowDown/>}</span></p></span>
                            </div>
                            <div style={courseinfo?{height:"auto"}:{}} className={style.listof}>
                                <ol className={style.childlist}>
                                    <li>
                                        <NavLink className={style.linkc} to="/courseentry">
                                            <span><span className={style.iconc}><MdMoreTime/></span> <p>course entry</p></span>
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
                            <div onClick={()=>reset(setBacth,!Bacth)} className={style.link}>
                                <span><span className={style.icon}><SiGoogleclassroom/></span> <p>Class info <span>{Bacth?<IoIosArrowUp/>:<IoIosArrowDown/>}</span></p></span>
                            </div>
                            <div style={Bacth?{height:"auto"}:{}} className={style.listof}>
                                <ol className={style.childlist}>
                                    <li>
                                        <NavLink className={style.linkc} to="/addBacth">
                                            <span><span className={style.iconc}><MdMoreTime/></span> <p>Add Bacth</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/Batchlist">
                                            <span><span className={style.iconc}><AiOutlineFieldTime/></span> <p>Bacth list</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/Addsession">
                                            <span><span className={style.iconc}><FaRegCalendarPlus/></span> <p>Add Session</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/sessionlist">
                                            <span><span className={style.iconc}><FaRegCalendarAlt/></span> <p>Session List</p></span>
                                        </NavLink>
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div onClick={()=>reset(setInstructor,!Instructor)} className={style.link}>
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
                                        <NavLink className={style.linkc} to="/instructorlist">
                                            <span><span className={style.iconc}><CgUserList/></span> <p>Instructor list</p></span>
                                        </NavLink>
                                    </li>
                                    
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div onClick={()=>reset(setAdmitio,!Admitio)} className={style.link}>
                                <span><span className={style.icon}><FaUserGraduate/></span> <p>Student <span>{Admitio?<IoIosArrowUp/>:<IoIosArrowDown/>}</span></p></span>
                            </div>
                            <div style={Admitio?{height:"auto"}:{}} className={style.listof}>
                                <ol className={style.childlist}>
                                    <li>
                                        <NavLink className={style.linkc} to="/studentadmitionquick">
                                            <span><span className={style.iconc}><FaUserPlus/></span> <p>Quick Admission</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/studentadmition">
                                            <span><span className={style.iconc}><FaUserPlus/></span> <p>Admission Form</p></span>
                                        </NavLink>
                                    </li>
                                    
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div onClick={()=>reset(setAdmin,!Admin)} className={style.link}>
                                <span><span className={style.icon}><MdOutlineAdminPanelSettings/></span> <p>Admin<span>{Admin?<IoIosArrowUp/>:<IoIosArrowDown/>}</span></p></span>
                            </div>
                            <div style={Admin?{height:"auto"}:{}} className={style.listof}>
                                <ol className={style.childlist}>
                                    <li>
                                        <NavLink className={style.linkc} to="/addadminuser">
                                            <span><span className={style.iconc}><IoMdAddCircle/></span> <p>Add New Admin</p></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={style.linkc} to="/adminlist">
                                            <span><span className={style.iconc}><FaUserShield/></span> <p>Admin List</p></span>
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