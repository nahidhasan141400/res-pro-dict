import React from 'react';
import style from './inp.module.scss';

const Inp = ({name,size,r}) => {
  return (
    <div style={{flex:size}} className={style.main}>
        <span>{name} <span style={{color:"#FF0000"}}>{r?"*":""}</span></span>
        <input type="text" />
    </div>
  )
}

export default Inp