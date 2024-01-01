import React from 'react';
import ReactECharts from 'echarts-for-react';
export default function Home3() {
 const  option = {
        title: {
          text: 'Employee Movement Breakdown ',
      
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          splitLine: { show: false },
          data: ['Expantion', 'Replacement', 'Involuntary Turnover', 'Voluntary Turnover', 'Discrepancies', 'Net Change']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            emphasis: {
              itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
              }
            },
            data: [0, 200, 400, 600, 800]
          },
          {
            name: 'Life Cost',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'inside'
            },
            data: [+380, +326, 118, 232, 7, 362]
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