import React from 'react';
import style from "./entry.module.scss";
import Inp from './inputs/Inp';
import Opt from './inputs/Opt';

const entry = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span>new entry</h1>
            </div>
            <div className={style.form}>
                <div className={style.inpg1}>
                    <Inp name={"নাম"}/>
                    <Inp name={"মোবাইল"}/>
                    <Inp name={"প্রতিষ্ঠানের নাম"}/>
                </div>
                <div className={style.inpg1}>
                    <Inp name={"আমাদের সম্পর্কে কি ভাবে জানলেন ? "}/>
                    <Inp name={"আপনার মতামত কি ? "}/>
                    <Inp name={"councilor এর মন্তব্য "}/>
                </div>
                <div className={style.inpg1}>
                    <Opt/>
                    <Opt/>
                    <Opt/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default entry