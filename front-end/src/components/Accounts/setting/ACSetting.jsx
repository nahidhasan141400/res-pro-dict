import React from 'react';
import { BiBookAdd, BiBookAlt } from "react-icons/bi";
import List from './bookList/List';
import style from "./setting.module.scss";

const ACSetting = () => {


  return (
    <div className={style.main}>
       <div className={style.con}>
        <div className={style.top}>
            <div className={style.left}>
                <div className={style.bookHead}>
                    <div className={style.cardwitnlogo}>
                        <span><BiBookAlt/></span>
                        <p>Account books</p>
                    </div>
                    <div className={style.cardwitnlogo}>
                        <span><BiBookAdd/></span>
                        <p>Add New books</p>
                    </div>
                </div>
                <div className={style.listBook}>
                    <List/>
                </div>
            </div>
            <div className={style.right}>hasan</div>
        </div>
       </div>
    </div>
  )
}

export default ACSetting