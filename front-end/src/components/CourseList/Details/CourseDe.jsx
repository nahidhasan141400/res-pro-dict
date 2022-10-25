import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import style from './de.module.scss';
const CourseDe = () => {
    let { id } = useParams();
    const nav = useNavigate()
    const [data,setdata] = useState({});
   
  // get data by id function
  const getdata = async ()=>{
    try {
      const resdb = await axios(`/getcoursebyid/${id}`);
      if(resdb.status === 200){
        setdata(resdb.data);
      
      }else{
        console.log(resdb);
        toast.error("some thing is wrong")
        nav("/courselist")
      }
    } catch (error) {
      console.log(error);
        toast.error("some thing is wrong")
        nav("/courselist")
    }
  }
  // use effect 
  useEffect(()=>{
    getdata()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span>Courses Details</h1>
            </div>
            <div className={style.info}>
                <div className={style.imgCon}>
                    <img src={`/photoC/Course/${data.Photo}`} alt="" />
                </div>
                <div className={style.name}>
                    <h1>{data.name}</h1>
                    <h3>Duration: {data.duration}</h3>
                    <h3><span>Fee:</span> {data.Fee}</h3>
                </div>
                <div className={style.des}>
                    <div dangerouslySetInnerHTML={{__html:data.Details}}></div>
                </div>
                <div className={style.gap}></div>
            </div>
        </div>
    </div>
  )
}

export default CourseDe;