<template>
    <div class="dash_container">
      <div class="text-left">
        <p>Overview</p>
      </div>
      <div class="button-right">
        <button>
          <img src="../assets/plus.svg" alt="Icon" />
          Create Site
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DashButton",
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  
  .dash_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 75px 20px 0px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    position: relative;

  }
  
  .dash_container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20px; 
    right: 20px; 
    height: 1px;
    background-color: #e4dfdf; 
  }
  
  .dash_container .text-left {
    flex: 1;
    font-size: 16px;
    color: #453A94;
  }
  
  .dash_container .button-right button {
    display: flex;
    align-items: center;
    padding: 5px 12px;
    background-color: #453A94;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    font-family: "Montserrat", serif;
    transition: background-color 0.3s ease;
  }
  
  .dash_container .button-right button img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  
  .dash_container .button-right button:hover {
    background-color: #391084;
  }
  </style>
  