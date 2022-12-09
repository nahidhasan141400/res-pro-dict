import axios from 'axios';
import React from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { useNavigate, useParams } from "react-router-dom";

//lib function input 
import { toast } from 'react-toastify';
import Convert from "../../../lib/Convert12to24";
import style from './des.module.scss';


const Batchdetails = () => {
    const nav = useNavigate();
    let { id } = useParams();

    const [data,setData ] =  React.useState({});

    //grt data by id 
    const getDt = async ()=>{
        try {
            const resdb = await axios(`/getbatchby/${id}`);
            if(resdb.status === 200){
                setData(resdb.data);
            }else{
                console.log(resdb)
                toast.error("some Thing is wrong!")
                nav('/Batchlist')
            }
        } catch (error) {
            console.log(error)
            toast.error("some Thing is wrong!")
            nav('/Batchlist')
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
                <h1><span>#</span>Batch details</h1> 
            </div>
            <div className={style.info}>
                <div className={style.name}>
                    <h1><span>Batch Name:</span> {data.name}</h1>
                </div>
                <div className={style.time}>
                    <div className={style.h}>
                        <h1><span><AiOutlineFieldTime/></span>Class Time</h1>
                    </div>
                    <div className={style.cardG}>
                        {/* card */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Saturday
                            </div>
                            <div className={style.t}>
                                <span><BiTime/></span>{Convert(data.sat)}
                            </div>
                        </div> 
                        {/* card  */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Sunday
                            </div>
                            <div className={style.t}>
                                <span><BiTime/></span>{Convert(data.sun)}
                            </div>
                        </div>
                        {/* card  */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Monday
                            </div>
                            <div className={style.t}>
                                <span><BiTime/></span>{Convert(data.mon)}
                            </div>
                        </div>
                        {/* card  */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Tueday
                            </div>
                            <div className={style.t}>
                                <span><BiTime/></span>{Convert(data.tue)}
                            </div>
                        </div>
                        {/* card  */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Wednesday
                            </div>
                            <div className={style.t}>
                                <span><BiTime/></span>{Convert(data.wed)}
                            </div>
                        </div>
                        {/* card  */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Thursday
                            </div>
                            <div className={style.t}>
                                <span><BiTime/></span>{Convert(data.thu)}
                            </div>
                        </div>
                        {/* card  */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Friday
                            </div>
                            <div className={style.t}>
                                <span><BiTime/></span>{Convert(data.fri)}
                            </div>
                        </div>
                        {/* card  */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Batchdetails