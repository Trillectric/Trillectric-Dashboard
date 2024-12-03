<template>
    <div class="search-input-container">
        <div class="search-wrapper">

      <span class="search-icon">
        <img src="../assets/search.svg" alt="search icon" />
      </span>
      <label for="location-dropdown">Location</label>

      <input
        id="search-box"
        type="text"
        v-model="searchQuery"
        placeholder="Search by Site Name or Note "
        class="search-box"
      />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'Search',
    data() {
      return {
        searchQuery: '',
      };
    },
  };
  </script>
  
  <style scoped>
  .search-input-container {

    position: relative;
  }
  
  .search-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .search-box {
    width: 325px;
    padding: 10px 10px 10px 30px;
    border: 1px solid #ccc;
    border-radius: 9px;
    font-size: 12px;
  }
  
  .search-icon {
    position: absolute;
    top: 68%;
    left: 10px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
  }
  </style>
  