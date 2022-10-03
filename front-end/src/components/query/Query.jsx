import React from 'react';
import { AiOutlineFileAdd } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { RiUserSearchFill } from "react-icons/ri";
import style from "./query.module.scss";
import Table from './table/Table';

const Query = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <div className={style.text}>
                    <h1><span><RiUserSearchFill/></span>query</h1>
                </div>
                <div className={style.search}>
                    <div className={style.inpg}>
                        <input type="text" placeholder='search name' />
                        <button><span><ImSearch/></span></button>
                    </div>
                </div>
                <div className={style.act}>
                    <button><span><AiOutlineFileAdd/></span>entry new</button>
                </div>
            </div>
            <div className={style.table}>
                <Table/>
            </div>
        </div>
    </div>
  )
}

export default Query