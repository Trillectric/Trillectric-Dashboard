<template>
    <div >
      <Bar
        id="bar-chart-id_one"
        v-if="loaded"
        :options="chartOptions"
        :data="chartData"
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
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun'], 
          datasets: [
            {
              label: 'Generation',
              data: [5, 10, 15, 20, 25,34], 
              backgroundColor: 'rgba(11, 51, 91, 0.8)',
              borderColor: 'rgba(11, 51, 91, 1)',
              borderWidth: 1,
              barThickness: 20, 

            },
          ],
        },
        chartOptions: {
          responsive: true,
          plugins: {
            legend: {
              display: false, 
              position: 'top',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 5,
                callback: (value) => `${value} kWh`,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        },
        loaded: false,
      };
    },
    mounted() {
      this.loaded = true; 
    },
  };
  </script>
  
  <style scoped>
  </style>
  