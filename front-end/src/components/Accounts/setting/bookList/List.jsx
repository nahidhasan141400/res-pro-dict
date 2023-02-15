import React, { memo } from "react";
import { CgDetailsMore } from "react-icons/cg";
import style from "./list.module.scss";

const List = ({ data,acid,setAcid }) => {
  return (
    <div className={style.list}>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>balence</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((e,i) => {
            return (
              <tr onClick={()=>{setAcid(e._id)}} key={i}  style={acid === e._id?{
                background: "#ff000058",
              }:{}}>
                <td  style={!e.status?{
                textDecoration: "line-through",
                color:"red"
              }:{}}>{e.name}</td>
                <td>{e.balance} $</td>
                <td>
                  <a href="#">
                    <CgDetailsMore />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default memo(List);
