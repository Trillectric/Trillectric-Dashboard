<template>
  <div class="dash_card_layout">
    <div class="left-card">
      <div class="content">
        <p class="top-text">Consumption Units</p>
        <p class="bottom-text">740.41 <span>KWh</span></p>
      </div>
      <div class="circular-div">
    <p class="text_cone">Capacity</p>
    <p class="text_ctwo">320</p>
    <p class="text_cone">kw</p>
  </div>
  <div class="circular-div_two">
    <p class="text_cone_w">Capacity</p>
    <p class="text_ctwo_w">320</p>
    <p class="text_cone_w">kw</p>
  </div>

      <div class="wind_solar">
        <img src="../assets/winds.png" alt="">
      </div>
    </div>
    <div class="right-cards">
      <div class="top-cards">
        <div class="card top-card">
          <div class="image_content">
            <div class="image_card">
              <img src="../assets/ship.svg" alt="">
            </div>
            <p class="main-text">Carbon <br> Emission</p>
          </div>
          <div>
            <p class="emission_tons">267.29t</p>
            <p class="month">This Month</p>
            <div class='curved_image'>
              <img src='../assets/curve1.svg' alt="curved">
            </div>
          </div>
        </div>
        <div class="card top-card">
          <div class="image_content">
            <div class="image_card ship_green">
              <img src="../assets/ship.svg" alt="">
            </div>
            <p class="main-text">Carbon  <br>Emission</p>
          </div>
          <div>
            <p class="emission_tons">267.29t</p>
            <div class='curved_image right'>
              <img src='../assets/curve.svg' alt="curved">
            </div>
          </div>
        </div>
      </div>
      <div class="card bottom-card">
        <div class="left-side">
          <div class="power-generate">
    <p class="generate">Today’s Power Generate</p>
    <p class="tracking">
      Tracking and analyzing electricity consumption data in <br />
      real-time.
    </p>
    <p class="units">{{ energyConsumption }} kWh</p>
    <div class="circle-container">
      <div
        v-for="(circle, index) in circles"
        :key="index"
        class="circle"
        :class="circle.filled ? 'filled' : 'unfilled'"
      >
        <div v-if="circle.filled" class="dot green-dot"></div>
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConsumptionUnits",
  data() {
    return {
      totalCircles: 16, 
      energyConsumption: 3200, 
      maxConsumption: 5000, 
      circles: [] 
    };
  },
  methods: {
    calculateFilledCircles() {
      const filledCount = Math.round(
        (this.energyConsumption / this.maxConsumption) * this.totalCircles
      );
      this.circles = Array.from({ length: this.totalCircles }, (_, index) => ({
        filled: index < filledCount
      }));
    }
  },
  mounted() {
    this.calculateFilledCircles();
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
  position: relative;
  background: linear-gradient(to right, #332983, #1B125F);
  border-radius: 25px;
  padding: 20px 85px 5px 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
}
.left-card .content {
  display: flex;
  flex-direction: column;
}
.left-card .top-text {
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  font-family: "Montserrat", serif;
  /* margin: 20px 0 10px 0; */
}
.left-card .bottom-text {
  font-size: 40px;
  font-weight: 700;
  color: #00FFBC;
  font-family: "Montserrat", serif;
}
.left-card span {
  font-size: 19px;
  font-weight: 500;
  color: #00FFBC;
  font-family: "Montserrat", serif;
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
}
.month{
  font-size: 10px;
  font-weight: 500;
  margin:0;
  color:#fff;
}
.curved_image{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.curved_image.right{
  margin-top: 7%;
}
.top-card {
  flex:1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background:linear-gradient(to right, #FEC22B, #E59E0E);
  padding: 10px 25px 10px 20px;
  border-radius: 20px;
}
.top-card:nth-child(2) {
  background:linear-gradient(100deg,#5E0A9F, #07CA96);
}
.top-card p {
  margin: 0;
}
.peak_power {
  display: flex;
  gap: 15px; 
}
.image_card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E7A218;
  border-radius: 10px;
  padding: 10px;
}
.image_card.ship_green{
  background-color: #8D7EFD;
}
.text-content {
  display: flex;
  flex-direction: column;
}
.main-text {
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  color: #fff;
  font-family: "Montserrat", serif;
}
.emission_tons {
  font-size: 25px;
  font-weight: 700;
  text-align: left;
  color: #fff;
  font-family: "Montserrat", serif;
}
.bottom-text {
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #00FFBC; 
  margin-top: 5px; 
}
.bar {
  display: flex;
  justify-content: space-between;
}
.peak_power p:nth-of-type(1) {
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat", serif;
  color: #fff;
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
.power p:nth-of-type(2)::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #453a94;
  display: inline-block;
  margin-right: 10px;
}
.power p:nth-of-type(3) {
  font-size: 13px;
  font-weight: 400;
  font-family: "Montserrat", serif;
  color: #000000;
}
.power p:nth-of-type(3)::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #00f2b2;
  display: inline-block;
  margin-right: 10px;
}
.image_content{
  display: flex;
  align-items: center;
  gap:15px 
}
.time_date {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 2%;
}
.time_date p {
  font-size: 12px !important;
  font-weight: 400 !important;
  margin-bottom: 0 !important;
}
.top-card .top-card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}
.bottom-card {
  background-color: #f5f4ff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.generate,
.tracking,
.units{
  margin: 0;
}
.tracking,
.units{
  margin-top: 10px;
}
.generate{
  font-size: 20px;
  font-weight: 700;
  font-family: "Montserrat", serif;
}
.units{
  font-size: 20px;
  font-weight: 700;
  font-family: "Montserrat", serif;
}
.tracking{
  font-size: 12px;
  font-family: "Montserrat", serif;
  color: #898989;
}
.circle-container {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 22px;
  padding: 6px;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.filled {
  border-color: #13b78c; 
}

.unfilled {
  border-color: #B0FDE9; 
}



.green-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #13b78c; 
}
.wind_solar{
  position: absolute;
        bottom: -7px;
        right: 15px;
    img{
      height: 250px;
      width: 315px;
    }
}
.circular-div {
  position: absolute;
  top: 35%;
  left: 7%; 
  width: 80px;
  height: 80px;
  background-color: #13B78C;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 5px; 
  border:1px solid #fff;
}
.circular-div_two {
  position: absolute;
  top: 55%;
  left: 35%; 
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000 !important;
  padding: 5px; 
  border:1px solid #8D7EFD;
}
.text_cone, .text_ctwo {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
.text_cone {
  font-size: 12px;
  color: #fff;
}
.text_cone:nth-child(1) {
  margin-top: 10px;
}
.text_ctwo {
  font-size: 20px;
  font-weight: 600; 
  color: #fff;
}
.text_cone_w, .text_ctwo_w {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
.text_cone_w {
  font-size: 12px;
  color: #000;
}
.text_cone_w:nth-child(1) {
  margin-top: 10px;
}
.text_ctwo_w {
  font-size: 20px;
  font-weight: 600; 
  color: #000;
}
</style>


  
  