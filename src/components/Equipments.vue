<template>
    <div class="dropdown-container">
      <h2 class="dropdown-heading">Equipments</h2>
      <div
        v-for="(item, index) in dropdownItems"
        :key="index"
        class="dropdown-item"
      >
        <div
          class="dropdown-header"
          @click="toggleDropdown(index)"
        >
          <div class="dropdown-left">
            <img :src="item.icon" alt="icon" class="dropdown-icon" />
            <span class="dropdown-text">{{ item.text }}</span>
          </div>
          <div class="dropdown-right">
            <span :class="{'arrow-up': activeIndex === index, 'arrow-down': activeIndex !== index}"></span>
          </div>
        </div>
        <transition name="slide">
          <div
            v-if="activeIndex === index"
            class="dropdown-content"
          >
            <ul>
              <li v-for="(option, optIndex) in item.content" :key="optIndex" class="dropdown-option">
                {{ option }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </template>
  <script>
  import equip1 from "../assets/equip1.svg";
  import equip2 from "../assets/equip2.svg";
  import equip3 from "../assets/equip3.svg";
  import equip4 from "../assets/equip4.svg";
  
  export default {
    name: "SlidingDropdown",
    data() {
      return {
        activeIndex: null, 
        dropdownItems: [
          {
            icon: equip4,
            text: "Inverter",
            content: ["Option 1", "Option 2", "Option 3"], 
          },
          {
            icon: equip1,
            text: "Electric Vehicle",
            content: ["Choice A", "Choice B", "Choice C"], 
          },
          {
            icon: equip2,
            text: "Meter",
            content: ["Setting 1", "Setting 2", "Setting 3"], 
          },
          {
            icon: equip3,
            text: "Data Logger",
            content: ["Item X", "Item Y", "Item Z"], 
          },
        ],
      };
    },
    props: {
      heading: {
        type: String,
        required: true,
      },
    },
    methods: {
      toggleDropdown(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      },
    },
  };
  </script>
  
  <style scoped>
.dropdown-container {
  padding: 10px;
  border-radius: 8px;
}

.dropdown-heading {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
}

.dropdown-item {
  padding: 10px 0;
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.dropdown-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dropdown-icon {
  width: 20px;
  height: 20px;
}
ul{
    list-style-type: none;
    padding: 0;
}
.dropdown-text {
  font-size: 13px;
  font-weight: 500;
  color: #000000;
  font-family: "Montserrat", serif;

}

.dropdown-right {
  font-size: 14px;
  display: flex;
  align-items: center;
}

.arrow-up::before,
.arrow-down::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
}

.arrow-up::before {
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent #000 transparent;
}

.arrow-down::before {
  border-width: 5px 5px 0 5px;
  border-color: #000 transparent transparent transparent;
}

.dropdown-content {
  margin-top: 10px;
  padding-left: 30px;
  font-size: 14px;
  color: #555;
}

.dropdown-option {
  padding: 5px 0;
  cursor: pointer;
}

.dropdown-option:hover {
  color: #007BFF;
}

.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
