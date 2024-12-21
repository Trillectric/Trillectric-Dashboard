<template>
  <div class="dash_condition">
  <div :class="['dashboard', { 'dashboard-expanded': sidebarOpen }]">
    <DashButton title="Reports" />
      <ConsumptionUnits />
      <SolarPsystem />
      
  </div>
</div>
</template>

  
  <script>
  import DashButton from '../components/Dashbutton.vue';
  import ConsumptionUnits from './ConsumptionUnits.vue';
  import SolarPsystem from './SolarPsystem.vue';
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
    width:93%;
  }
  
  .dashboard-expanded {
    margin-left: 220px; 
    width: 85%;
  }
  </style>
  