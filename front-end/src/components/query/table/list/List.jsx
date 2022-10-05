import moment from "moment";
import React from 'react';
import style from "./list.module.scss";


const List = ({data}) => {
  return (
    <tr className={style.tr}>
    <td>{data.name} </td>
    <td>{data.mobile}</td>
    <td>{data.company}</td>
    <td>{data.decision}</td>
    <td className={style.c}>{data.admited? "হা":'না'}</td>
    <td>{moment(new Date(data.updatedAt)).format('MMMM d, YYYY')}</td>
    <td> 
        <button>details</button>
    </td>
    
</tr>
  )
}

export default List