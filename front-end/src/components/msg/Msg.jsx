import axios from "axios";
import React from 'react';
import { AiOutlineFileSearch } from "react-icons/ai";
import { HiChatAlt2 } from "react-icons/hi";
import { RiUserSearchFill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { toast } from "react-toastify";
import Add from "./form/Add";
import style from "./query.module.scss";
import Table from './table/Table';
const d = new Date()

const Msg = () => {
    const [tdata,settdata] = React.useState([]);
    const [coursefopt,setCoursefopt] = React.useState([]);
    const [bl,setbl] = React.useState("");
    const [promt,setPromt]= React.useState(false)

    //  set query value state 
    const [yearto,setyearto] = React.useState("");
    const [monthto,setmonthto] = React.useState("");
    const [dateto,setdateto] = React.useState("");
    const [courseto,setcourseto] = React.useState("");
    const [admitedto,setadmitedto] = React.useState("");

    // send msg state

    const [msgp,setmsgp] = React.useState("")
    const [smsid,setsmsid] = React.useState(false)

    // appointment date fetch state
    const [appoDate,setappoDate] = React.useState()


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
              let status =await  res.status;
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

          const getbala = async ()=>{
            try {
              let res =await fetch('/getsmsbalance');
              let status =await res.status;
              let data =await res.json()
              if(status === 200){
                setbl(data);
              }else{
                toast.error("some thing is wrong")
              }
            } catch (error) {
              console.log(error);
              toast.error("some thing is wrong");
            }
          };
          
        getbala()
        getcourse()
        getMonth()
    },[])

    const sendquery =async ()=>{
        try {
            const resdb = await axios.post('/getdataforsms',{
                year:yearto,
                month:monthto,
                date:dateto,
                course:courseto,
                admit:admitedto
            })
            settdata(resdb.data)
        } catch (error) {
            toast.error("some thing is wrong!!")
        }
    }


    const appointment = async ()=>{
        try {
            let res =await axios.post("/getappointment",{date:appoDate});
            let data =  res.data;
            let status = res.status;
            if(status === 200){
                settdata(data)
            }
        } catch (error) {
            toast.error("some thing is wrong!!")
        }
    }

    const sendall = async ()=>{
        try {
            const resaxios = await axios.post('/sendsmstoall',{data:tdata,msg:msgp,id:smsid});
            console.log(resaxios)
            setPromt(false)
            toast.success("send massege to all")
        } catch (error) {
            console.log(error)
            toast.error("some thing is wrong with this!")
        }
    }
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <div className={style.text}>
                    <h1><span><RiUserSearchFill/></span>query</h1>
                </div>
               <div className={style.search}>
                <h1>{bl}</h1>
               </div>
                <div className={style.act}>
                    <button onClick={()=>setPromt(true)}><span><HiChatAlt2/></span>send all</button>
                </div>
            </div>
            <div className={style.qrsec}>
                <div className={style.form}>
                    <div className={style.r}>

                        
                        <div className={style.inp}>
                            <span>year</span>
                            <select value={yearto} onChange={(e)=>setyearto(e.target.value)}>
                                <option value="">All</option>
                                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((e,i)=>{
                return (<option key={i} value={d.getFullYear()-i}>{d.getFullYear()-i}</option>)
              })}
                            </select>
                        </div>


                        <div className={style.inp}>
                            <span>month</span>
                            <select value={monthto} onChange={(e)=>setmonthto(e.target.value)}>
                                <option value="">All </option>
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map((e,i)=>{
                                return (<option key={i} value={i}>{e}</option>)
                            })}
                                
                            </select>
                        </div>


                        <div className={style.inp}>
                            <span>date</span>
                            <select value={dateto} onChange={(e)=>setdateto(e.target.value)}>
                                <option value="">All</option>
                                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((e,i)=>{
                                return (<option key={i} value={e}>{e}</option>)
                            })}
                            </select>
                        </div>
                        
                    </div>
                    <div className={style.r2}>
                    <div className={style.inp}>
                            <span>courses</span>
                            <select value={courseto} onChange={(e)=>setcourseto(e.target.value)} >
                                <option value="">All</option>
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
                            <select value={admitedto} onChange={(e)=>setadmitedto(e.target.value)}>
                                <option value="">All</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div className={style.inp}>
                            <span>Appointment date:</span>
                            <input type="date" value={appoDate} onChange={(e)=>setappoDate(e.target.value)}/>
                        </div>
                        

                    </div>
                    <div className={style.r2}>
                    <button onClick={sendquery}>  <span><AiOutlineFileSearch/></span> search query</button>
                    <button onClick={appointment}> <span><TbReportSearch/></span> {appoDate? "Search": "Today" } appointment</button>
                    </div>
                </div>
            </div>
            <div className={style.table}>
                <Table data={tdata}/>
            </div>
            <div className={style.promt}>
                {promt?<Add set={setPromt} d={[msgp,setmsgp]} send={sendall}  ch={[smsid,setsmsid]}/>:""}
            </div>
        </div>
    </div>
  )
}

export default Msg  