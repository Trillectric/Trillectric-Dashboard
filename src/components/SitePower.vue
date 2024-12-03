<template>
    <div class="power_graph">
    <div class="site_power_graph">
    <div class="site_power">
      <div>
        <p>Site Power</p>
        <p> Last Updated 48 mins ago</p>
      </div>
  
      <div class="power_energy">
        <div class="slider"></div>
        <button class="button" @click="setActive('power')" :class="{ active: activeButton === 'power' }">Power</button>
        <button class="button" @click="setActive('energy')" :class="{ active: activeButton === 'energy' }">Energy</button>
      </div>
    </div>
    <SiteCards />
    <AreaChart/>
</div>
</div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import SiteCards from './SiteCards.vue';  
  import AreaChart from './AreaChart.vue';
  
  export default {
    components: {
      SiteCards,  
      AreaChart
    },
    setup() {
      const activeButton = ref('power');
      const setActive = (button) => {
        activeButton.value = button;
        const slider = document.querySelector('.power_energy .slider');
        const buttonWidth = document.querySelector('.power_energy .button').offsetWidth;
        if (button === 'power') {
          slider.style.transform = `translateX(0)`;
        } else {
          slider.style.transform = `translateX(${buttonWidth}px)`;
        }
      };
      return {
        activeButton,
        setActive,
      };
    },
  };
  </script>
  
  <style scoped>
  .power_graph{
    padding: 20px;
  }
.site_power_graph{
    background-color: #F9F9F9;
    padding: 20px;
    border-radius: 14px;

}
  .site_power {
    display: flex;
    justify-content: space-between;
    align-items: center;
  
}
  
    p:nth-of-type(1) {
      text-align: left;
      font-size: 14px;
      font-family: "Montserrat";
      color: #000000;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0;
    }
  
    p:nth-of-type(2) {
      text-align: left;
      font-size: 10px;
      font-family: "Montserrat";
      color: #AAAAAA;
      margin: 0;
    }
  
  
  .power_energy {
    position: relative;
    display: flex;
    align-items: center;
    height: 23px;
    border: 1px solid #453A94;
    border-radius: 20px;
    overflow: hidden;
    width: 150px;
  
    .slider {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background-color: #453A94;
      transition: transform 0.3s ease;
      border-radius: 20px;
    }
  
    .button {
      flex: 1;
      border: none;
      background: none;
      color: #000000;
      font-size: 10px;
      font-family: "Montserrat";
      font-weight: 700;
      cursor: pointer;
      z-index: 1;
      text-align: center;
      line-height: 23px;
      outline: none;
      &.active {
        color: #ffffff;
      }
    }
  }
  </style>
  