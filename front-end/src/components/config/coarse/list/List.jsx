import React from 'react';
import { BsCheckCircle } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import style from './list.module.scss';
let s = true;

const List = () => {
  return (
    <div className={style.main}>
        <div className={`${style.con} ${s? style.ac : style.de}`}>
            <div className={style.text}><h1>Advanced MS office application (AOS)</h1></div>
            <div className={style.action}>
                {s? <button className={style.active}><BsCheckCircle/></button>:<button className={style.deactive}><TiDeleteOutline/></button>}
                    <button className={style.dell}><RiDeleteBinLine/></button>
              

            </div>  
        </div>
    </div>
  )
}

export default List;