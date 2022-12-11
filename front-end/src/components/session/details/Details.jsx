import axios from "axios";
import React from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./de.module.scss";


const Details = () => {
    const nav = useNavigate();
    let { id } = useParams();

    const [data,setData ] =  React.useState({});

    //grt data by id 
    const getDt = async ()=>{
        try {
            const resdb = await axios(`/getsession/${id}`);
            if(resdb.status === 200){
                setData(resdb.data);
            }else{
                console.log(resdb)
                toast.error("some Thing is wrong!")
                nav('/sessionlist')
            }
        } catch (error) {
            console.log(error)
            toast.error("some Thing is wrong!")
            nav('/sessionlist')
        }
    }

// effect 
    React.useEffect(()=>{
        getDt()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className={style.main}>
        <div className={style.con}>
        <div className={style.head}>
                <h1><span> <MdOutlineDateRange/> </span>Session</h1>
            </div>
            <div className={style.ban}>
                <img src="https://source.unsplash.com/random/1600x400/?education" alt="" />
                <div className={style.name}>
                    {data.name}
                </div>
            </div>
            <div className={style.details}>
                <div style={{backgroundImage:"url('https://source.unsplash.com/random/400x400/?dark')"}} className={style.box}>
                    <span>#</span> <span>from</span>
                    <div className={style.t}>{data.start}</div>
                </div>
                <div style={{backgroundImage:"url('https://source.unsplash.com/random/400x400/?shadow')"}} className={style.box}>
                    <span>#</span> <span>To</span>
                    <div className={style.t}>{data.end}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details