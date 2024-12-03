<template>
    <div class="solar_container">
      <div class="solar_eft">
        <p class="solar_text-top">Solar Panel System </p>
        <p class="solar_text-bottom">Updated 48 mins ago</p>
      </div>
  
      <div class="solar_right">
        <button class="solar_action-button">
          <p class="solar_button-text">Filter</p>
          <div class="solar_icons">
            <i class="solar_icon dropdown-icon"> <img src="../assets/filter.svg" alt=""></i>
            <i class="solar_icon filter-icon"><img src="../assets/drop.svg" alt=""></i>
          </div>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SolarPsystem',
  };
  </script>
  
  <style>
  .solar_container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    background: #fff;
  }
  
  .solar_left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }
  
  .solar_text-top {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
  }
  
  .solar_text-bottom {
    font-size: 14px;
    font-weight: 400;
    color: #aaaaaa;
  }
  
  .solar_right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .solar_action-button {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    background-color: transparent;
    color: white;
    padding: 3px 7px;
    border: 0.5px solid #656565;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    gap: 15px; 
  }
  
  .solar_image {
    width: 40px; 
    height: 40px;
    object-fit: cover;
  }
  
  .solar_button-text {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    color: #656565;
  }
  
  .solar_icons {
    display: flex;
    flex-direction: row; 
    gap: 10px; 
  }
  
  .solar_icon {
    font-size: 20px;
    cursor: pointer;
  }
  
  .solar_filter-icon {
    color: #4CAF50; 
  }
  
  .solar_dropdown-icon {
    color: #FFA500; 
  }
  </style>
  