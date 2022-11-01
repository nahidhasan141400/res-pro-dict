import React from 'react';
import style from './inp.module.scss';

const Inp = ({name,size,r,type="text",change,v}) => {
  return (
    <div style={{flex:size}} className={style.main}>
        <span>{name} <span style={{color:"#FF0000"}}>{r?"*":""}</span></span>
        <input value={v} onChange={(e)=>{change(e)}} type={type} />
    </div>
  )
}

export default Inp