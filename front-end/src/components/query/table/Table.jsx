import React from 'react';
import List from './list/List';
import style from "./table.module.scss";


const Table = ({data}) => {
  return (
    <div className={style.main}>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Decision</th>
                    <th style={{textAlign:'center'}}>Admitted</th>
                    <th>Date</th>
                    <th></th>
                    
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