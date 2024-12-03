<template>
  <div id="app">
    <Sidebar @toggle-sidebar="updateSidebar" :sidebar-open="sidebarOpen" />
    <router-view :sidebar-open="sidebarOpen" />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue';


export default {
  components: { Sidebar },
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    updateSidebar(isOpen) {
      this.sidebarOpen = isOpen;
    },
  },
};
</script>
