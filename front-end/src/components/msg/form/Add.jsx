import React from 'react';
import { FaPowerOff } from "react-icons/fa";

import { FaSms } from "react-icons/fa";
import { VscWholeWord } from "react-icons/vsc";
// import { toast } from "react-toastify";
import axios from "axios";
import { toast } from "react-toastify";
import style from './add.module.scss';
const AddHtk = ({set,d,send,ch}) => {

    const [sms,setSms] = React.useState([])
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
        send()
    }
  return (
    <div className={style.main}>
        <div className={style.border}>
        <div className={style.con}>
            <div className={style.head}>
                <h1>send messages to all</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={submit}  method="post">
                    <h4>Sender Id:</h4>
                    <input type="radio" checked={ch[0]}  onChange={(e)=>{ch[1](e.target.checked)}}/> <span>use masking Dewan ict</span><br />
                    <input type="radio" checked={!ch[0]} onChange={(e)=>{ch[1](!e.target.checked)}}/> <span>use 8804445629106</span>

                    <div className={style.temp}>
                        <select onChange={(e)=>{d[1](e.target.value)}}>
                            <option value="">choose a template</option>
                            {sms.map((e,i)=>(<option key={i} value={e.text}>{e.name}</option>))}
                            
                        </select>
                    </div>
                    <div className={style.inputs}>
                        <span><h4>messages</h4></span>
                        <textarea defaultValue={d[0]} onChange={(e)=>{d[1](e.target.value)}}></textarea>
                        <div className={style.ifo}>
                            <span><VscWholeWord/>{d[0].length}</span>
                            <span><FaSms/>{parseInt((d[0].length / 70)+1)}</span>
                        </div>
                        <div className={style.note}>
                            <span>note:</span>(70 character = 1 sms). Only use Bangla for text. Maximum 600 character
                        </div>
                    </div>
                    
                    
                    <div className={style.btn}>
                        <button type='submit'>send</button>
                    </div>
                </form>
            </div>
            <div className={style.cls}>
                <button onClick={()=>{set(false)}}><FaPowerOff/></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddHtk