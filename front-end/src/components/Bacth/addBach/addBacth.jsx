import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../loading/Loading";
import style from "./bacth.module.scss";

const AddBacth = () => {

    const nav = useNavigate();

    const [load,setload ] =  useState(false)
    // form data state
    const [name,setname] = useState('');
    const [sat,setsat] = useState('');
    const [sun,setsun] = useState('');
    const [mon,setmon] = useState('');
    const [tue,settue] = useState('');
    const [wed,setwed] = useState('');
    const [thu,setthu] = useState('');
    const [fri,setfri] = useState('');
//  save data 
    const sendData = async ()=>{
        try {
            const resdb = await axios.post("/addbatch",{name,sat,sun,mon,tue,wed,thu,fri});
            if(resdb.status === 200){
                toast("Batch added ")
                nav("/batchlist")
            }
        } catch (error) {
            console.log(error);
            toast.error("some thing is wrong!")
            setload(false)
        }
    }
    const submit = (e)=>{
        e.preventDefault()
        setload(true)
        sendData()
    }

  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span> Add New Batch </h1>
            </div>
            <div className={style.form}>
                <form onSubmit={(e)=>submit(e)} >
                    
                    <div className={style.ro}>
                        <div className={style.inpg}>
                            <span>Batch Name :</span>
                            <input value={name}
                            onChange={(e)=>setname(e.target.value)} type="text" />
                        </div>
                    </div>
                    <div className={style.ro}>
                        <div className={style.inpg}>
                            <span>Saturday:</span>
                            <input value={sat}
                            onChange={(e)=>setsat(e.target.value)} type="time" />
                        </div>
                        <div className={style.inpg}>
                            <span>Sunday:</span>
                            <input value={sun}
                            onChange={(e)=>setsun(e.target.value)} type="time" />
                        </div>
                        <div className={style.inpg}>
                            <span>Monday:</span>
                            <input value={mon}
                            onChange={(e)=>setmon(e.target.value)} type="time" />
                        </div>
                        <div className={style.inpg}>
                            <span>Tuesday:</span>
                            <input value={tue}
                            onChange={(e)=>settue(e.target.value)} type="time" />
                        </div>
                    </div>
                    <div className={style.ro}>
                        <div className={style.inpg}>
                            <span>Wednesday:</span>
                            <input value={wed}
                            onChange={(e)=>setwed(e.target.value)} type="time" />
                        </div>
                        <div className={style.inpg}>
                            <span>Thursday:</span>
                            <input value={thu}
                            onChange={(e)=>setthu(e.target.value)} type="time" />
                        </div>
                        <div className={style.inpg}>
                            <span>Friday:</span>
                            <input value={fri}
                            onChange={(e)=>setfri(e.target.value)} type="time" />
                        </div>
                    </div>
                    <div className={style.btncon}>
                        <button>{load?<Loading color={"#ff0000"} />:"Add Batch"}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddBacth