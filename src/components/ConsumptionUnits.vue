<template>
    <div class="dash_card_layout">
        <div class="left-card">
  <div class="content">
    <p class="top-text">Consumption <br>  Units</p>
    <p class="bottom-text">740.41 <span>KWh</span> </p>
  </div>
</div>  
      <div class="right-cards">
        <div class="top-cards">
          <div class="card top-card peak_power">
            <p>Peak Power</p>
            <p>773.79 KWh </p>

<div class="time_date">
    <img src="../assets/clock.svg" alt="">
    <p>5/13/2024</p>
</div>
          </div>
<div class="card top-card bar">
  <div class="top-card-content power">
    <p>Outage</p>
    <p>Power</p>
    <p>Power Cut</p>
  </div>
  <div class="progress-bar-container">
    <DonutPie/>
  </div>
</div>

        </div>
        <div class="card bottom-card">
    <div class="left-side">
      <div class="performance">
        <p class="performance-text">{{ performanceLabel }}</p>
        <div class="dropdown">
          <span class="dropdown-icon" @click="toggleDropdown">▼</span>
          <div v-if="isDropdownVisible" class="dropdown-menu">
            <ul>
              <li @click="updatePerformanceLabel('yesterday')">Yesterday</li>
              <li @click="updatePerformanceLabel('today')">Today</li>
              <li @click="updatePerformanceLabel('tomorrow')">Tomorrow</li>
            </ul>
          </div>
        </div>
      </div>

      <p class="additional-text">1.65 MWh</p>
      <p class="additional-text">Energy Produced</p>
    </div>

    <div class="right-side">
      <PerformanceGraph/>
    </div>
  </div>


      </div>
    </div>
  </template>
  
  <script>
  import DonutPie from '../components/DonutPie.vue';
  import PerformanceGraph from '../components/PerformanceGraph.vue';
  
  export default {
    name: 'ConsumptionUnits',
    components: {
      DonutPie,
      PerformanceGraph
    },
    data() {
      return {
        selectedDate: 'today', 
        performanceLabel: 'Performance Today', 
        isDropdownVisible: false, 
        series: [70, 30], 
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;  
      },
      updatePerformanceLabel(selectedOption) {
        this.selectedDate = selectedOption;
        if (selectedOption === 'yesterday') {
          this.performanceLabel = 'Performance Yesterday';
        } else if (selectedOption === 'today') {
          this.performanceLabel = 'Performance Today';
        } else if (selectedOption === 'tomorrow') {
          this.performanceLabel = 'Performance Tomorrow';
        }
  
        this.isDropdownVisible = false;  
        this.updateChartData();  
      },
      updateChartData() {
        if (this.selectedDate === 'yesterday') {
          this.series = [50, 50]; 
        } else if (this.selectedDate === 'today') {
          this.series = [70, 30]; 
        } else if (this.selectedDate === 'tomorrow') {
          this.series = [40, 60]; 
        }
      }
    }
  };
  </script>
  
  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  .dash_card_layout {
    display: flex;
    gap: 20px;
    align-items: stretch; 
    padding: 20px;
    background: #fff;
  }
  
  .left-card {
    background: linear-gradient(to bottom, #120B41, #453A94);
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 22px 80px 0px 30px;
  display: flex;
  align-items: flex-start; 
  justify-content: flex-start; 

  
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px; 
  }

  .top-text {
    font-size: 23px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    font-family: "Montserrat", serif;
    margin:20px 0px 10px 0px;

  }

  .bottom-text {
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    font-family: "Montserrat", serif;
    margin: 0;

  }
  span{
    font-size: 19px;
    font-weight: 500;
    color: #fff;
    font-family: "Montserrat", serif;
  }
}

  
  .right-cards {
    flex: 2; 
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .top-cards {
    display: flex;
    gap: 15px;
    flex: 1; 
  }
  
  .top-card {
    flex: 1; 
    background-color: #F5F4FF;
    padding: 20px;
    border-radius: 8px;
    padding-bottom: 0;
  }
  .top-card p{
    margin: 0;
  }
  .peak_power{
    display: flex;
    flex-direction: column;
  }
.bar{
    display: flex;
    justify-content: space-between;
}
  .peak_power p:nth-of-type(1) {
  font-size: 18px ;
  font-weight: 700;
  font-family: "Montserrat", serif;
  color: #000000;
  margin-bottom: 2%;
}

.peak_power p:nth-of-type(2) {
  font-size: 13px;
  font-weight: 600;
  font-family: "Montserrat", serif;
  color: #000000;

}
.power p:nth-of-type(1) {
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat", serif;
  color: #000000;
  margin-bottom: 2%;
}

.power p:nth-of-type(2) {
  font-size: 13px;
  font-weight: 400;
  font-family: "Montserrat", serif;
  color: #000000;
}
.power p:nth-of-type(3) {
  font-size: 13px;
  font-weight: 400;
  font-family: "Montserrat", serif;
  color: #000000;
}

.power p:nth-of-type(2)::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #453A94; 
  display: inline-block;
  margin-right: 10px; 
}

.power p:nth-of-type(3)::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #00F2B2; 
  display: inline-block;
  margin-right: 10px; 
}


  .time_date{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 2%;

  }
  .time_date p{
    font-size: 12px !important;
    font-weight: 400 !important;
    margin-bottom: 0% !important;

  }
  .top-card .top-card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
} 
.bottom-card {
  background-color: #F5F4FF;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.left-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.performance {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;  
}

.performance-text {
  font-size: 18px;
  font-weight: 700;
  color:#000000;
  margin: 0;
  font-family: "Montserrat", serif;

}

.additional-text {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.right-side {
  flex: 1;

}

.dropdown {
  position: relative;  
}

.dropdown-icon {
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;  
}

.dropdown-menu {
  position: absolute;
  top: 2px;  
  left: 10px;
  border-radius: 5px;
  width: 100%;
  z-index: 10;
  display: block;  
}

.dropdown-menu ul {
  padding: 10px;
  margin: 0;
  list-style-type: none;
}

.dropdown-menu li {
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
}
.dropdown-menu li:hover {
    color: #453A94;
    font-size: 13px;
}
</style>


  
  