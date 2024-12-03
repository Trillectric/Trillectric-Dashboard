<template>
  <div :class="['sidebar', { 'sidebar-open': sidebarOpen }]">
    <div class="header">
      <div @click="toggleSidebar" class="hamburger">
        <img src="../../assets/ham.svg" alt="Hamburger" />
      </div>
      <div class="logo">
        <img :src="sidebarOpen ? logo : home" alt="logo" />
      </div>
    </div>
    <div class="custom-hr"></div>
<nav class="sidebar-links">
  <div 
    v-for="(link, index) in sidebarLinks" 
    :key="link.name" 
    :class="['sidebar-link', { 'settings-link': index === 6, 'bottom-links': index >= sidebarLinks.length - 2 }]"
  >
    <router-link 
      :to="link.path" 
      :class="{'active-link': isActive(link)}"
      @click="setActiveLink(link)"
    >
      <img :src="getImagePath(link.icon)" alt="Link Icon" />
      <span v-if="sidebarOpen">{{ link.name }}</span>
    </router-link>
  </div>
</nav>

  </div>
</template>

<script>
import { sidebarLinks } from './data';
import home from '../../assets/te.svg';
import logo from '../../assets/trin2.svg';

export default {
  props: ['sidebarOpen'],
  data() {
    return {
      sidebarLinks,
      home,
      logo,
      activeLink: null,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar', !this.sidebarOpen);
    },
    getImagePath(icon) {
      return icon;
    },
    setActiveLink(link) {
      this.activeLink = link;
    },
    isActive(link) {
      return this.activeLink === link;
    },
  },
};
</script>






<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.sidebar {
  width: 100px; 
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: width 0.3s ease;
  position: fixed;
  z-index: 1000;
    background: linear-gradient(to bottom, #120B41, #453A94);

}
.custom-hr {
  height: 0.5px;
    width: 75%;
    background-color: #fff;
    margin: 20px auto;
}
.sidebar.sidebar-open {
  width: 220px; 
}
.header {
  display: flex;
  align-items: center;
  padding: 20px 10px 10px 26px;
  gap: 15px;
  padding-bottom: 0;
}
.hamburger {
  cursor: pointer;
}
.hamburger img {
  height: 15px; 
  width: auto;
}
.logo img {
  height: 30px; 
  width: auto;
}
.sidebar-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sidebar-link {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  overflow: hidden; 
  transition: all 0.3s ease; 
}
.sidebar-link a {
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 10px 10px 25px ;
}
.sidebar-link:nth-child(6) {
  margin-top: 50px;
}
.sidebar-link:nth-child(7) {
position: absolute;
bottom: 18%;
}
.sidebar-link:nth-child(8) {
position: absolute;
bottom: 10%;
}
.logo img{
  width: 100%;
}
.sidebar-link img {
  width: 24px;
  height: 24px;
  margin-right: 20px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 1; 
  transform: scale(1); 
}
.sidebar-link span {
  font-size: 15px;
  font-family: "Montserrat", serif;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.sidebar.sidebar-open .sidebar-link span {
  opacity: 1; 
  transform: translateX(0); 
}
.sidebar.sidebar-open .sidebar-link img {
  opacity: 1; 
  transform: scale(1); 
}

.sidebar-links .sidebar-link a:hover {
  position: relative; 
  border-left: 4px solid #fff;
}
.sidebar-links .sidebar-link a:hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0; 
  height: 100%;
  width: 25px; 
  background: linear-gradient(
 
    to right, 
    #8D7EFD,  
    #150D54
  );
  background-size: 100% 50%; 
  animation: spreadBackground 8s infinite alternate; 
}
@keyframes spreadBackground {
  0% {
    background-position: 100% 0; 
  }
  100% {
    background-position: 0 0; 
  }
}
</style>
