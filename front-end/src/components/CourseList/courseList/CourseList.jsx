import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { toast } from "react-toastify";
import style from "./list.module.scss";
const CourseList = () => {
    const [data,setData] = React.useState([])

    const getData = async ()=>{
        try {
            const res = await fetch("/getallcourse");
            const allcoursedata = await res.json();
            setData(allcoursedata)
          } catch (error) {
            console.log(error);
            return toast.error("some thing wrong in sever 😥");
          }
    }
    React.useEffect(()=>{
        getData()
    },[])

    const cStatus = async(id,st)=>{
        const settings = {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },body:JSON.stringify({status:st})
      };
        try {
           let res = await fetch(`/cstatus/${id}`,settings);
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
      const dellet = async(id)=>{
        try{
          const res = await fetch(`/deletecourse/${id}`);
          const resData = await res.json();
          const status = await (await res).status;
          if(status === 200){
            toast.success("course delete succesfully 👌")
            return setData(resData)
          }
        }catch(error){
          console.log(error)
          toast.error("some thing is wrong !")
        }
      }

  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span>Courses List</h1>
            </div>
            <div className={style.table}>
                <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course Fee</th>
                            <th>Course Duration</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e,i)=>{
                                return (
                                    <tr>
                                        <td>{e.name}</td>
                                        <td>{e.Fee}</td>
                                        <td>{e.duration}</td>
                            <td className={style.cr}>
                                <button  onClick={()=>{cStatus(e._id,e.status)}}>
                                    {e.status?<span style={{color:"#007a25"}}><AiFillEye/></span>:<span style={{color:"#ff0000"}}><AiFillEyeInvisible/></span>}
                                </button>
                                <button><span style={{color: "#007aff"}}><BiEdit/></span></button>
                                <button style={{color:"#ff0000"}} onClick={()=>{dellet(e._id)}}><BiTrash/></button>
                                <button><BsClipboardData/> Details</button>
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

export default CourseList