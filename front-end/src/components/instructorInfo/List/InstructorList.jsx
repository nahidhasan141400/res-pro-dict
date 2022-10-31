import axios from "axios";
import React from 'react';
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from './list.module.scss';

const InstructorList = () => {
    const navigat = useNavigate()
    const [data ,SetData] = React.useState([]);

    const getData = async ()=>{
        try {
            let resdb = await axios.get('/getallinstructor');
            if(resdb.status === 200){
                SetData(resdb.data);
            }else{
                console.log(resdb)
                toast.error("something is wrong!")
            }
        } catch (error) {
            console.log(error);
            toast.error("some thing is Wrong !")
        }
    }

    React.useEffect(()=>{
        getData()
    },[])

    const deleteIn = async (id)=>{
        try{
            const res = await fetch(`/deletInstructor/${id}`);
            const resData = await res.json();
            const status = await (await res).status;
            if(status === 200){
              toast.success("course delete succesfully 👌")
              return SetData(resData)
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
                <h1><span>#</span>Instructor List</h1>
            </div>
            <div className={style.table}>
                <table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Mobile</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e,i)=>{
                                return (
                                    <tr>
                                        <td>
                                            <div className={style.pic}>
                                                <img src={`/photoC/instructor/${e.Photo}`} alt="" />
                                            </div>
                                        </td>
                                        <td>{e.name}</td>
                                        <td>{e.Specialty}</td>
                                        <td>{e.Mobile}</td>
                            <td className={style.cr}>
                                {/* <button  onClick={()=>{}}>
                                    {e.status?<span style={{color:"#007a25"}}><AiFillEye/></span>:<span style={{color:"#ff0000"}}><AiFillEyeInvisible/></span>}
                                </button> */}
                                <button onClick={()=>{navigat(`/updateinstructor/${e._id}`)}}><span style={{color: "#007aff"}}><BiEdit/></span></button>
                                <button style={{color:"#ff0000"}} onClick={()=>{deleteIn(e._id)}}><BiTrash/></button>
                                <button onClick={()=>navigat(`/instructordetails/${e._id}`)}><BsClipboardData/> Details</button>
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

export default InstructorList