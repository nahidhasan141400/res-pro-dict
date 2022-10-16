import axios from "axios";
import React, { useState } from 'react';
import { FaPowerOff } from "react-icons/fa";
import { toast } from "react-toastify";
import Loading from "../../loading/Loading";
import style from './add.module.scss';

const AddHtk = ({setmsgform,data}) => {
    const [value,setValue] = useState();
    const [load,setload] = useState(false);
    
    const submit = (e)=>{
        e.preventDefault()
        if(load){
            return 
        }
        setload(true)
        let send = async ()=>{
            try {
              const res = await axios.post(`/sendsmssingal`,{number:data[0],msg:value});
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
                <h1>send massager to {data[1]}</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={submit}  method="post">
                    <div className={style.inputs}>
                        <span>massager</span>
                        <textarea onChange={(e)=>{setValue(e.target.value)}}>{value}</textarea>
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