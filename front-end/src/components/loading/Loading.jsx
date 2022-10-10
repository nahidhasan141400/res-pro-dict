import React from 'react';
import style from './loading.module.scss';

const Loading = ({color}) => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div style={{border:`2px solid ${color}`}} className={style.lode}>
                
            </div>
        </div>
    </div>
  )
}

export default Loading