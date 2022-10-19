import axios from "axios";
// import moment from "moment";

import Moment from 'react-moment';

import React from 'react';
import { AiOutlineDelete, AiOutlineReload } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { BsBuilding, BsCalendar2Date } from "react-icons/bs";
import { CgUserList } from "react-icons/cg";
import { FaRegComment, FaRegListAlt, FaUserGraduate } from "react-icons/fa";
import { FiEdit3, FiPhoneCall, FiUser } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import { ImBullhorn } from "react-icons/im";
import { IoIosChatboxes } from "react-icons/io";
import { MdOutlineUpdate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Add from "./form/Add";

import { useParams } from "react-router-dom";
import style from "./det.module.scss";

const Details = () => {
    const n = useNavigate()
    let {id} = useParams();
    const [data,setData] = React.useState({courses:[]})
    const [msgform,setmsgform] = React.useState(false);
    const[msgn,setmsgn] = React.useState(['',''])
    React.useEffect(()=>{
        const getdata = async ()=>{
            try {
                const resserver = await axios.get(`/getentryby/${id}`)
                if(resserver.status === 200){
                    setData(resserver.data);
                }else{
                    toast.error("some thing is wrong!!")
                  return  n("/entry");
                }
            } catch (error) {
                console.log(error)
                    toast.error("some thing is wrong!!")
                    n("/entry");
            }
        }
        getdata()
    },[id,n])

    const change =async (s,i)=>{
        try {
            const resc = await axios.post(`/changestatusentry/${i}`,{status:s});
            if(resc.status === 200){
                console.log(resc.data)
                setData(resc.data)
                toast.success("status changed")
            }
        } catch (error) {
            console.log(error)
                    toast.error("some thing is wrong!!")
        }
    }

    const sendmsg = async (number,name)=>{
                if(!number ){
                    return toast.error("no mobile number !")
                }
                if(number[0] === "0" && number[1] === "1"){
                    number = `88${number}`
                }
                setmsgn([number,name]);
                setmsgform(true)
    }

        const visDel = async (id)=>{
            // eslint-disable-next-line no-restricted-globals
            let con = confirm("delete this entry!");
            if(!con){
                return
            }
            try {
                const respo = await axios.post(`/delete-visitor`,{id});
                if(respo.status === 200){
                    toast.success('entry deleted!')
                    return n('/query');
                }
            } catch (error) {
                console.log(error);
                return toast.error('something is wrong !');
            }
        }
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span><CgUserList/></span>details</h1>
                <div className={style.btnmsg}>
                    <button onClick={()=>{sendmsg(data.mobile,data.name)}}><span><IoIosChatboxes/></span>send massage</button>
                    <button onClick={()=>{n(`/updatevisitorentry/${data._id}`)}}><span><FiEdit3/></span>edit</button>
                    <button onClick={()=>{visDel(data._id)}} id={style.delbtn}><span><AiOutlineDelete/></span>delete</button>
                </div>
            </div>
            <div className={style.info}>
                <div className={style.infoi}>
                    <span className={style.ico}><FiUser/> name: </span><span>{data.name}</span>
                </div>
                <div className={style.infoi}>
                    <span className={style.ico}><FiPhoneCall/> mobile: </span><span>{data.mobile}</span>
                </div>
                <div className={style.infoi}>
                    <span className={style.ico}><BsBuilding/> company: </span><span>{data.company}</span>
                </div>
            </div>
            <div className={style.comment}>
                <div className={style.comentitem}>
                    <div className={style.h}>
                        <span><ImBullhorn/> HTK</span>
                    </div>
                    <div className={style.t}>
                        <p>{data.HTK}</p>
                    </div>
                </div>
                <div className={style.comentitem}>
                    <div className={style.h}>
                        <span><FaRegComment/> Decision</span>                       
                    </div>
                    <div className={style.t}>
                        <p>{data.decision} </p>
                    </div>
                </div>
                <div className={style.comentitem}>
                    <div className={style.h}>
                        <span><BiCommentDots/> councilor comment</span>
                       
                    </div>
                    <div className={style.t}>
                        <p>{data.CC}</p>
                    </div>
                </div>
            </div>
            <div className={style.course}>
                <div className={style.h}>
                    <span><FaRegListAlt/> course</span>
                </div>
                <div className={style.cl}>
                    { data.courses.map((e,i)=>{
                        return(<span key={i}>{e}</span>)
                    })}
                </div>
            </div>
            <div className={style.date}>
                <div className={style.di}>
                    <div className={style.h}>
                        <span><BsCalendar2Date/> first date</span>
                    </div>
                    <div className={style.b}>
                        <p>
                        <Moment format="YYYY/MM/DD">
                                {data.createdAt}
                            </Moment>
                        </p>
                        {/* moment(data.createdAT).format("MMM Do YY") */}
                    </div>
                </div>
                <div className={style.di}>
                    <div className={style.h}>
                        <span><MdOutlineUpdate/> last update</span>
                    </div>
                    <div className={style.b}>
                        <p>
                            <Moment format="YYYY/MM/DD">
                                {data.updatedAt}
                            </Moment>
                        </p>
                    </div>
                    {/* moment().calendar(data.updatedAT) */}
                </div>
                <div className={style.di}>
                    <div className={style.h}>
                        <span><AiOutlineReload/> next appointment</span>
                    </div>
                    <div className={style.b}>
                        <p>{data.nextCD}</p>
                    </div>
                </div>
            </div>
            <div className={style.admit}>
                <div className={style.adi}>
                    <div className={style.h}>
                        <span><FaUserGraduate/> admitted</span>
                    </div>
                    <div className={style.body}>
                        <span>{data.admited?"yes":"no"}</span><button onClick={()=>{change(data.admited,data._id)}}><GrUpdate/> update</button>
                    </div>
                </div>
            </div>
            <div className={style.comment2}>
                <div className={style.h}>
                    <span><FaRegComment/> additional comments</span>
                </div>
                <div className={style.text}>
                    <p>{data.comment}</p>
                </div>
            </div>
            
        {msgform?<Add setmsgform={setmsgform} data={msgn}/>:""}
        </div>
    </div>
  )
}
 
export default Details