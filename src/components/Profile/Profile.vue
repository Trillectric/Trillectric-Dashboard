<template>
  <div :class="['profile-container', { 'sidebar-open': sidebarOpen }]">
    <div class="welcome-message">
      <h2>Welcome, <span>{{ name }}</span></h2>
    </div>
    <div class="profile-icon">
      <img src="../../assets/profile.svg" alt="Profile Icon" />
      <img src="../../assets/drop.svg" alt="Dropdown Icon" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'Profile',
  props: ['sidebarOpen'], 
  data() {
    return {
      name: 'Nisha Bhatt',
    };
  },
};
</script>


  
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.profile-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  position: fixed;
  width: calc(100% - 100px);
  z-index: 9999;
  transition: width 0.3s ease;
}

.profile-container .sidebar-open {
  width: calc(100% - 200px) !important;
}


.welcome-message h2 {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  font-family: "Montserrat", serif;
}

.welcome-message span {
  color: #453A94;
}

.profile-icon {
  display: flex;
  align-items: center;
  gap: 10px; 
  margin-right: 40px;
}

.profile-icon img:first-child {
  width: 40px;
  height: 40px;
  border-radius: 50%; 
}


.profile-icon img:last-child {
  width: 20px;
  height: 20px;
}

  </style>
  