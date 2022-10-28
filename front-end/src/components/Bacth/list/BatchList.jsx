import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./list.module.scss";

const BatchList = () => {
  const navigat = useNavigate();
  const [data,setdata] = React.useState([1])

  // get data 
  const getData = async ()=>{
    try {
        const res = await fetch("/getallbatch");
        const allcoursedata = await res.json();
        setdata(allcoursedata)
      } catch (error) {
        console.log(error);
        return toast.error("some thing wrong in sever 😥");
      }
}
React.useEffect(()=>{
    getData()
},[])

//change status 
const cStatus = async(id,st)=>{
  const settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },body:JSON.stringify({status:st})
};
  try {
     let res = await fetch(`/changebatch/${id}`,settings);
     let resData1 = await res.json();
     let resStatus = await res.status;
     if(resStatus === 200){
      toast.success("status change");
      return setdata(resData1);
     }
  } catch (error) {
    console.log(error)
    toast.error("some thing is wrong !")
  }
}

/// delete 
const dellet = async(id)=>{
  try{
    const res = await fetch(`/deletebatch/${id}`);
    const resData = await res.json();
    const status = await (await res).status;
    if(status === 200){
      toast.success("course delete succesfully 👌")
      return setdata(resData)
    }
  }catch(error){
    console.log(error)
    toast.error("some thing is wrong !")
  }
}
 // lib fun get day num
 const getday = (data) =>{
    let n = 0;
    if(data.fri !== ""){
      n ++;
    }
    if(data.mon !== ""){
      n ++;
    }
    if(data.sat !== ""){
      n ++;
    }
    if(data.sun !== ""){
      n ++;
    }
    if(data.thu !== ""){
      n ++;
    }
    if(data.tue !== ""){
      n ++;
    }
    if(data.wed !== ""){
      n ++;
    }
    return n;
 }
  return (
    <div className={style.main}>
        <div className={style.con}>
          <div className={style.head}>
                <h1><span>#</span>Batch List</h1>
            </div>
            <div className={style.table}>
                <table>
                    <thead>
                        <tr>
                            <th>Batch Name</th>
                            <th>days</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e,i)=>{
                                return (
                                    <tr key={i}>
                                        <td>{e.name}</td>
                                        <td>{getday(e)+" day in week"}</td>
                            <td className={style.cr}>
                                <button  onClick={()=>{cStatus(e._id,e.status)}}>
                                    {e.status?<span style={{color:"#007a25"}}><AiFillEye/></span>:<span style={{color:"#ff0000"}}><AiFillEyeInvisible/></span>}
                                </button>
                                <button onClick={()=>{navigat(`/batchupdate/${e._id}`)}}><span style={{color: "#007aff"}}><BiEdit/></span></button>
                                <button style={{color:"#ff0000"}} onClick={()=>{dellet(e._id)}}><BiTrash/></button>
                                <button onClick={()=>navigat(`/batchdetails/${e._id}`)}><BsClipboardData/> Details</button>
                            </td>
                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default BatchList