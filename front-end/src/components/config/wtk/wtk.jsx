import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaCompressArrowsAlt, FaExpandArrowsAlt } from "react-icons/fa";
import style from "./coarse.module.scss";
import List from './list/List';

const WTK = ({setForm,data,setData}) => {
    const [list,setList] = React.useState(false)
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <div className={style.text}>
                    <h1><span>#</span> How to know about us (HTK)</h1>
                </div>
                <div className={style.addbutton}>
                <button onClick={()=>setList((p)=>{return !p})}> {list?(<FaCompressArrowsAlt/>):<FaExpandArrowsAlt/>} List</button>
                    <button onClick={()=>{setForm(true)}}><span><IoMdAddCircleOutline/></span> add HTK</button>
                </div>
            </div>
            <div
                style={{
                    height:list?"auto":"0px",
                    opacity:list?"1":"0"
                }}
            className={style.table}>
            {
          
          data.map((n)=>{
         return ( <List key={n._id} data={n} setData={setData}/>)

        })}
            </div>
        </div>
       
    </div>
  )
}

export default WTK