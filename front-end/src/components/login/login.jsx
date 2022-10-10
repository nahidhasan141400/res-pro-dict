import axios from "axios";
import React from 'react';
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../../assets/img/Logo png.png';
import Loading from "../loading/Loading";
import style from "./login.module.scss";






const Login = () => {


    let navigate = useNavigate();
    let [username,setUsername] = React.useState('');
    let [password,setPassword] = React.useState('');
    let [load,setLoad] = React.useState(false);
    const fromsubmit = async(e)=>{
        e.preventDefault()
        setLoad(true)
        try {
            const res = await axios.post('/login',{username,password});
            if(res.status === 200){
                console.log(res);
                document.cookie = `me=${res.data.me}`;
                document.cookie = `go=${res.data.go}`;
                
                return navigate("/");

            }else{
                toast.error("some thing is wrong!")
                setLoad(false)
            }
        } catch (error) {
            console.log(error.response.status)
            if(error.response.status === 401){
                setLoad(false)
               return toast.error("Wrong information!")
            }
            setLoad(false)
            toast("something is wrong")
        }
    }
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <img src={logo} alt="" />
                <h1><span><IoMdLogIn/></span> Login</h1>
            </div>
            <div className={style.form}>
                <form action="#" onSubmit={fromsubmit} method="post">
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username'/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                    <button type="submit">{load?<Loading color={"#ff0000"}/>:"login"}</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login