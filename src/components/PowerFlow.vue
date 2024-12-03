<template>

    <div class="power_flow_container">
      <div class="power_flow_head">
        <h2>Power Flow</h2>
        <div class="green_power_dot">
          <p>Live</p>
        </div>
      </div>
    
      <div class="circle-container">
        <div class="circle">
          <img src="../assets/cloud-s.svg" alt="Circular Image" class="circle-image" />
        </div>
        <p class="circle-description">33°C</p>
      </div>
    
      <div class="power-column-container">
      
        <div class="solar_column">
          <img src="../assets/pwer-solar.svg" alt="">
          <div class="power_text_first">3.87 kW</div>
    
        </div>
    
        <div class="circle-second-column"> 
          <div class="direction">
            <img src="../assets/green-s.svg" alt="">
          </div> 
          <div class="direction_two">
            <img src="../assets/orange.svg" alt="">
          </div> 
          <div class="direction_three">
            <img src="../assets/purple-s.svg" alt="">
          </div>
          <div class="column circle-stack">
          <div class="outer-circle">
            <div class="middle-circle">
              <div class="inner-circle">
                <img src="../assets/home-s.svg" alt="Inner Circle Image" class="circle-image" />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="power_third-column">
      <div class="power_text">3.87 kW</div>
      <div class="power_text">3.87 kW</div>
      <div class="power_text">3.87 kW</div>
    </div>
    
        <div class="power_fourth-column">
          <div class="solar_column-first">
          <img src="../assets/car.svg" alt="">
        </div> 
        <div class="solar_column-fourth">
          <img src="../assets/book-s.svg" alt="">
        </div>
        <div class="solar_column-fourth">
          <img src="../assets/tower-s.svg" alt="">
        </div>    </div>
      </div>
    
    </div>
        </template>
    
    
    <style scoped>
    .power_flow_container {
      background: linear-gradient(to right, #050011, #120B41);
      border-radius: 15px;
      padding: 0px 0px 12px 0px;
    }
    
    .power_flow_head {
      display: flex;
      justify-content: space-between;
      padding: 20px;
    
      h2 {
        font-size: 18px;
        font-family: "Montserrat";
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
    
    .green_power_dot {
      display: flex;
      align-items: center;
    
      p {
        margin: 0;
        font-size: 12px;
        font-family: "Montserrat";
        color: #fff;
      }
    
      &::before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        background-color: #00F2B2;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
    
    .circle-container {
      display: flex;
      align-items: center;
      margin-left: 15px;
    
      .circle {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #453A94;
    
        img {
          height: 20px;
          width: 20px;
        }
      }
    
      .circle-description {
        margin: 0 10px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
      }
    }
    
    .power-column-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-radius: 5px;
      height: 150px;
      @media screen and (width: 600px) and (height: 1024px) {
          width:70%;
    
        }
    
      .column {
        color: #fff;
        text-align: center;
      }
    
      .solar_column {
        background: linear-gradient(to bottom, #0578FF, #48B4F1);
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
      
        margin: 0 auto; 
        align-self: center; 
        position:relative;
      }
    
    
      .solar_column::after {
      content: '';
      content: "";
        position: absolute;
        width: 33px;
        left: 40px;
        height: 2px;
        background: repeating-linear-gradient(to right, #00F2B2, #00F2B2 5px, transparent 5px, transparent 10px);
        animation: glow-dash-21e921b0 3s linear infinite;
    }
    
    @keyframes glow-dash {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 20px 0; 
      }
    }
    
    }
    .circle-second-column{
      display: flex;
      padding:0px 3px;
      position: relative;
      z-index: 2;
    }
    
    .direction{
      position:absolute;
      top:9px;
      left:82%;
      z-index: -1;
    
      @media screen and (width: 384px) and (height: 640px) {
        left:78%;
      }
    
        @media screen and (width: 360px) and (height: 740px) {
    left:74%;
      }
      
    
    }
    .direction_two{
      position:absolute;
      top:37%;
      left:88%;
      z-index: -1;
      @media screen and (width: 384px) and (height: 640px) {
        left:82%;
    
      }
      @media screen and (width: 360px) and (height: 740px) {
    left:80%;
      }
    }
    .direction_three{
      position:absolute;
      top: 57%;
      left:80%;
      z-index: -1;
    
      @media screen and (width: 384px) and (height: 640px) {
        left:77%;
    
      }
      @media screen and (width: 360px) and (height: 740px) {
    left:72%;
      }
    }
    
    .circle-stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
    
      .outer-circle, .middle-circle, .inner-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
       .outer-circle {
      width: 95px;
      height: 95px;
      background: radial-gradient(circle, #5949CE, #140779);
       display: flex;
      align-items: center;
      justify-content: center;
     }
    
    
    .outer-circle {
      width: 95px;
      height: 95px;
      background: radial-gradient(circle, #5949CE, #140779);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%; 
      box-shadow: 0 0 15px 10px rgba(89, 73, 206, 0.6); 
      animation: glowing 1.2s infinite alternate;
    }
    
    @keyframes glowing {
      0% {
        box-shadow: 0 0 15px 10px rgba(89, 73, 206, 0.6) ;  }
      100% {
        box-shadow: 0 0 25px 15px rgba(89, 73, 206, 1);
      }
    }
    
    
    
    .middle-circle {
      width: 67px;
      height: 67px;
      background-color: #5247A5;
      box-shadow: 0 0 15px 5px rgb(81 76 123 / 60%);
        display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .inner-circle {
      width: 41px;
      height: 41px;
      background: linear-gradient(to right, #A498FF, #725FFC);
    }
    
    
       .circle-image {
       width: 30px;
        height: 30px;
     }
    
      .power_third-column {
      display: grid;
      grid-template-rows: repeat(3, auto);
      gap: 20px;
      padding: 5px;
      z-index: 2;
    }
    
    .power_text {
      background-color: #453A94;
      font-size: 12px;
      color: #fff;
      text-align: center;
    height: 20px;
    width: 62px;
      border-radius: 5px;
      display:flex;
      justify-content: center;
      align-items:center;
    }
    .power_third-column :nth-child(1){
      background-color:#00C591;
    }
    .power_third-column :nth-child(2){
      background-color:#FF8C06;
    }
    .power_third-column :nth-child(3){
      background-color:#8D7EFD;
    }
    
    
    .power_fourth-column {
      display: grid;
      grid-template-rows: repeat(3, auto);
      gap: 12px; 
      padding: 0px 18px; 
      margin-bottom:15px;
       @media screen and (width: 360px) and (height: 740px) {
     padding: 0px 9px;
       }
    
    
      
    }
    .solar_column-first{
      background: linear-gradient(to bottom, #00F2B2, #008C67);
      border-radius: 7px;
      display: flex;
      justify-content:center;
      align-items:center;
    
    }
    
    .power_fourth-column :nth-child(2){
      background: linear-gradient(to bottom, #FFB179, #FF8C06);
      border-radius: 7px;
      display: flex;
      justify-content:center;
      align-items:center;
    
    }
    .power_fourth-column :nth-child(3){
      background: linear-gradient(to bottom, #8D7EFD, #453A94);
      border-radius: 7px;
      display: flex;
      justify-content:center;
      align-items:center;
    
    }
    .power_text-fourth {
      background-color: #453A94;
      color: #fff;
      text-align: center;
      height: 40px;
    
      border-radius: 5px;
    }
    
    .power_text_first{
      position:absolute;
      background:linear-gradient(to bottom, #0578FF, #48B4F1);
      font-size: 12px;
      color: #fff;
      text-align: center;
    height: 20px;
    width: 62px;
      border-radius: 5px;
      display:flex;
      justify-content: center;
      align-items:center;
      top:50px;
    }
    
    
    
    </style>