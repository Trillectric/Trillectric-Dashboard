<template>
    <div ref="chartContainer" class="chart-container" />
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'EnergyProducedGraph',
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        const chart = echarts.init(this.$refs.chartContainer);
  
        const option = {
          tooltip: {
            trigger: 'axis',
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisLabel: {
              formatter: (value) => {
                return `{value|${value}}{image|}`; // Use rich text
              },
              rich: {
                value: {
                  fontSize: 12,
                  color: '#333',
                },
                image: {
                  width: 14,
                  height: 14,
                  backgroundImage: 'url(../assets/strikes.svg)',  
                  align: 'center',
                  padding: [0, 0, 0, 5],  
                },
              },
            },
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: 'Energy Consumption',
              type: 'line',
              data: [30, 150, 60, 100, 70, 250, 120, 110, 50, 80, 105, 75],
              lineStyle: {
                type: 'dashed',
                color: '#8D7EFD',
              },
              symbol: 'circle',
              symbolSize: 14,
              itemStyle: {
                color: '#453A94',
              },
              markPoint: {
                symbol: 'circle',
                symbolSize: 15,
                itemStyle: {},
                data: [30, 150, 60, 100, 70, 250, 120, 110, 50, 80, 105, 75].map((value, index) => ({
                  coord: [index, value],
                  symbol: 'circle',
                  symbolSize: 6,
                  itemStyle: {
                    color: '#8D7EFD',
                  },
                })),
              },
            },
            {
              name: 'Energy Production',
              type: 'line',
              data: [130, 140, 110, 150, 100, 30, 220, 50, 60, 90, 115, 85],
              lineStyle: {
                type: 'dashed',
                color: '#00F2B2',
              },
              symbol: 'circle',
              symbolSize: 14,
              itemStyle: {
                color: '#06BF8E',
              },
              markPoint: {
                symbol: 'circle',
                symbolSize: 15,
                itemStyle: {
                  color: '#00F2B2',
                },
                data: [130, 140, 110, 150, 100, 30, 220, 50, 60, 90, 115, 85].map((value, index) => ({
                  coord: [index, value],
                  symbol: 'circle',
                  symbolSize: 6,
                  itemStyle: {
                    color: '#00F2B2',
                  },
                })),
              },
            },
          ],
        };
  
        chart.setOption(option);
      },
    },
  };
  </script>
  
  <style scoped>
  .chart-container {
    background-color: #fff;
    width: 100%;
    height: 400px;
  }
  </style>
  