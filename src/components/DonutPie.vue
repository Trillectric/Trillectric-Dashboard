<template>
    <div id="chart">
      <apexchart
        type="donut"
        :width="chartWidth"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </template>
  
  <script>
  import VueApexCharts from "vue3-apexcharts";
  
  export default {
    name: "DonutPie",
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        series: [75, 25],  
        
        chartOptions: {
          chart: {
            type: "donut", 
            width: 90,
          },
          plotOptions: {
            pie: {
              donut: {
                size: "0%",  
              },
            },
          },
          labels: [],  
  
          legend: {
            show: false,
          },
          
          colors: ["#453A94", "#00F2B2"],  
          
          tooltip: {
            enabled: false, 
          },
          
          dataLabels: {
            enabled: false,  
          },
          
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
  
        chartWidth: 120,
      };
    },
    methods: {
      updateProgress(progressA, progressB) {
        this.series = [progressA, progressB];  
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  