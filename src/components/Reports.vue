<template>
        <div :class="['dashboard', { 'dashboard-expanded': sidebarOpen }]">

    <h1>Reports</h1>
    </div>
</template>

<script>
export default {
  name: 'Report',
  props: {
      sidebarOpen: {
        type: Boolean,
        default: false,
      },
    },
};
</script>
<style>
.dashboard {
    transition: margin-left 0.3s ease;
    margin-left: 150px; 
  }
  
  .dashboard-expanded {
    margin-left: 200px; 
  }
  h1{
    margin: 0;
}
</style>