<template>
    <div class="date_wrapperd">
      <div class="date-range">
        <div class="date-selector">
          <select v-model="selectedDate" @change="handleDateChange" class="date-select">
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option> 
            <option value="month">Month</option> 
          </select>
        </div>
        <div class="date-input-wrapper">
          <div class="date-input-container">
            <input 
              type="date" 
              v-model="startDate" 
              class="date-input" 
              ref="startDateInput"
            />
            <span class="arrow">→</span>
            <input 
              type="date" 
              v-model="endDate" 
              class="date-input" 
              ref="endDateInput"
            />
          </div>
          <img 
            src="../assets/calender.svg" 
            alt="Calendar Icon" 
            class="calendar-icon" 
            @click="openCalendar"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const selectedDate = ref('today');
      const startDate = ref('');
      const endDate = ref('');
      const startDateInput = ref(null);
      const endDateInput = ref(null);
  
      const handleDateChange = () => {
        if (selectedDate.value === 'today') {
          startDate.value = new Date().toISOString().slice(0, 10);
          endDate.value = new Date().toISOString().slice(0, 10);
        }
      };
  
      const openCalendar = () => {
        if (startDateInput.value) startDateInput.value.focus();
        if (endDateInput.value) endDateInput.value.focus();
      };
  
      onMounted(() => {
        handleDateChange();
      });
  
      return {
        selectedDate,
        startDate,
        endDate,
        handleDateChange,
        openCalendar,
        startDateInput,
        endDateInput,
      };
    },
  };
  </script>
  
  <style>
  .date_wrapperd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    margin-top: 2%;
  }
  
  .date-range {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  
  .date-selector {
    margin-right: 10px;
  }
  
  .date-select {
    padding: 3px;
    font-size: 12px;
    color: #000000;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .date-input-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .date-input-container {
    display: flex;
    align-items: center;
  }
  
  .date-input {
    height: 32px;
    font-size: 12px;
    padding: 0 8px;
    box-sizing: border-box;
    text-align: center;
    line-height: 32px;
    color: #000000;
    background-color: transparent;
    border: none;
  }
  
  .arrow {
    font-size: 18px;
  }
  
  .calendar-icon {
    margin-right: 5px;
    cursor: pointer;
  }
  </style>
  