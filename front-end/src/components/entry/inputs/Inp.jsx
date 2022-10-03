import React from 'react';
import style from './inp.module.scss';

const Inp = ({name}) => {
  return (
    <div className={style.main}>
        <label>{name}:</label><br></br>
        <input type="text" />
    </div>
  )
}

export default Inp