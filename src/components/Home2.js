import React from 'react';
import ReactECharts from 'echarts-for-react';
export default function Home2() {
    const labelRight = {
        position: 'right'
      };
  const  option = {
        // title: {
        //   text: 'Bar Chart with Negative Value'
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 80,
          bottom: 30
        },
        xAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          
        },
        series: [
          {
            name: 'Cost',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              formatter: '{b}'
            },
            data: [
              { value: +0.78, label: labelRight },
              { value: -0.09, label: labelRight },
              0.2,
              0.44,
              { value: -0.23, label: labelRight },
              0.08,
              { value: -0.17, label: labelRight },
              0.47,
              { value: -0.78, label: labelRight },
              0.78
            ]
          }
        ]
      };
  return (
    <ReactECharts
      option={option}
      style={{ height: 500, marginTop:"50px" }}
      // opts={{ locale: 'FR' }}
    />
  )
}