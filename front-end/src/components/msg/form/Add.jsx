import React from 'react';
import { FaPowerOff } from "react-icons/fa";
// import { toast } from "react-toastify";
import style from './add.module.scss';
const AddHtk = ({set,d,send}) => {
    
    const submit = (e)=>{
        e.preventDefault()
        send()
    }
  return (
    <div className={style.main}>
        <div className={style.border}>
        <div className={style.con}>
            <div className={style.head}>
                <h1>send massager to all</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={submit}  method="post">
                    <div className={style.inputs}>
                        <span>massager</span>
                        <textarea onChange={(e)=>{d[1](e.target.value)}}>{d[0]}</textarea>
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