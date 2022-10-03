import React from 'react';
import style from "./list.module.scss";

const List = () => {
  return (
    <tr className={style.tr}>
    <td>নাহিদ হ্যাসান </td>
    <td>০১৭৪১০১৩৩৬৩</td>
    <td>দেওান ict  </td>
    <td>চিন্তা করে পরে জানাবেন abar asben</td>
    <td className={style.c}>না</td>
    <td>০১-০৮-২০২২</td>
    <td> 
        <button>details</button>
    </td>
    
</tr>
  )
}

export default List