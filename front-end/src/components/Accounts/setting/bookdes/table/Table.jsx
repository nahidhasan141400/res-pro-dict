import React from 'react';
import style from "./Style.module.scss";
const Table = () => {
  return (
    <div className={style.con}>
        <table>
            <thead>
                <tr>
                    <td>No</td>
                    <td>Invoice</td>
                    <td>ammount tk</td>
                    <td>categhory</td>
                    <td>date</td>
                    <td>admin</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>11232234</td>
                    <td>2000</td>
                    <td>student fee </td>
                    <td>20-3-03-2023</td>
                    <td>Aman Ullah</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>11232234</td>
                    <td>2000</td>
                    <td>student fee </td>
                    <td>20-3-03-2023</td>
                    <td>Aman Ullah</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>11232234</td>
                    <td>2000</td>
                    <td>student fee </td>
                    <td>20-3-03-2023</td>
                    <td>Aman Ullah</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>11232234</td>
                    <td>2000</td>
                    <td>student fee </td>
                    <td>20-3-03-2023</td>
                    <td>Aman Ullah</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table