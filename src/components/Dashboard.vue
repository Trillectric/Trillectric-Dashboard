<template>
  <div :class="['dashboard', { 'dashboard-expanded': sidebarOpen }]">
      <DashButton />
      <ConsumptionUnits />
      <SolarPsystem />
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
  .dashboard {
    transition: margin-left 0.3s ease;
    margin-left: 100px; 
    width:65%;
  }
  
  .dashboard-expanded {
    margin-left: 220px; 
  }
  </style>
  