import React from 'react';
import style from "./list.module.scss";
 
const List = ({data}) => {
  return (
    <div className={style.list}>
        <table>
            <thead>
                <tr>

                <th>name</th>
                <th>balence</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>dewan ict</td>
                    <td>60000$</td>
                </tr>
                <tr style={{
                    background:"#ff000058"
                }}>
                    <td>dewan ict</td>
                    <td>60000$</td>
                </tr>
                <tr>
                    <td>dewan ict</td>
                    <td>60000$</td>
                </tr>
                <tr>
                    <td>dewan ict</td>
                    <td>60000$</td>
                </tr>
                <tr>
                    <td>dewan ict</td>
                    <td>60000$</td>
                </tr>
                <tr>
                    <td>dewan ict</td>
                    <td>60000$</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default List