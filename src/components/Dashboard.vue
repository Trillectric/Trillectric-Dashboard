<template>
  <div :class="['dashboard', { 'dashboard-expanded': sidebarOpen }]">
    <template v-if="!selectedRow">
<Profile/>
      <DashButton />
      <SystemOverview />
      <ConsumptionUnits />
      <SolarPsystem />
      <SearchDropdown />
      <Table @row-click="handleRowClick" />
    </template>
  </div>
</template>

  
  <script>
  import Profile from '../components/Profile/Profile.vue'
  import DashButton from '../components/Dashbutton.vue';
  import SystemOverview from '../components/SystemOverview.vue'
  import ConsumptionUnits from './ConsumptionUnits.vue';
  import SolarPsystem from './SolarPsystem.vue';
  import SearchDropdown from './SearchDropdown.vue';
  import Table from './Table.vue'
  
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
      Profile,
      DashButton,
      SystemOverview,
      ConsumptionUnits,
      SolarPsystem,
      SearchDropdown,
      Table,
      // DynamicComponent
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    transition: margin-left 0.3s ease;
    margin-left: 100px; 
  }
  
  .dashboard-expanded {
    margin-left: 220px; 
  }
  </style>
  