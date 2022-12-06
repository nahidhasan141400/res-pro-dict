import React from 'react';
import style from './inp.module.scss';

const Inp = ({name,size,r,type="text",change,v}) => {
  return (
    <div style={{flex:size}} className={style.main}>
       {/* value={v} onChange={(e)=>{change(e)}} type={type} */}
        <span> <span style={{color:"#FF0000"}}>{r?"*":""}</span></span>
        <input name={name} />
    </div>
  )
}

export default Inp