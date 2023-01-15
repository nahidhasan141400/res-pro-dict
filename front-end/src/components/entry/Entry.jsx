import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";
import style from "./entry.module.scss";
import Inp from './inputs/Inp';
import Opt, { Opt2, Opt3 } from './inputs/Opt';

const Entry = () => {
    const n = useNavigate()
    // state int start 
    const [name, setname] = useState("");
    const [mobile,setmobile] = useState("");
    const [company,setcompany] = useState("");
    const [htk,sethtk] = useState("");
    const [decision,setdecision] = useState("");
    const [cc,setcc] = useState("");
    const [coment,setcoment] = useState("");
    const [course1,setcourse1] = useState("");
    const [course2,setcourse2] = useState("");
    const [course3,setcourse3] = useState("");
    const [nextd,setnextd] = useState("");
    const [load,setload] = useState("");


    // reset form 
    let resetForm = ()=>{
      setname("")
        setload("")
        setmobile("")
        setcompany("")
        sethtk("")
        setdecision("")
        setcc("")
        setcoment("")
        setcourse1("")
        setcourse2("")
        setcourse3("")
        setnextd("")
    }
    // state int end

    const sendData = (e)=>{
        setload(true)
        e.preventDefault();
        if(name === "" || cc === "" || htk === ""){
            setload(false)
            return toast.error("please fill the form")
            
        }
        const data = {
            name:name,
            mobile,
            company,
            HTK:htk,
            decision,
            cc,
            coment,
            nextd,
            course1,
            course2,
            course3
        }
        let send = async()=>{
            try {
                const res = await axios.post('/addentry',data);
                if(res.status === 200){
                    toast.success("add succesfuly");
                    setload(false);
                    return resetForm();
                }
            } catch (error) {
                console.log(error);
                setload(false)
                toast('error')
            }
        }
        send()
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
                    <Inp name={"Name "} value={name} set={setname}/>
                    <Inp name={"Phone "} value={mobile} set={setmobile}/>
                    <Inp name={"Company Name "}  value={company} set={setcompany}/>
                </div>
                <div className={style.inpg1}>
                    <Opt3  value={htk} set={sethtk}/>
                    <Inp name={"Decision "}  value={decision} set={setdecision}/>
                    <Inp name={"Councilor Comment "}  value={cc} set={setcc}/>
                </div>
                <div className={style.inpg1}>
                    <Opt value={course1} set={setcourse1}/>
                    <Opt value={course2} set={setcourse2} />
                    <Opt value={course3} set={setcourse3} />
                </div>
                <div className={style.inpg1}>
                    <Opt2 v={nextd} set={setnextd}/> 
                    <div className={style.gap}>
                    <label>Extra Comment</label><br></br>
                        <input value={coment} onChange={(e)=>{setcoment(e.target.value)}}  type="text" />
                    </div>
                    <div className={style.gap}></div>
                </div>
                <div className={style.sub}>
                  {load?<div className={style.inpbtn}> <Loading color={"#ff0000"}/></div>:<input type="submit" value="submit" />}  
                
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Entry