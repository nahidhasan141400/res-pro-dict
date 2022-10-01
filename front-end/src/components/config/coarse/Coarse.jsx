import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import style from "./coarse.module.scss";
import List from './list/List';

const Coarse = ({setForm}) => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <div className={style.text}>
                    <h1><span>#</span> Course</h1>
                </div>
                <div className={style.addbutton}>
                    <button onClick={()=>{setForm(true)}}><span><IoMdAddCircleOutline/></span> add course</button>
                </div>
            </div>
            <div className={style.table}>
            {
          
        [1,2,3,4,5,6,7,8,9,10,11,12,13,141,15,16].map((n)=>{
         return ( <List key={n}/>)

        })}
            </div>
        </div>
       
    </div>
  )
}

export default Coarse