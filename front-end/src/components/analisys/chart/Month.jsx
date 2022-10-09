import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";


 

const Month = ({data}) => {
  const [sedata,setsedata] = useState([])
  const [cadata,setcadata] = useState([])

  useEffect(()=>{
    const al = [0,0,0,0,0,0,0,0,0,0,0]
    data.forEach(element => {
      al[element.month] += 1;
    });
    setsedata(al)
  },[data])
 

  let series =[{
    name: 'visitor',
    data: sedata
  }];
  
  
  
  let options = {
    chart: {
      height: 350,
      type: 'area',
      zoom: {
                  enabled: false
              }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      categories:[1,2,3,4,5,6,7,8,9,10,12],
      axisBorder:{
        offsetX:0
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }
  
  
  
  

  return (
    <div> <Chart options={options} series={series} type="area" height={350}/></div>
  )
}

export default Month
