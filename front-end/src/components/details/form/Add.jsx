import React, { useState } from 'react';
import { FaPowerOff } from "react-icons/fa";
import { toast } from "react-toastify";
import style from './add.module.scss';
const AddHtk = ({setmsgform,data}) => {
    const [value,setValue] = useState();
    const [load,setload] = useState(false);
    
    const submit = (e)=>{
        e.preventDefault()
        setload(true)
        let send = async ()=>{
            try {
              const res = await fetch(`/dewan/smsapi?api_key=(APIKEY)&type=text&contacts=${data[0]}&senderid=(Approved Sender ID)&msg=${value}​`);
              console.log(res)
              setload(false)
            } catch (error) {
                toast.error("something is wrong 😥")
                console.log(error);
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
                        <button type='submit'>send</button>
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