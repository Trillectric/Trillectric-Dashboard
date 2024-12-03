<template>
  <DateWrapper/>
    <div class="card-container">
        <div class="card grey-background">
  <h3 class="card-heading">Production</h3>
  <div class="content">
    <div class="text-container">
      <div class="left-text">
        <p>140.33 <br> <span>kwh</span></p>
      </div>
      <div class="right-elements-container">
        <div class="right-elements">
          <div class="dot">•</div>
          <div class="icon">
            <img src="../assets/book.svg" alt="">
          </div>
          <div class="text">77.73 kWh</div>
        </div>
        <div class="right-elements">
          <div class="dot blue">•</div>
          <div class="icon">
            <img src="../assets/electric.svg" alt="">
          </div>
          <div class="text">77.73 kWh</div>
        </div>
      </div>
    </div>
    <!-- Add progress bar here -->
    <div class="progress-bar">
      <div class="progress-segment green" style="width: 60%;"></div>
      <div class="progress-segment blue" style="width: 40%;"></div>
    </div>
  </div>
</div>

  
<div class="card grey-background">
  <h3 class="card-heading">Production</h3>
  <div class="content">
    <div class="text-container">
      <div class="left-text">
        <p>140.33 <br> <span>kwh</span></p>
      </div>
      <div class="right-elements-container">
        <div class="right-elements">
          <div class="dot first">•</div>
          <div class="icon">
            <img src="../assets/solarpower.svg" alt="">
          </div>
          <div class="text">77.73 kWh</div>
        </div>
        <div class="right-elements">
          <div class="dot blue second">•</div>
          <div class="icon">
            <img src="../assets/electric.svg" alt="">
          </div>
          <div class="text">77.73 kWh</div>
        </div>
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress-segment firstp" style="width: 60%;"></div>
      <div class="progress-segment secondp" style="width: 40%;"></div>
    </div>
  </div>
</div>
<div class="card purple-background">
  <h3 class="card-heading performance">Performance</h3>
  <p class="main-value">140.33</p>
  <p class="subtext">Specific Yield (kWh/kWp)</p>
</div>

    </div>
  </template>
  
  <script>
  import DateWrapper from './DateWrapper.vue'
  export default {
    components: {
      DateWrapper
  },
    name: 'CardRowComponent',
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  .card-container {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-top: 20px;
    padding: 20px;
  }
  
  .card {
    width: 30%;
    height: auto; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px;
    border-radius: 14px;
    color: black;
    text-align: left;
    background-color: #F3F1FF;
  }
  
  .card-heading {
    margin: 0;
    font-size: 14px;
    color: #453A94;
    font-family: "Montserrat", serif;
    margin-bottom: 5%;

  }
  .performance{
    color:#fff;
    font-family: "Montserrat", serif;

  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .text-container {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .left-text p {
  flex: 1;
  font-size: 28px;
  color: #333;
  font-family: "Montserrat", serif;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  margin: 0;
  font-weight: 600;

}

.left-text span {
  color: #A0A0A0;
  font-size: 11px;
  font-family: "Montserrat", serif;
}

.right-elements {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px; 
}

.dot {
  font-size: 20px;  
  color: #00F2B2;
}

.blue {
  font-size: 20px;
  color: #0B335B;
}
.first{
    color:#00A8BF;
}
.second{
    color:#9DBFFD;
}
.firstp{
    background-color: #00A8BF;

}
.secondp{
    background-color: #9DBFFD;
}
.icon img {
  width: 20px; 
  height: 20px; 
}

.text {
  font-size: 12px;
}

  
.purple-background {
  background: linear-gradient(to bottom, #120B41, #453A94);
  color: #fff;
  padding: 15px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  position: relative; 
}

.performance {
  position: absolute; 
  top: 10px;
  left: 15px;
  margin: 0;
}

.main-value {
  font-size: 28px;
  color: #fff;
  font-family: "Montserrat", serif;
  margin: 0;
  font-weight: 600;
}

.subtext {
  color: #fff;
  font-family: "Montserrat", serif;
  font-size: 12px; 
  margin: 5px 0 0 0; 
}



  
  p {
    font-size: 14px;
  }
.progress-bar {
  display: flex;
  height: 16px;
  width: 100%;
  background-color: #e0e0e0; 
  border-radius: 5px;
  overflow: hidden; 
  margin-top: 10px; 
}

.progress-segment {
  height: 100%;
}

.progress-segment.green {
  background-color: #00F2B2; 
}

.progress-segment.blue {
  background-color: #0B335B; 
}

  </style>
  