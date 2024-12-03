<template>
    <div class="navbar">
      <ul>
        <li
          v-for="(item, index) in navItems"
          :key="index"
          :class="{ active: activeIndex === index }"
          @mouseover="setActive(index)"
          @click="setActive(index)"
        >
          <img :src="item.icon" alt="icon" class="icon" />
          <span class="text">{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import overview from '../assets/overview.svg';
  import analytics from '../assets/analytics.svg';
  import alertn from '../assets/alerts.svg';
  import reportn from '../assets/reportn.svg';
  import admin from '../assets/admin.svg';
  
  export default {
    name: "Navbar",
    data() {
      return {
        navItems: [
          { text: "Overview", icon: overview },
          { text: "Analysis", icon: analytics },
          { text: "Reports", icon: reportn },
          { text: "Alerts", icon: alertn },
          { text: "Admin", icon: admin },
        ],
        activeIndex: 0,
      };
    },
    methods: {
      setActive(index) {
        this.activeIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px  auto;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 0;
    border: 1px solid #eeeeee;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: #F3F1FF;
  }
  
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 50px;
    background: transparent;
    color: #333;
    cursor: pointer;
    transition: transform 0.3s ease;
    position: relative;
    font-family: "Montserrat", serif;
    background: linear-gradient(90deg, #453A94 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
  }
  
  li.active {
    color: #fff;
    background-position: left bottom;
    animation: slide-in 0.8s ease forwards;
  }
  
  li:hover {
    transform: scale(1.05);
  }
  
  li .icon {
    margin-right: 10px;
  }
  
  li .text {
    font-size: 16px;
    font-weight: bold;
  }
  
  @keyframes slide-in {
    0% {
      background-position: right bottom;
    }
    100% {
      background-position: left bottom;
    }
  }
  </style>
  