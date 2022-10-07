import React from 'react';
import List from './list/List';
import style from "./table.module.scss";


const Table = ({data}) => {
  return (
    <div className={style.main}>
        <table>
            <thead>
                <tr>
                    <th>নাম</th>
                    <th>মোবাইল</th>
                    <th>কি সিধান্ত নিয়েছিলেন </th>
                    <th>তারিখ</th>
                    <th>details</th>
                    
                </tr>
            </thead>
            <tbody>
           { data.map((n)=>{
         return (
           <List key={n._id} data={n}/>
         )

        })}
            </tbody>
        </table>
    </div>
  )
}

export default Table