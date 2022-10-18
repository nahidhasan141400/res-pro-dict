import React from 'react';
import { FaPowerOff } from "react-icons/fa";
// import { toast } from "react-toastify";
import style from './add.module.scss';
const AddHtk = ({set,d,send,ch}) => {
    
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
                    <div className={style.inputs}>
                        <span><h4>messages</h4></span>
                        <textarea defaultValue={d[0]} onChange={(e)=>{d[1](e.target.value)}}></textarea>
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