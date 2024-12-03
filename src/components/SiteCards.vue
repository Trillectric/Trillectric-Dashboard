<template>
    <div class="card-container">
      <div class="card">
        <h3 class="card-heading">Production</h3>
        <div class="card-content">
          <div class="content-row">
            <div class="dot"></div>
            <img src="../assets/electric.svg" alt="" />
            <p class="text">To Grid</p>
          </div>
          <div class="content-row">
            <div class="dot"></div>
            <img src="../assets/book.svg" alt="" />
            <p class="text">To Load</p>
          </div>
        </div>
      </div>
      <div class="card">
        <h3 class="card-heading">Consumption</h3>
        <div class="card-content">
          <div class="content-row">
            <div class="dot"></div>
            <img src="../assets/electric.svg" alt="" />
            <p class="text">From Grid</p>
          </div>
          <div class="content-row">
            <div class="dot"></div>
            <img src="../assets/solarpower.svg" alt="" />
            <p class="text">From Solar</p>
          </div>
        </div>
      </div>
      <AreaChart/>
    </div>
  </template>
  
  <script>
  import AreaChart from './AreaChart.vue'
  export default {
    name: "SiteCards",
  };
  </script>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  <style scoped>
  .card-container {
    display: flex;
    gap: 20px;
  }
  
  .card {
    background-color: #f8f8f8;
    padding: 20px; 
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
  
  .card-heading {
    font-size: 12px;
    font-weight: 600;
    color: #000;
    font-family: "Montserrat", serif;

    margin: 0;
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
  }
  
  .content-row {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    background-color: #453a94;
    border-radius: 50%;
  }
  
  .icon {
    font-size: 20px;
    color: #453a94;
  }
  
  .text {
    font-size: 12px;
    color: #000;
    margin: 5px;
    font-family: "Montserrat", serif;

  }
  
  .card i {
    font-family: "Font Awesome 5 Free", sans-serif;
  }
  </style>
  