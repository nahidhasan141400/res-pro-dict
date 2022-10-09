import axios from "axios";
import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiDoughnutChart } from "react-icons/bi";
import { toast } from "react-toastify";
import style from "./analisys.module.scss";
import Month from "./chart/Month";
import Pic from "./chart/Pic";
const d = new Date()

const Analisys = () => {
  const [year,setYear] = React.useState(d.getFullYear())
  const [load,setLoad] = React.useState(false)
  const [data,setData] = React.useState([])


  React.useEffect(()=>{
    const getda = async ()=>{
      try {
        
        let resdb = await axios.post("/getyeardataan",{year:d.getFullYear()});
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
  React.useEffect(()=>{
      
  const getData = async ()=>{
    if(load){
      return
    }

    setLoad(true)
    try {
      let resdb = await axios.post("/getyeardataan",{year});
      if(resdb.status === 200){
        setData(resdb.data)
        setLoad(false)
      }
    } catch (error) {
      toast.error("some thing is wrong!!");
      setLoad(false);
    }
  }
  getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[year])


  return (
    <div className={style.main}>
        <div className={style.con}>
          <div className={style.row3}>
              <div className={style.con}>
                <div className={style.box}>
                  <div className={style.h}>
                    <h1><span><BiDoughnutChart/></span> admition rate</h1>
                  </div>
                  <div className={style.ch}>
                    <Pic/>
                  </div>
                </div>
                <div className={style.box}></div>
                <div className={style.box}></div>
              </div>
          </div>

          <div className={style.selectm}>
            {/* <input value={date} type="date" onChange={(e)=>{getData(e.target.value) }}/> */}
            <select value= {year}  onChange={(e)=>{  setYear(e.target.value); }}>
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((e,i)=>{
                return (<option key={i} value={d.getFullYear()-i}>{d.getFullYear()-i}</option>)
              })}
              
            </select>
            <span>chouse date to show data</span>
          </div>
          <div className={style.totalm}>
            <div className={style.h}>
              <h1><span><AiOutlinePieChart/></span>Total visitor year {year}</h1>
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