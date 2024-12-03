<template>
  <div class="main-container">
    <div class="search-box-container">
      <SearchBox />
    </div>

    <div class="dropdown-row">
      <Dropdown />
    </div>
  </div>
</template>

<script>
import SearchBox from '../components/Search.vue';
import Dropdown from '../components/Dropdowns.vue';

export default {
  name: 'SearchDropdown',
  components: {
    SearchBox,
    Dropdown,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
  padding: 20px;
  background: #fff;
}

.search-box-container {
  flex: 1 1 auto; 
min-width: 29%;
}

.dropdown-row {
  flex: 2 1 auto; 
  display: flex;
  justify-content: space-between;
  gap: 10px;
  min-width: 300px; 
}
</style>
