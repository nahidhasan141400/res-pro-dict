import React, { memo } from "react";
import { CgDetailsMore } from "react-icons/cg";
import style from "./list.module.scss";

const HeadList = ({ data,sethead }) => {
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
          {data.map((e, i) => {
            return (
              <tr>
                <td
                  style={
                    !e.status
                      ? {
                          textDecoration: "line-through",
                          color: "red",
                        }
                      : {}
                  }
                >
                  {e.name}
                </td>
                <td>{e.balance} $</td>
                <td>
                  <div onClick={()=>{sethead(e)}}>

                     <CgDetailsMore />
                  </div>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default memo(HeadList);
