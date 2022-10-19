import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import style from "./coarse.module.scss";
import List from './list/List';

const SMS = ({setForm,data,setData}) => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <div className={style.text}>
                    <h1><span>#</span> SMS Template</h1>
                </div>
                <div className={style.addbutton}>
                    <button onClick={()=>{setForm(true)}}><span><IoMdAddCircleOutline/></span> Add New template</button>
                </div>
            </div>
            <div className={style.table}>
            {
          
          data.map((n)=>{
         return ( <List key={n._id} data={n} setData={setData}/>)

        })}
            </div>
        </div>
       
    </div>
  )
}

export default SMS