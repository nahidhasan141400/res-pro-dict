import React from 'react';
import style from './list.module.scss';
import Table from "./table/Table";



const List = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span> student list </h1>
            </div>
            <div className={style.query}>
           
            </div>
            <div className={style.table}>
            <Table/>
            </div>
        </div>
    </div>
  )
}

export default List