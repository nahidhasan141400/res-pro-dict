import React from 'react';
import { toast } from "react-toastify";
import style from './appointment.module.scss';
import Table from "./table/Table";

const Appointment = () => {
    const [tdata,settdata] = React.useState([]);
    React.useEffect(()=>{
        const getMonth = async ()=>{
            try {
                let res =await fetch("/getappointment");
                let data = await res.json()
                let status = res.status;
                if(status === 200){
                    settdata(data)
                }
            } catch (error) {
                toast.error("some thing is wrong!!")
            }
        }
        getMonth()
    },[])
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span> Today Appointment</h1>
            </div>
            <div className={style.table}>
                <Table data={tdata}/>
            </div>
        </div>
    </div>
  )
}

export default Appointment