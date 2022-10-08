import React from "react";
import style from "./analisys.module.scss";
import Month from "./chart/Month";

const Analisys = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
          <div className={style.totalm}>
            <div className={style.h}>
              <h1><span></span>Total visitor in this year</h1>
            </div>
            <div className={style.chart}>
              <Month/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Analisys