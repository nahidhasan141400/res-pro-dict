import React from "react";
import { GiArchiveRegister } from "react-icons/gi";
import { TbCurrencyTaka } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import style from "./genarel.module.scss";
import Table from "./table/Table";

const Genarel = () => {
  return (
    <div className={style.main}>
      <div className={style.con}>
        <div className={style.head}>
          <div className={style.boxBl}>
            <div className={style.titel}>
              <span>opening balance</span>
            </div>
            <p>
              100
              <span>
                <TbCurrencyTaka />
              </span>
            </p>
          </div>
          <div className={style.boxBl}>
            <div className={style.titel}>
              <span>today income</span>
            </div>
            <p>
              1000
              <span>
                <TbCurrencyTaka />
              </span>
            </p>
          </div>
          <div className={style.boxBl}>
            <div className={style.titel}>
              <span>today expense</span>
            </div>
            <p>
              1000
              <span>
                <TbCurrencyTaka />
              </span>
            </p>
          </div>
        </div>
        <div className={style.head}>
          <div className={style.boxBl}>
            <div className={style.titel}>
              <span>balance</span>
            </div>
            <p>
              100
              <span>
                <TbCurrencyTaka />
              </span>
            </p>
          </div>
          <div className={style.boxBl}>
            <div className={style.titel}>
              <span>total income</span>
            </div>
            <p>
              1000
              <span>
                <TbCurrencyTaka />
              </span>
            </p>
          </div>
          <div className={style.boxBl}>
            <div className={style.titel}>
              <span>total expense</span>
            </div>
            <p>
              1000
              <span>
                <TbCurrencyTaka />
              </span>
            </p>
          </div>
        </div>
        <div className={style.option}>
          <div className={style.con}>
            <div className={style.box}>
              <NavLink className={style.llink} to="newtransiction">
                <button className="nhBtn">
                  <span>
                    <GiArchiveRegister />
                  </span>{" "}
                  New transaction
                </button>
              </NavLink>
            </div>
            <div className={style.box}>
              <button className="nhBtn">
                <span>
                  <GiArchiveRegister />
                </span>{" "}
                New transaction
              </button>
            </div>
          </div>
        </div>
        <div className={style.table}>
          <Table data={[]} />
        </div>
      </div>
    </div>
  );
};

export default Genarel;
