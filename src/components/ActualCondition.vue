<template>
    <div class="error-messages-container">
      <p class="condition">Actual Condition</p>
      <div class="error-messages" ref="scrollContainer">
        <div v-for="(error, index) in errorList" :key="index" class="error-card">
          <div class="error-header">
            <img src="../assets/errorc.svg" alt="Error" class="error-icon" />
            <p class="error-title">{{ error.title }}</p>
          </div>
          <p class="error-details">{{ error.details }}</p>
        </div>
      </div>
    </div>
    <div>
        <!-- <WorldMap/> -->

    </div>
  </template>
  
  <script>
// import WorldMap from './WorldMap.vue';
  export default {
    name: "ActualCondition",
    data() {
      return {
        errorList: [
          { title: "[D1] Sudden energy loss", details: "24% energy lost at 11:14 due to battery issues" },
          { title: "[D2] Voltage Drop", details: "15% voltage drop detected at 14:23, investigate grid stability" },
          { title: "[D3] Overheating Alert", details: "Temperature exceeded safe limits at 13:10" },
          { title: "[D3] Overheating Alert", details: "Temperature exceeded safe limits at 13:10" },

          { title: "[D3] Overheating Alert", details: "Temperature exceeded safe limits at 13:10" },

        ],
      };
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
  
  .error-messages-container {
    height: 50vh;
    overflow-y: auto;
    padding: 16px;
  }
  
  .error-messages-container::-webkit-scrollbar {
    width: 8px;
  }
  
  .error-messages-container::-webkit-scrollbar-thumb {
    background: #160D57; 
    border-radius: 4px;
  }
  
  .error-messages-container::-webkit-scrollbar-thumb:hover {
    background: #005f7f; 
  }
  
  .condition {
    font-size: 15px;
    font-weight: 600;
    font-family: "Montserrat", serif;
    padding: 5px;
    color: #fff;
    border-bottom: 0.5px solid #fff;
  }
  
  .error-messages {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .error-card {
    background-color: #0e0649;
    padding: 10px;
    border-radius: 7px;
    position: relative;
    overflow: hidden;
    padding-left: 12px;
  
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background: linear-gradient(to right, #00f2b2, #160e54);
      border-radius: 6px 0 0 6px;
    }
  }
  
  .error-header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .error-title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin: 4px 4px;
  }
  
  .error-details {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    margin: 4px 4px;
  }
  </style>
  