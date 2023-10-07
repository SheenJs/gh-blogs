import * as echarts from 'echarts';
import mock from 'mockjs';

import clear from './assets/weather/clear.png';
import cloudy from './assets/weather/cloudy.png';
import rainy from './assets/weather/rainy.png';
import thundershower from './assets/weather/thundershower.png';

const weather = [clear, cloudy, rainy, thundershower];

export const WEATHER_POTION: echarts.EChartsOption = {
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross',
    },
  },
  grid: {
    top: 80,
    left: 30,
    bottom: 50,
    right: 30,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      position: 'top',
      offset: 50,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        formatter: ['{a|{value}}'].join('\n'),
        rich: {
          a: {
            fontSize: 13,
          },
        },
      },
      nameTextStyle: {},
      data: Array.from({ length: 15 }, (_, i) => {
        const day = new Date().getDate();
        const date = new Date(new Date().setDate(day + i));
        return `${date.getMonth() + 1}/${date.getDate()}`;
      }),
    },
    {
      type: 'category',
      boundaryGap: false,
      position: 'top',
      offset: 32,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        formatter: ['{a|{value}}'].join('\n'),
        rich: {
          a: {
            // color: 'white',
            fontSize: 12,
          },
        },
      },
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 19,
      },
      data: Array.from({ length: 15 }, (_, i) => {
        const day = new Date().getDate();
        const date = new Date(new Date().setDate(day + i));
        const week = ['日', '一', '二', '三', '四', '五', '六'];
        return `周${week[date.getDay()]}`;
      }),
    },
    {
      type: 'category',
      boundaryGap: false,
      position: 'top',
      offset: 32,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        formatter: ['{a|{value}}'].join('\n'),
        rich: {
          a: {
            // color: 'white',
            fontSize: 12,
          },
        },
      },
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 19,
      },
      data: Array.from({ length: 15 }, (_, i) => {
        const day = new Date().getDate();
        const date = new Date(new Date().setDate(day + i));
        const week = ['日', '一', '二', '三', '四', '五', '六'];
        return `周${week[date.getDay()]}`;
      }),
    },
    {
      type: 'category',
      boundaryGap: false,
      position: 'top',
      offset: -24,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        formatter: function (value, index) {
          return '{' + index + '| }\n{b|' + value + '}';
        },
        rich: {
          ...Array.from({ length: 15 }, () => ({
            backgroundColor: {
              image: weather[mock.Random.integer(0, 3)],
            },
            height: 16,
          })),
          b: {
            fontSize: 11,
            lineHeight: 30,
            height: 20,
          },
        },
      },
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 19,
      },
      data: Array.from(
        { length: 15 },
        () => ['小雨', '阴', '多云', '小雨', '晴', '雨夹雪'][mock.Random.integer(0, 5)]
      ),
    },
    {
      type: 'category',
      boundaryGap: false,
      position: 'bottom',
      offset: -5,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        formatter: function (value, index) {
          return '{' + index + '| }\n{b|' + value + '}';
        },
        rich: {
          ...Array.from({ length: 15 }, () => ({
            backgroundColor: {
              image: weather[mock.Random.integer(0, 3)],
            },
            height: 16,
          })),
          b: {
            fontSize: 11,
            lineHeight: 30,
            height: 20,
          },
        },
      },
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 19,
      },
      data: Array.from(
        { length: 15 },
        () => ['小雨', '阴', '多云', '小雨', '晴', '雨夹雪'][mock.Random.integer(0, 5)]
      ),
    },
  ],
  yAxis: [
    {
      type: 'value',
      boundaryGap: true,
      show: false,
      scale: true,
    },
  ],
  series: [
    {
      name: '最高气温',
      type: 'line',
      emphasis: {
        focus: 'series',
      },
      lineStyle: {
        color: '#FF8A15',
      },
      itemStyle: {
        color: '#FF8A15',
      },
      data: Array.from({ length: 24 }, () => `${mock.Random.integer(18, 29)}`),
    },
    {
      name: '最低气温',
      type: 'line',
      emphasis: {
        focus: 'series',
      },
      lineStyle: {
        color: '#0091FF',
      },
      itemStyle: {
        color: '#0091FF',
      },
      data: Array.from({ length: 24 }, () => mock.Random.float(9, 17)),
    },
  ],
};

export const HELLO_WORD = {
  title: {
    text: '自定义主题 JS版',
  },
  xAxis: {
    // x轴
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {
    // y轴
  },
  series: {
    // 图表类型
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20],
  },
};

export const ECHARTS_PLUGIN = {
  xAxis: {
    // x轴
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {
    // y轴
  },
  toolbox: {
    // 工具箱 官方文档：http://echarts.apache.org/zh/option.html#toolbox
    feature: {
      // 按钮的位置和配置参数的排序有关
      restore: {}, // 刷新按钮
      dataZoom: {
        // 缩放按钮
        yAxisIndex: false, // 不选取y轴的坐标（就是全选y轴）
      },
      saveAsImage: {}, // 保存为图片的按钮
    },
  },
  series: {
    // 图表类型
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20],
  },
};

export const ECHARTS_LOCATION_TITLE: echarts.EChartsOption = {
  title: {
    text: 'echarts标题', //标题文字
    link: 'https://www.baidu.com', //标题链接
    target: 'self', // 链接跳转方式,默认blank(打开新tab页)
    show: true, //标题是否显示
    subtext: '副标题',
    sublink: 'https://www.baidu.com', // 副标题链接
    // subtarget
    itemGap: 40, //正副标题的间距
    textStyle: {
      // 标题字体样式
      color: 'red',
      backgroundColor: '#00ff00',
    },
  },
  grid: {
    // 定位的代码
    top: 100,
    right: 200,
    bottom: 100,
    left: '10%',
  },
  xAxis: {
    // x轴
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {
    // y轴
  },
  series: {
    // 图表类型
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20],
  },
};

export const ECHARTS_xAxis: echarts.EChartsOption = {
  grid: {
    left: 10,
    right: 10,
    bottom: 50,
    top: 50,
  },
  xAxis: [
    {
      type: 'category', //轴线类型
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun1'],
      position: 'bottom', //data相等轴线的位置,bottom在轴线下方
      name: 'x轴基本配置练习',
      nameLocation: 'center',
      nameTextStyle: {
        color: 'red',
      },
      nameGap: -5, //坐标轴名称与轴线之间的距离
      nameRotate: 45,
    },
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun66'],
      position: 'bottom',
      offset: -100,
      name: '轴线配置练习',
      nameLocation: 'center',
      axisLine: {
        // show: false,
        symbol: 'arrow', //坐标轴箭头
        lineStyle: {
          //轴线样式
          color: 'pink',
        },
      },
      axisTick: {
        // 刻度相关
        lineStyle: {
          color: 'blue',
        },
      },
    },
    {
      type: 'category',
      data: Array.from(
        { length: 15 },
        () => ['小雨', '阴', '多云', '小雨', '晴', '雨夹雪'][mock.Random.integer(0, 5)]
      ),
      name: '标签相关设置',
      nameLocation: 'center',
      position: 'top',
      nameGap: -20,
      offset: -200,
      axisLabel: {
        interval: 0,
        formatter: function (value, index) {
          return '{' + index + '| }';
        },
        rich: {
          ...Array.from({ length: 15 }, () => ({
            backgroundColor: {
              image: weather[mock.Random.integer(0, 3)],
            },
            height: 16,
          })),
          b: {
            fontSize: 11,
            lineHeight: 30,
            height: 20,
          },
        },
      },
    },
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun3'],
      position: 'bottom',
      offset: -300,
    },
    {
      type: 'category',
      data: Array.from({ length: 15 }, () => mock.mock('@ctitle')),
      position: 'bottom',
      offset: -400,
      axisLabel: {
        rotate: 80,
      },
    },
  ],
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [],
};

export const ECHARTS_yAxis: echarts.EChartsOption = {
  grid: {
    top: 100,
  },
  title: {
    text: '业务受理趋势',
    // subtext: 'Fake Data'
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['收件总数', '办结总数', '办结率'],
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '你好',
    },
    {
      type: 'value',
      name: '增长率(%)',
      nameTextStyle: {
        color: '#999999',
      },
      splitLine: { show: false }, //去除网格线
      axisLine: { show: false }, //轴线
      axisTick: { show: false }, //刻度
      axisLabel: {
        margin: 2,
        interval: 10,
        color: '#999999',
      },
    },
  ],
  series: [
    {
      name: '办结总数',
      type: 'bar',
      data: [2, 5, 9, 26, 28, 70, 175, 182, 48, 18, 6, 2],
      markPoint: {
        data: [
          // 图钉
          { name: 'Max', value: 182, xAxis: 7, yAxis: 183 },
        ],
      },
      markLine: {},
      label: {
        show: false,
      },
    },
    {
      name: '办结率',
      type: 'line',
      color: ['red', 'pink'], //折线条的颜色
      smooth: true,
      yAxisIndex: 1, //使用的y轴下标
      itemStyle: {
        hadowBlur: 2,
      },
      data: [31, 62, 89, 40, 20, 30, 40, 25, 26, 25, 25, 25],
    },
  ],
};

export const ECHARTS_Series: echarts.EChartsOption = {
  tooltip: {},
  yAxis: {
    type: 'value',
    scale: true,
  },
  xAxis: {
    type: 'category',
    data: Array.from({ length: 12 }, (_, i) => `${i + 1}月`),
  },
  series: [
    {
      type: 'line',
      name: '小白语文月考成绩',
      data: Array.from({ length: 12 }, () => mock.Random.integer(80, 150)),
    },
    {
      type: 'bar',
      name: '小黄语文月考成绩',
      data: Array.from({ length: 12 }, () => mock.Random.integer(80, 150)),
      barWidth: 12, //柱宽度
      itemStyle: {
        borderRadius: [10, 10, 10, 10], //柱圆角
      },
      color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        { offset: 0, color: 'pink' },
        { offset: 1, color: 'transparent' },
      ]), //柱渐变
    },
    {
      type: 'pie',
      name: '小蓝语文月考成绩',
      data: Array.from({ length: 12 }, () => ({
        value: mock.Random.integer(80, 150),
      })),
      itemStyle: {
        normal: {
          color: function () {
            return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              {
                offset: 0,
                color: mock.mock('@color'),
              },
              {
                offset: 1,
                color: mock.mock('@color'),
              },
            ]);
          },
        },
      },
    },
  ],
};

export const Echarts_HorizontalBar: echarts.EChartsOption = {
  tooltip: {},
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: Array.from({ length: 7 }, (_, i) => `周${i}`),
  },
  series: {
    type: 'bar',
    data: Array.from({ length: 7 }, (_, i) => mock.Random.integer(5, 10)),
    itemStyle: {
      color: 'red',
    },
  },
};
