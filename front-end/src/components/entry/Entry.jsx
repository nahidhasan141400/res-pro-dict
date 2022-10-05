import React, { useState } from 'react';
import { toast } from "react-toastify";
import style from "./entry.module.scss";
import Inp from './inputs/Inp';
import Opt, { Opt2, Opt3 } from './inputs/Opt';

const Entry = () => {
    // state int start 
    const [name, setname] = useState("");
    const [mobile,setmobile] = useState("");
    const [company,setcompany] = useState("");
    const [htk,sethtk] = useState("");
    const [decision,setdecision] = useState("");
    const [cc,setcc] = useState("");
    const [course1,setcourse1] = useState("");
    const [course2,setcourse2] = useState("");
    const [course3,setcourse3] = useState("");
    const [nextd,setnextd] = useState("");
    // state int end

    const sendData = (e)=>{
        e.preventDefault();
        if(name === "" || cc === "" || htk === ""){
            return toast.error("please fill the form")
        }
    }
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span>new Entry</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={sendData}>
                <div className={style.inpg1}>
                    <Inp name={"নাম"} value={name} set={setname}/>
                    <Inp name={"মোবাইল"} value={mobile} set={setmobile}/>
                    <Inp name={"প্রতিষ্ঠানের নাম"}  value={company} set={setcompany}/>
                </div>
                <div className={style.inpg1}>
                    <Opt3  value={htk} set={sethtk}/>
                    <Inp name={"আপনার মতামত কি ? "}  value={decision} set={setdecision}/>
                    <Inp name={"councilor এর মন্তব্য "}  value={cc} set={setcc}/>
                </div>
                <div className={style.inpg1}>
                    <Opt value={course1} set={setcourse1}/>
                    <Opt value={course2} set={setcourse2} />
                    <Opt value={course3} set={setcourse3} />
                </div>
                <div className={style.inpg1}>
                    <Opt2 v={nextd} set={setnextd}/> 
                    <div className={style.gap}></div>
                    <div className={style.gap}></div>
                </div>
                <div className={style.sub}>
                    
                <input type="submit" value="submit" />
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Entry