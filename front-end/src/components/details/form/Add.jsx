import axios from "axios";
import React, { useState } from 'react';
import { FaPowerOff, FaSms } from "react-icons/fa";
import { VscWholeWord } from "react-icons/vsc";
import { toast } from "react-toastify";
import Loading from "../../loading/Loading";
import style from './add.module.scss';

const AddHtk = ({setmsgform,data}) => {
    const [value,setValue] = useState("");
    const [load,setload] = useState(false);
    
    const [sms,setSms] = React.useState([])
    const [smsid,setsmsid] = React.useState(false)
    
    React.useEffect(()=>{
        const getdata = async ()=>{
            try {
                const resdb = await axios.get("/getActivesms");
                if(resdb.status === 200){
                    setSms(resdb.data)
                }
            } catch (error) {
                console.log(error);
                toast.error("something is wrong!")
            }
        }
        getdata()
        
    },[])


    const submit = (e)=>{
        e.preventDefault()
        if(load){
            return 
        }
        setload(true)
        let send = async ()=>{
            try {
              const res = await axios.post(`/sendsmssingal`,{number:data[0],msg:value,id:smsid});
                if(res.status === 200){
                    setload(false)
                    toast.success("massage send to "+data[1]);
                    setmsgform(false)
                }
            } catch (error) {
                toast.error("something is wrong 😥")
                console.log(error);
                setload(false)
            }
        } 
        send()
    }
  return (
    <div className={style.main}>
        <div className={style.border}>
        <div className={style.con}>
            <div className={style.head}>
                <h1>send messages to {data[1]}</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={submit}  method="post">
                <h4>Sender Id:</h4>
                    <input type="radio" checked={smsid}  onChange={(e)=>{setsmsid(e.target.checked)}} /> <span>use masking Dewan ict</span><br />
                    <input type="radio" checked={!smsid}  onChange={(e)=>{setsmsid(!e.target.checked)}} /> <span>use 8804445629106</span>
                    <div className={style.temp}>
                        <select onChange={(e)=>setValue(e.target.value)}>
                            <option value="">choose a template</option>
                            {sms.map((e,i)=>(<option key={i} value={e.text}>{e.name}</option>))}
                            
                        </select>
                    </div>
                    <div className={style.inputs}>
                        <span><h4>messages</h4></span>
                        <textarea value={value} onChange={(e)=>{setValue(e.target.value)}}>{value}</textarea>
                        <div className={style.ifo}>
                            <span><VscWholeWord/>{value.length}</span>
                            <span><FaSms/>{parseInt((value.length / 70)+1)}</span>
                        </div>
                        <div className={style.note}>
                            <span>note:</span>(70 character = 1 sms). Only use Bangla for text. Maximum 600 character
                        </div>
                    </div>
                    
                    <div className={style.btn}>
                        <button type='submit'>{load?<Loading color={"#ffF"}/>:"send"}</button>
                    </div>
                </form>
            </div>
            <div className={style.cls}>
                <button onClick={()=>{setmsgform(false)}}><FaPowerOff/></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddHtk