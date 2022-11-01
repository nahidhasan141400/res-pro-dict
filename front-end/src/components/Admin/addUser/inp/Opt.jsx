import React from 'react';
import style from './inp.module.scss';

const Opt = ({name,size,r,data,set}) => {
  return (
    <div style={{flex:size}} className={style.main}>
        <span>{name} <span style={{color:"#FF0000"}}>{r?"*":""}</span></span>
        <select onChange={(e)=>set(e.target.value)}>
            <option value="">{`chouse ${name}`}</option>
            {data.map((v,i)=>{
                return (
                    <option key={i} value={v._id}>{v.name}</option>
                )
            })}
        </select>
    </div>
  )
}

export default Opt