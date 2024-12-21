<template>
  <div class="dash_condition">
  <div :class="['dashboard', { 'dashboard-expanded': sidebarOpen }]">
    <DashButton title="Overview" />
      <ConsumptionUnits />
      <SolarPsystem />
      
  </div>
 <AlertsandMap/>
</div>
</template>

  
  <script>
  import DashButton from '../components/Dashbutton.vue';
  import ConsumptionUnits from './ConsumptionUnits.vue';
  import SolarPsystem from './SolarPsystem.vue';
import AlertsandMap from './AlertsandMap.vue';  
  export default {
    name: 'Dashboard',
    data() {
    return {
      sidebarOpen: false, 
    };
  },
  methods: {
    handleRowClick(row) {
      this.selectedRow = row; 
    },
 
  },
    props: {
      sidebarOpen: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      DashButton,
      ConsumptionUnits,
      SolarPsystem,
       AlertsandMap,
      
    },
  };
  </script>
  
  <style scoped>
  .dash_condition{
    display: flex;

  }
  .dashboard {
    transition: margin-left 0.3s ease;
    margin-left: 100px; 
    width:85%;
  }
  
  .dashboard-expanded {
    margin-left: 220px; 
  }
  </style>
  