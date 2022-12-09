import axios from 'axios';
import React from 'react';
import { FaRegCalendarPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./add.module.scss";

const Addsession = () => {
    const nav = useNavigate();
    const [name,setName] = React.useState("");
    const [Start,setStart] = React.useState("");
    const [End,setEnd] = React.useState("");

    const submit = React.useCallback( async ()=>{
        try {
            const resdb = await axios.post("/addsession",{
                name,Start,End
            });
            if(resdb.status === 200){
                toast.success("session "+ name +" added successfully");
                return nav("/sessionlist");
            }else{
                toast.warn("some thing is wrong");
            }
        } catch (error) {
            console.log(error);
            toast.error("some thing is wrong !")
        }
    },[End, Start, name, nav])





  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span><FaRegCalendarPlus/></span> add New Session</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={(e)=>{e.preventDefault();submit()}}>
                    <div className={style.inpname}>
                        <span className={style.ti}>Session Name:</span>
                        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" />
                    </div>
                    <div className={style.dater}>
                        <div className={style.ing}>
                            <span>Star date:</span>
                            <input value={Start} onChange={(e)=> setStart(e.target.value)} type="date" />
                        </div>
                        <div className={style.ing}>
                            <span>End date:</span>
                            <input value={End} onChange={(e)=> setEnd(e.target.value)} type="date" />
                        </div>
                    </div>
                    <div className={style.btn}>
                        <button type='submit'>Add Session</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Addsession