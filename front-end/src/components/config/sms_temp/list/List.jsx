import React from 'react';
import { BsCheckCircle } from "react-icons/bs";
import { FcSms } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { VscWholeWord } from "react-icons/vsc";
import { toast } from "react-toastify";
import style from './list.module.scss';


const List = ({edit,data,setData}) => {
  // eslint-disable-next-line no-unused-vars

  const dellet = async(id)=>{
    try{
      const res = await fetch(`/deletesmstemplate/${id}`);
      const resData = await res.json();
      const status = await (await res).status;
      if(status === 200){
        toast.success("htk delete succesfully 👌")
        return setData(resData)
      }
    }catch(error){
      console.log(error)
      toast.error("some thing is wrong !")
    }
  }

  const cStatus = async(id,st)=>{
    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },body:JSON.stringify({status:st})
  };
    try {
       let res = await fetch(`/smstchangestatus/${id}`,settings);
       let resData1 = await res.json();
       let resStatus = await res.status;
       if(resStatus === 200){
        toast.success("status change");
        return setData(resData1);
       }
    } catch (error) {
      console.log(error)
      toast.error("some thing is wrong !")
    }
  }

  return (
    <div className={style.main}>
        <div className={`${style.con} ${data.status? style.ac : style.de}`}>
            <div className={style.text}><h1>{data.name}</h1></div>
            <div className={style.action}>
                    <div onClick={()=>{}} className={style.info}><VscWholeWord/>:{data.text.length}<FcSms/>:{parseInt((data.text.length / 70)+1)}</div>
                {data.status? <button onClick={()=>{cStatus(data._id,data.status)}} className={style.active}><BsCheckCircle/></button>:<button onClick={()=>{cStatus(data._id,data.status)}} className={style.deactive}><TiDeleteOutline/></button>}
                    <button onClick={()=>{edit(data._id,data.name,data.text)}} className={style.dell}><FiEdit/> </button>
                    <button onClick={()=>{dellet(data._id)}} className={style.dell}><RiDeleteBinLine/></button>
            </div>  
        </div>
        <div className={style.des}>
          <p>{data.text}</p>
        </div>
    </div>
  )
}

export default List;