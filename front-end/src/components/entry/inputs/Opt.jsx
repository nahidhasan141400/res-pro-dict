import React from 'react';
import style from "./opt.module.scss";

const Opt = () => {
  return (
    <div className={style.main}>
        <label> কি course সম্পর্কে জানতে চান ?</label><br />
        <select>
            <option value="">choase a course</option>
            <option value="webdev">web devlopment</option>
            <option value="opel">photoshop</option>
            <option value="audi">app development</option>
        </select>
    </div>
  )
}

export default Opt