import React from 'react';
import ReactECharts from 'echarts-for-react';
export default function Home() {
  var option = {
    title: {
      text: 'Comparision of high performer resignation rates to the overall resignation rate',

      subtext:'Do high performers resign more often then others?'


    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    // legend: {
    //   data: ['2011', '2012']
    // },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLabel: {
        formatter: '{value}%'
      }
    },
    yAxis: {
      type: 'category',
      data: ['Product', 'Office of CEO', 'Marketing', 'Customer Support', 'Finance', 'HR', 'IT', 'Sales', 'Operations']
    },
    series: [
      {
        // name: '2011',
        type: 'bar',
        label: {
          show: true,
          position: 'insideRight',
          formatter: '{c}%'
        },
        data: [9.37, 11, 11.9, 12.3, 12.5,12.9,13.7,15.3,16.6]
      },
      {
        // name: '2012',
        type: 'bar',
        label: {
          show: true,
          position: 'insideRight',
          formatter: '{c}%'
        },
        data: [8.59, 0, 10.9, 12,9.27,20.8, 11.6,18.1,16.6]
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: 500, margin:"50px" }}
      // opts={{ locale: 'FR' }}
    />
  )
}