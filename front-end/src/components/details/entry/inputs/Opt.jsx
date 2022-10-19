import React from 'react';
import { toast } from "react-toastify";
import style from "./opt.module.scss";

const Opt = ({v,set}) => {
  const [courses,setcourses] = React.useState([]);

  React.useEffect(()=>{
    const getcourse = async ()=>{
      try {
        let res =await fetch('/getActiveCourse');
        let status =await (await res).status;
        let data =await res.json()
        if(status === 200){
          setcourses(data);
        }else{
          toast.error("spme thing is wrong")
        }
      } catch (error) {
        console.log(error);
        toast.error("some thing is wrong");
      }
    }
    
    getcourse()
  },[])
  return (
    <div className={style.main}>
        <label>Courses ?</label><br />
        <select value={v} onChange={(e)=>{set(e.target.value)}}>
            <option value="">choose a course</option>
            {courses.map((e)=>{
              return (<option value={e.name}>{e.name}</option>)
            })}
        </select>
    </div>
  )
}

 export const Opt2 = ({v,set}) => {
  return (
    <div className={style.main}>
        <label>Appointment ? </label><br />
        <input value={v} onChange={(e)=>{set(e.target.value)}} type="date"  />
    </div>
  )
}

export const Opt3 = ({v,set}) => {
  const [ Htk , sethtk ] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [ vi , setvi ] = React.useState(v);
  React.useEffect(()=>{
    const getcourse2 = async ()=>{
      try {
        let res =await fetch('/getActivehtk');
        let status =await (await res).status;
        let data =await res.json()
        if(status === 200){
          sethtk(data);
        }else{
          toast.error("spme thing is wrong")
        }
      } catch (error) {
        console.log(error);
        toast.error("some thing is wrong");
      }
    }
    getcourse2()
  },[])
  return (
    <div className={style.main}>
        <label>How To Know About us(HTK) ? </label><br />
        <select value={v} onChange={(e)=>{set(e.target.value);}}>
            {/* <option value={vi}>{vi}</option> */}
            <option value="">choose</option>
            { Htk.map((e)=>{
              return (<option value={e.name}>{e.name}</option>)
            })}
        </select>
    </div>
  )
}

export default Opt