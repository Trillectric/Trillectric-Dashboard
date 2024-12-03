<template>
  <div id="chart">
    <apexchart type="area" :height="chartHeight" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
  name: 'PerformanceGraph',
  components: {
    apexchart: VueApexCharts
  },
  setup() {
    const series = ref([
      {
        name: 'series1',
        data: [31, 70, 28, 51, 42, 109, 100]
      },
     
    ]);

    const chartHeight = ref(100); 

    const chartOptions = ref({
      chart: {
        height: chartHeight.value, 
        type: 'area',
        toolbar: {
          show: false 
        }
      },
      dataLabels: {
        enabled: false 
      },
      stroke: {
        curve: 'smooth'
      },
      colors: ['#8D7EFD'], 
      legend: {
        show: false 
      },
      xaxis: {
        type: 'datetime',
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ],
        labels: {
          show: true, 
          style: {
            colors: '#000' 
          }
        }
      },
      yaxis: {
        labels: {
          show: true, 
          style: {
            colors: '#000' 
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
        y: {
          formatter: (val) => val.toFixed(0) 
        }
      },
    });

    return {
      series,
      chartOptions,
      chartHeight 
    };
  }
});
</script>

<style scoped>
</style>
