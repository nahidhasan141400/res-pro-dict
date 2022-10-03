import React from 'react';
import List from './list/List';
import style from "./table.module.scss";


const Table = () => {
  return (
    <div className={style.main}>
        <table>
            <thead>
                <tr>
                    <th>নাম</th>
                    <th>মোবাইল</th>
                    <th>প্রতিষ্ঠানের নাম </th>
                    <th>কি সিধান্ত নিলেন</th>
                    <th style={{textAlign:'center'}}>ভর্তি হয়েছেন</th>
                    <th>তারিখ</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
           { [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99,10].map((n)=>{
         return (
           <List key={n}/>
         )

        })}
            </tbody>
        </table>
    </div>
  )
}

export default Table