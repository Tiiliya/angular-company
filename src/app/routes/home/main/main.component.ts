import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  chartOption = {
    title: {
      text: 'Monthly Recap Report'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['legend1', 'legend2', 'legend3']
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: 'legend1',
        type: 'line',
        smooth: true,
        itemStyle: { normal: { areaStyle: { type: 'default' }, color: '#9b9da2' } },
        data: [10, 12, 21, 54, 260, 830, 710]
      },
      {
        name: 'legend2',
        type: 'line',
        smooth: true,
        itemStyle: { normal: { areaStyle: { type: 'default' }, color: '#4f98c3' } },
        data: [30, 182, 434, 791, 390, 30, 10]
      },
      {
        name: 'legend3',
        type: 'line',
        smooth: true,
        itemStyle: { normal: { areaStyle: { type: 'default' }, color: '#205f84' } },
        data: [1320, 1132, 601, 234, 120, 90, 20]
      }
    ]
  }
  circleOption = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
    },
    calculable: false,
    series: [
      {
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, 70],

        // for funnel
        x: '20%',
        width: '40%',
        funnelAlign: 'right',
        max: 1548,

        itemStyle: {
          normal: {
            label: {
              position: 'inner'
            },
            labelLine: {
              show: false
            }
          }
        },
        data: [
          { value: 335, name: '直达' },
          { value: 679, name: '营销广告' },
          { value: 1548, name: '搜索引擎', selected: true }
        ]
      },
      {
        name: '访问来源',
        type: 'pie',
        radius: [100, 140],

        // for funnel
        x: '60%',
        width: '35%',
        funnelAlign: 'left',
        max: 1048,

        data: [
          { value: 335, name: '直达' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1048, name: '百度' },
          { value: 251, name: '谷歌' },
          { value: 147, name: '必应' },
          { value: 102, name: '其他' }
        ]
      }
    ]
  }
  data = [ {
      orderId: 'OR9842',
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park',
      status: 'pink'
    }, {
      orderId: 'OR9842',
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park',
      status: 'red'
    }, {
      orderId: 'OR9842',
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
      status: 'orange'
    }, {
      orderId: 'OR9842',
      key    : '4',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
      status: 'green'
    },{
      orderId: 'OR9842',
      key    : '5',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
      status: 'cyan'
    } 
  ];
}
