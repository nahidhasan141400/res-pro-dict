import React from 'react';
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/Logo png.png";
import { useUser } from "../../router/SecretRoute";
import style from "./nav.module.scss";
const Nav = () => {
    const Navigate = useNavigate();
    const User = useUser()
    const logout = ()=>{
        document.cookie = 'me=""';
        document.cookie = 'go=""';
        return Navigate("/login")
    }
  return (
    <>
        <div className={style.main}>
            <div className={style.con}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={style.text}>
                    {/* <h1><span><FcBusinessman/></span> reception desk</h1> */}
                </div>
                <div className={style.profile}>
                    <div className={style.avatar}>
                        <img src={`/photoC/Admins/${User.photo}`} alt="" />
                    </div>
                </div>
                <div className={style.log}>
                    <button onClick={logout} className="text-green-400" ><span><MdOutlineLogout/></span> logout</button>
                </div>
            </div>
           
        </div>
    </>
  )
}

export default Nav