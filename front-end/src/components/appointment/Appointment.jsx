import axios from "axios";
import React from 'react';
import { toast } from "react-toastify";
import style from './appointment.module.scss';
import Form from "./form/Add";
import Table from "./table/Table";
// const da = new Date();

const Appointment = () => {
    const [tdata,settdata] = React.useState([]);
    const [form,setform] = React.useState(false);
    const [ids,setids] = React.useState();
    const [date,setDate] = React.useState("")

    const getMonth = async ()=>{
        try {
            let res =await axios.post("/getappointment",{date});
            let data = res.data;
            let status = res.status;
            if(status === 200){
                settdata(data)
            }
        } catch (error) {
            toast.error("some thing is wrong!!")
        }
    }

    React.useEffect(()=>{
       
        getMonth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    React.useEffect(()=>{
        getMonth()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[date])
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span> Today Appointment</h1>
                <span>
                    <label>choose Date:</label>
                    <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
                </span>
            </div>
            <div className={style.table}>
                <Table data={tdata} setids={setids} setform={setform}/>
            </div>
        </div>
        <div className={style.over}>
           {form? <Form id={ids} setform={setform} settdata={settdata}/>:""}
        </div>
    </div>

  )
}

export default Appointment