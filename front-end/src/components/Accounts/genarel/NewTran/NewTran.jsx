import React from "react";
import { BiReceipt } from "react-icons/bi";
import style from "./style.module.scss";
const NewTran = () => {
  return (
    <div className={style.main}>
      <div className={style.con}>
        <div className={style.box}>
          {/* header section start  */}
          <div className={style.head}>
            <h1>
              <span>
                <BiReceipt />
              </span>
              Cash In
            </h1>
          </div>
          {/* header section end  */}
          <div className={style.contet}>
            {/* date picer row */}
            <div className={style.timerow }></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTran;
