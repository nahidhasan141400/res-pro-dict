import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../loading/Loading";
import style from "./entry.module.scss";
import Inp from './inputs/Inp';
import Opt, { Opt2, Opt3 } from './inputs/Opt';

import { useParams } from "react-router-dom";

const Entry = () => {
    
    let {id} = useParams();
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
    

    // state int end




    React.useEffect(()=>{

        const getdata = async ()=>{
            try {
                const resserver = await axios.get(`/getentryby/${id}`)
                if(resserver.status === 200){
                    let data = resserver.data;
                    setname(data.name);
                    setmobile(data.mobile);
                    setcompany(data.company);
                    sethtk(data.HTK);
                    setdecision(data.decision);
                    setcc(data.CC);
                    setcoment(data.comment);
                    setcourse1(data.courses[0]);
                    setcourse2(data.courses[1]);
                    setcourse3(data.courses[2]);
                    setnextd(data.nextCD);
                }else{
                    toast.error("some thing is wrong!!")
                  return  n(`/entrydetailse/${id}`);
                }
            } catch (error) {
                console.log(error)
                    toast.error("some thing is wrong!!")
                    n(`/entrydetailse/${id}`);
            }
        }
        getdata()

    },[id, n])

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
                const res = await axios.post('/updateVisitorEntry',{data,id});
                if(res.status === 200){
                    toast.success("add succesfuly")
                    setload(false)
                    return n(`/entrydetailse/${id}`)
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
                <h1><span>#</span>Update {name} Entry</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={sendData}>
                <div className={style.inpg1}>
                    <Inp name={"Name"} value={name} set={setname}/>
                    <Inp name={"Phone"} value={mobile} set={setmobile}/>
                    <Inp name={"Company"}  value={company} set={setcompany}/>
                </div>
                <div className={style.inpg1}>
                    <Opt3  v={htk} set={sethtk}/>
                    <Inp name={"Decision ? "}  value={decision} set={setdecision}/>
                    <Inp name={"councilor Decision "}  value={cc} set={setcc}/>
                </div>
                <div className={style.inpg1}>
                    <Opt v={course1} set={setcourse1}/>
                    <Opt v={course2} set={setcourse2} />
                    <Opt v={course3} set={setcourse3} />
                </div>
                <div className={style.inpg1}>
                    <Opt2 v={nextd} set={setnextd}/> 
                    <div className={style.gap}>
                    <label>Extra Comment:</label><br></br>
                        <input value={coment} onChange={(e)=>{setcoment(e.target.value)}}  type="text" />
                    </div>
                    <div className={style.gap}></div>
                </div>
                <div className={style.sub}>
                  {load?<div className={style.inpbtn}> <Loading color={"#ff0000"}/></div>:<input type="submit" value="update" />}  
                
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Entry