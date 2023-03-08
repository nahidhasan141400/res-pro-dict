import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { BiReceipt } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import style from "./style.module.scss";

import "react-datepicker/dist/react-datepicker.css";

const NewTran = () => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="nhBtn" onClick={onClick} ref={ref}>
      <span>
        <MdDateRange />
      </span>
      {value}
    </button>
  ));

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
              Cash In {startDate.toISOString()}
            </h1>
          </div>
          {/* header section end  */}
          <div className={style.contet}>
            {/* date picer row */}
            <div className={style.timerow}>
              <div className={style.datepikerc}>
                <div className={style.lava}>Date:</div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<ExampleCustomInput />}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"  
                  showTimeInput
                />
              </div>
            </div>
            {/* //time row end  */}
            <div className={style.ammount}>
              <div className={style.inpg}>
                <label htmlFor="ammo">Amount</label>
                <input type="number" placeholder="000000"/>
              </div>
              <div className={style.inpg}>
                <label htmlFor="ammo">Remarks</label>
                <input type="text" placeholder="bill Details"/>
              </div>
            </div>
            <div className={style.ammount}>
              <div className={style.inpg}>
                <label htmlFor="ammo">Category</label>
                <input type="number" placeholder="000000"/>
              </div>
              <div className={style.inpg}>
                <label htmlFor="ammo">Remarks</label>
                <input type="text" placeholder="bill Details"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTran;
