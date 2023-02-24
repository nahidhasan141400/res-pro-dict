import axios from 'axios';
import React from 'react';
import { FaPowerOff } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { toast } from 'react-toastify';
import style from "./style.module.scss";

const HeadDes = ({headdata,sethead,setReload}) => {

    const [head,setHead] = React.useState(headdata)

    const updatestatus = async (id,ac)=>{
        try {
            const resdb = await axios.post("/updateAcchead",{
                id,status:ac
            });
            toast.success("status change ")
            setHead(resdb.data)
            setReload((e)=> e+1)
        } catch (error) {
            toast.error("something is wrong!")
        }
    }

  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h2>Account Head</h2>
            </div>
            <div className={style.body}>
                <table>
                    <tr>
                        <td>name</td>
                        <td>: {head.name}</td>
                    </tr>
                    <tr>
                        <td>balance</td>
                        <td>: {head.balance}$</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>: {head.status? "Active":"Deactive"}</td>
                    </tr>
                </table>
            </div>
            <div className={style.footer}>
                <div className={style.sec}>
                    <button className='nhBtn' onClick={()=>{updatestatus(head._id,head.status)}}><span><ImLoop/></span> change status</button>
                </div>
                <div className={style.sec}>
                    <button className='nhBtn' onClick={()=>{sethead(false)}}><span><FaPowerOff/></span> close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeadDes