<template>
  <div class="dropdowns-container">
    <div
      class="dropdown-wrapper"
      v-for="(dropdown, index) in dropdowns"
      :key="index"
    >
      <label :for="dropdown.label">{{ dropdown.label }}</label>
      <div class="dropdown-container">
        <div class="dropdown" @click="toggleDropdown(index)">
          <div class="dropdown-left">
            <span class="icon">
              <img :src="dropdown.icon" alt="dropdown icon" />
            </span>
            <span class="view-text" v-if="!dropdown.selected">{{
              dropdown.placeholder
            }}</span>
            <span class="view-text" v-else>{{ dropdown.selected }}</span>
          </div>
          <span class="dropdown-icon">
            <img src="../assets/drop.svg" alt="dropdown icon" />
          </span>
        </div>
        <div v-if="dropdown.open" class="dropdown-options">
          <ul>
            <li
              v-for="option in dropdown.options"
              :key="option"
              @click="selectOption(index, option)"
            >
              {{ option }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import location from "../assets/location.svg";
import calendar from "../assets/calendar.svg";
import dot from "../assets/dot.svg";
import strike from "../assets/strike.svg";
export default {
  name: "Dropdowns",
  data() {
    return {
      dropdowns: [
        {
          label: "Location",
          selected: "",
          open: false,
          placeholder: "View All",
          icon: location,
          options: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
        },
        {
          label: "Installed",
          selected: "",
          open: false,
          placeholder: "View All",
          icon: calendar,
          options: ["2020", "2021", "2022", "2023"],
        },
        {
          label: "Active Status",
          selected: "",
          open: false,
          placeholder: "View All",
          icon: dot,
          options: ["Active", "Inactive", "Maintenance"],
        },
        {
          label: "Peak Power",
          selected: "",
          open: false,
          placeholder: "View All",
          icon: strike,
          options: ["100 kW", "200 kW", "300 kW", "400 kW"],
        },
      ],
    };
  },
  methods: {
    toggleDropdown(index) {
      const clickedDropdown = this.dropdowns[index];
      clickedDropdown.open = !clickedDropdown.open;

      this.dropdowns.forEach((dropdown, i) => {
        if (i !== index) {
          dropdown.open = false;
        }
      });
    },
    selectOption(index, option) {
      const selectedDropdown = this.dropdowns[index];
      selectedDropdown.selected = option;
      selectedDropdown.open = false;
    },
    handleClickOutside(event) {
      const dropdownsContainer = this.$el;
      if (!dropdownsContainer.contains(event.target)) {
        this.dropdowns.forEach((dropdown) => {
          dropdown.open = false;
        });
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.dropdowns-container {
  display: flex;
  gap: 20px;
}

.dropdown-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.dropdown-container {
  width: 100%;
}

.dropdown {
  display: flex;
  align-items: center;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 9px;
  font-size: 12px;
  cursor: pointer;
  justify-content: space-between;
  gap: 122px;
}

.dropdown-left {
  display: flex;
  gap: 8px;
}

.dropdown-icon img {
  width: 16px;
  height: 16px;
}

.view-text {
  font-size: 10px;
  color: #666;
}

.dropdown-options {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 10;
  padding: 5px;
  margin-top: 5px;
}

.dropdown-options ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown-options li {
  padding: 6px;
  font-size: 11px;
  cursor: pointer;
}

.dropdown-options li:hover {
  background-color: #f1f1f1;
}
</style>
