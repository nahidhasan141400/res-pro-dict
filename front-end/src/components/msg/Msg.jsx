import axios from "axios";
import React from 'react';
import { AiOutlineFileSearch } from "react-icons/ai";
import { HiChatAlt2 } from "react-icons/hi";
import { RiUserSearchFill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./query.module.scss";
import Table from './table/Table';
const d = new Date()

const Msg = () => {
    const [tdata,settdata] = React.useState([]);
    const [value,setValue] = React.useState('');
    const [coursefopt,setCoursefopt] = React.useState([])
    const navigat = useNavigate()
    React.useEffect(()=>{
        const getMonth = async ()=>{
            try {
                let res =await fetch("/getentrymonth");
                let data = await res.json()
                let status = res.status;
                if(status === 200){
                    settdata(data)
                }
            } catch (error) {
                toast.error("some thing is wrong!!")
            }
        }
        const getcourse = async ()=>{
            try {
              let res =await fetch('/getActiveCourse');
              let status =await (await res).status;
              let data =await res.json()
              if(status === 200){
                setCoursefopt(data);
              }else{
                toast.error("spme thing is wrong")
              }
            } catch (error) {
              console.log(error);
              toast.error("some thing is wrong");
            }
          };

        getcourse()
        getMonth()
    },[])

    const sendquery =async ()=>{
        try {
            const resdb = await axios.post('/queryentrydata',{value})
            settdata(resdb.data)
        } catch (error) {
            toast.error("some thing is wrong!!")
        }
    }
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <div className={style.text}>
                    <h1><span><RiUserSearchFill/></span>query</h1>
                </div>
               
                <div className={style.act}>
                    <button onClick={()=>{navigat('/entry')}}><span><HiChatAlt2/></span>send all</button>
                </div>
            </div>
            <div className={style.qrsec}>
                <div className={style.form}>
                    <div className={style.r}>

                        
                        <div className={style.inp}>
                            <span>year</span>
                            <select>
                                <option value="">choose</option>
                                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((e,i)=>{
                return (<option key={i} value={d.getFullYear()-i}>{d.getFullYear()-i}</option>)
              })}
                            </select>
                        </div>


                        <div className={style.inp}>
                            <span>month</span>
                            <select>
                                <option value="">choose</option>
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map((e,i)=>{
                                return (<option key={i} value={i}>{e}</option>)
                            })}
                                
                            </select>
                        </div>


                        <div className={style.inp}>
                            <span>date</span>
                            <select>
                                <option value="">choose</option>
                                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((e,i)=>{
                                return (<option key={i} value={e}>{e}</option>)
                            })}
                            </select>
                        </div>
                        
                    </div>
                    <div className={style.r2}>
                    <div className={style.inp}>
                            <span>courses</span>
                            <select >
                                <option value="">choose</option>
                                {coursefopt.map((e,i)=>{
                                    return (<option key={i} value={e.name}>{e.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.form2}>
                    <div className={style.r}>

                        
                        <div className={style.inp}>
                            <span>admited</span>
                            <select>
                                <option value="">choose</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        

                    </div>
                    <div className={style.r2}>
                    <button> <span><TbReportSearch/></span> Today appointment</button>
                    <button>  <span><AiOutlineFileSearch/></span> search query</button>
                    </div>
                </div>
            </div>
            <div className={style.table}>
                <Table data={tdata}/>
            </div>
        </div>
    </div>
  )
}

export default Msg  