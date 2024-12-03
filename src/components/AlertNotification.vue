<template>
    <div class="info-card">
      <p class="top-text">{{ topText }}</p>
      <div class="bottom-section">
        <div class="left-content">
          <div class="number">{{ number }}</div>
        </div>
        <div class="right-content">
          <p class="right-top-text">{{ rightTopText }}</p>
          <p class="right-bottom-text">{{ rightBottomText }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "InfoCard",
    props: {
      topText: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
      rightTopText: {
        type: String,
        required: true,
      },
      rightBottomText: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  
  <style>
.info-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 2%;
  gap: 10px; 
}

.top-text {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.bottom-section {
  display: flex;
  align-items: center;
  gap: 20px; 
}

.left-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.number {
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  background-color: #FFA63E;
  color: #000;
  border-radius: 50%;
  text-align: center;
  min-width: 40px;
  height: 40px;
  line-height: 40px;
}

.right-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}

.right-top-text {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}

.right-bottom-text {
  font-size: 12px;
  color: #666;
  margin: 5px 0 0;
}


  </style>
  