import React from 'react';
import style from "./list.module.scss";
 
const VoiceList = ({data}) => {
  return (
    <div className={style.list}>
        <table>
            <thead>
                <tr>

                <th>Number</th>
                <th>type</th>
                <th>amaunt</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11245122</td>
                    <td>Income</td>
                    <td>60000$</td>
                </tr>
                <tr style={{
                    background:"#ff000058"
                }}>
                    <td>11245122</td>
                    <td>Income</td>
                    <td>60000$</td>
                </tr>
                <tr>
                    <td>11245122</td>
                    <td>Income</td>
                    <td>60000$</td>
                </tr>
                <tr>
                    <td>11245122</td>
                    <td>Income</td>
                    <td>60000$</td>
                </tr>
                <tr>
                    <td>11245122</td>
                    <td>Income</td>
                    <td>60000$</td>
                </tr>
                <tr>
                    <td>11245122</td>
                    <td>Income</td>
                    <td>60000$</td>
                </tr>
                <tr>
                    <td>11245122</td>
                    <td>Income</td>
                    <td>60000$</td>
                </tr>

                
            </tbody>
        </table>
    </div>
  )
}

export default VoiceList