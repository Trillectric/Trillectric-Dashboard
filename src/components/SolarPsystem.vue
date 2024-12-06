<template>
  <div class="solar_container">
    <div class="solar_left">
      <p class="solar_text-top">Energy Produced</p>
      <p class="solar_text-bottom">Updated 48 mins ago</p>
    </div>

    <div class="solar_center">
      <div class="solar_dot">
        <div class="dot_first">
          <div class="dot_inner"></div>
        </div>
        <p class="dot-text">Energy Produced</p>
      </div>
      <div class="solar_dot">
        <div class="dot_second">
          <div class="dot_inner"></div>
        </div>
        <p class="dot-text">Energy Consumption</p>
      </div>
    </div>

    <div class="solar_right">
      <button class="solar_action-button solar_button-left">
        <div class="solar_icons">
          <i class="solar_icon dropdown-icon">
            <img src="../assets/strikes.svg" alt="" />
          </i>
        </div>
        <p class="solar_button-text">300kWh</p>
      </button>
      <button class="solar_action-button solar_button-right" @click="toggleDropdown">
        <p class="solar_button-text">{{ selectedOption }}</p> 
        <div class="solar_icons">
          <i class="filter-icon">
            <img src="../assets/dropw.svg" alt="" />
          </i>
        </div>
        <div v-if="isDropdownVisible" class="dropdown-menu">
          <p class="dropdown-option" @click="selectOption('Monthly')">Monthly</p>
          <p class="dropdown-option" @click="selectOption('Yearly')">Yearly</p>
          <p class="dropdown-option" @click="selectOption('7 Days')">7 Days</p>
        </div>
      </button>
    </div>
  </div>
  <EnergyProducedGraph/>

</template>

<script>
import EnergyProducedGraph from './EnergyProducedGraph.vue';
export default {
  name: 'SolarPsystem',
  
  data() {
    return {
      isDropdownVisible: false,
      selectedOption: 'Monthly', 
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    selectOption(option) {
      this.selectedOption = option; 
      this.isDropdownVisible = false; 
    }
  },
  components: {
     EnergyProducedGraph
  }
};
</script>

<style scoped>
.solar_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background: #fff;
}

.solar_left {
  display: flex;
  flex-direction: column;
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

.solar_center {
  display: flex;
  gap: 20px;
  align-items: center;
}

.solar_dot {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot_first {
  width: 20px;
  height: 20px;
  background-color: #06BF8E;
  border-radius: 50%;
  position: relative;
}

.dot_first .dot_inner {
  width: 8px;
  height: 8px;
  background-color: #00F2B2;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dot_second {
  width: 20px;
  height: 20px;
  background-color: #453A94;
  border-radius: 50%;
  position: relative;
}

.dot_second .dot_inner {
  width: 8px;
  height: 8px;
  background-color: #8D7EFD;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dot-text {
  font-size: 12px;
  color: #000;
  font-weight: 500;
}

.solar_right {
  display: flex;
  gap: 20px;
  align-items: center;
}

.solar_action-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 3px 20px 5px 8px; 
  font-size: 12px;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  outline: none;
}

.solar_button-left {
  background-color: #13B78C;
  color: white;
}

.solar_button-right {
  background-color: #453A94; 
  color: white;
  gap:20px;
  padding: 3px 20px 5px 20px;
}

.solar_icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.solar_icon {
  font-size: 16px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  background-color: #FFB92B;
}

.solar_filter-icon {
  color: #4CAF50;
}

.solar_dropdown-icon {
  color: #FFA500;
}
.dropdown-menu {
  position: absolute;
  bottom:22%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.dropdown-option {
  padding: 0px 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

.dropdown-option:hover {
color:#453A94;
font-weight: 600;
}
</style>
