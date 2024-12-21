<template>
  <div ref="chartContainer" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts';
import strikes from "../assets/strikes.svg";

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
    formatter: (value) => `{value|${value}}{image|}`,
    rich: {
      value: {
        fontSize: 12,
        color: '#333',
      },
      image: {
        width: 14,
        height: 14,
        backgroundColor: '#fff',  
        align: 'center',
        padding: [0, 0, 0, 5],
        imageUrl: strikes, 
      },
    },
  },
},
yAxis: {
  type: 'value',
  axisLabel: {
    formatter: (value) => `{image|}${value}`, // This should display the image before the value
    rich: {
      image: {
        width: 14,
        height: 14,
        imageUrl: strikes,  // Ensure this is correct
        align: 'center',
        padding: [0, 0, 0, 5],
      },
    },
  },
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
              symbolSize: 6,
              itemStyle: {
                color: '#8D7EFD',
              },
              data: [30, 150, 60, 100, 70, 250, 120, 110, 50, 80, 105, 75].map((value, index) => ({
                coord: [index, value],
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
              symbolSize: 6,
              itemStyle: {
                color: '#00F2B2',
              },
              data: [130, 140, 110, 150, 100, 30, 220, 50, 60, 90, 115, 85].map((value, index) => ({
                coord: [index, value],
              })),
            },
          },
        ],
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicOut',
        animationDelay: (index) => index * 100,
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