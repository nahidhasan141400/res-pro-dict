import React from 'react';
import Chart from "react-apexcharts";


          
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
      categories: ["jan", "feb", "mar", "apr", "may", "jun", "jul","aug","sep","oct","nov","dec"],
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



const Month = () => {
  return (
    <div> <Chart options={options} series={series} type="area" height={350}/></div>
  )
}

export default Month
