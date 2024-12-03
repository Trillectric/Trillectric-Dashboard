<template>
    <div>
      <Bar
        ref="barChart"
        :id="'my-chart-id_two'"
        :options="chartOptions"
        :data="chartData"
        :height="200"
      />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [0.8, 1.2, 0.6, 1.5],
              backgroundColor: '#6EC5D6',
            },
            {
              label: 'Dataset 2',
              data: [1.0, 1.0, 0.8, 1.0],
              backgroundColor: '#019FE0',
            },
            {
              label: 'Dataset 3',
              data: [0.5, 0.9, 0.7, 1.1],
              backgroundColor: '#004B84',
            },
            {
              label: 'Dataset 4',
              data: [0.3, 0.6, 0.4, 0.8],
              backgroundColor: '#4D6591',
            },
          ],
        },
        chartOptions: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label(context) {
                  return context.raw + ' MWh';
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 2,
              ticks: {
                stepSize: 0.25,
                callback(value) {
                  return value + ' MWh';
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          barPercentage: 0.5,
          categoryPercentage: 0.8,
        },
      };
    },
    mounted() {
      this.adjustBarPercentage();
      window.addEventListener('resize', this.adjustBarPercentage);
    },
    methods: {
      adjustBarPercentage() {
        const chartInstance = this.$refs.barChart.$chart;
        if (window.innerWidth < 600) {
          this.chartOptions.scales.x.ticks.font.size = 8;
        } else {
          this.chartOptions.scales.x.ticks.font.size = 10;
        }
        chartInstance?.update(); 
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.adjustBarPercentage);
    },
  };
  </script>
  
  <style scoped>
  </style>
  