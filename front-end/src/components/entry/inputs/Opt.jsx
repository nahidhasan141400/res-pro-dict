import React from 'react';
import style from "./opt.module.scss";

const Opt = ({v,set}) => {
  return (
    <div className={style.main}>
        <label> কি course সম্পর্কে জানতে চান ?</label><br />
        <select value={v} onChange={(e)=>{set(e.target.value)}}>
            <option value="">choase a course</option>
            <option value="webdev">web devlopment</option>
            <option value="opel">photoshop</option>
            <option value="audi">app development</option>
            <option value="audi">app development</option>
            <option value="audi">app development</option>
            <option value="audi">app development</option>
        </select>
    </div>
  )
}

 export const Opt2 = ({v,set}) => {
  return (
    <div className={style.main}>
        <label>পরবর্তীতে কবে আসবেন ? </label><br />
        <input value={v} onChange={(e)=>{set(e.target.value)}} type="date"  />
    </div>
  )
}

export const Opt3 = ({v,set}) => {
  return (
    <div className={style.main}>
        <label>আমাদের সম্পর্কে কি ভাবে জানলেন ? </label><br />
        <select value={v} onChange={(e)=>{set(e.target.value)}}>
            <option value="">chouse</option>
            <option value="social media">social media</option>
            <option value="1">baner</option>
            <option value="1">poster</option>
            <option value="1">freands</option>
        </select>
    </div>
  )
}

export default Opt