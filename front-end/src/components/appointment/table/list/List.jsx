import React from 'react';
import style from "./list.module.scss";


const List = ({data}) => {
  
  const d = new Date(data.updatedAt)
  return (
    <tr className={style.tr}>
    <td>{data.name} </td>
    <td>{data.mobile}</td>
    <td>{data.decision}</td>
    <td>{`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}</td>
    <td> 
        <button>details</button>
    </td>
    
</tr>
  )
}

export default List