import axios from "axios";
import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { toast } from "react-toastify";
import style from "./analisys.module.scss";
import Month from "./chart/Month";

const Analisys = () => {
  const [date,setDate] = React.useState(new Date())
  const [load,setLoad] = React.useState(false)
  const [data,setData] = React.useState([])
console.log(data)


  React.useEffect(()=>{
    const getda = async ()=>{
      try {
        let resdb = await axios.post("/getmonthdataan",{date:new Date()});
        if(resdb.status === 200){
          setData(resdb.data)
          setLoad(false)
        }
      } catch (error) {
        toast.error("some thing is wrong!!");
        setLoad(false);
      }
    }
    getda()
  },[])

  const getData = async (v)=>{
    if(load){
      return
    }

    setDate(v);
    setLoad(true)
    try {
      let resdb = await axios.post("/getmonthdataan",{date});
      if(resdb.status === 200){
        setData(resdb.data)
        setLoad(false)
      }
    } catch (error) {
      toast.error("some thing is wrong!!");
      setLoad(false);
    }
  }

  return (
    <div className={style.main}>
        <div className={style.con}>
          <div className={style.selectm}>
            <input value={date} type="date" onChange={(e)=>{getData(e.target.value) }}/>
            <span>chouse date to show data</span>
          </div>
          <div className={style.totalm}>
            <div className={style.h}>
              <h1><span><AiOutlinePieChart/></span>Total year visitor</h1>
            </div>
            <div className={style.chart}>
              <Month data={data}/>
            </div>
          </div>
          <div className={style.totalm}>
            <div className={style.h}>
              <h1><span><AiOutlinePieChart/></span>Total visitor coparison</h1>
            </div>
            <div className={style.chart}>
              <Month data={data}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Analisys 