
import React, { useRef } from 'react';
import { BiReceipt } from "react-icons/bi";
import ReactToPrint from 'react-to-print';
import Print from './forprint/print';
import style from "./style.module.scss";
const NewTran = () => {
  const componentRef = useRef();
  

  return (
    <div className={style.main}>
      <div className={style.con}>
        <div  className={style.box}>
          {/* header section start  */}
            <div className={style.head}>
                <h1><span><BiReceipt/></span> New Transaction</h1>
            </div>
          {/* header section end  */}
          <ReactToPrint
        trigger={() => <button>Print this out!!  </button>}
        content={() => componentRef.current}
      />
          <h1 style={{
            width:"100px",
            height:"100px",
            background:"red",
            filter:"blur(10px)"
          }}>
            nahid
          </h1>
        </div>
        <div ref={componentRef}>
            <Print/>
        </div>
      </div>
    </div>
  )
}

export default NewTran