import React from 'react';
import Chart from "react-apexcharts";


 

const Month = ({data}) => {
 

  let series =[{
    name: 'visitor',
    data: [31, 40, 28, 51, 42, 109, 100,11,12,23,32,55]
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
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
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
