<template>
  <div class="comparitive_graph">
    <div class="comparative_energy">
      <p>Comparative Energy</p>
      <div class="comparative_buttons">
        <div class="slider"></div>
        <button
          class="button"
          @click="setComparative('month')"
          :class="{ active: comparativeButton === 'month' }"
        >
          Month
        </button>
        <button
          class="button"
          @click="setComparative('quarter')"
          :class="{ active: comparativeButton === 'quarter' }"
        >
          Quarter
        </button>
        <button
          class="button"
          @click="setComparative('year')"
          :class="{ active: comparativeButton === 'year' }"
        >
          Year
        </button>
      </div>
    </div>
     <ComparitiveYears />


  </div>
</template>

<script>
import { ref } from "vue";
import ComparitiveYears from "./ComparitiveYears.vue";

export default {
  components: {
    ComparitiveYears,
  },
  setup() {
    const comparativeButton = ref("month");

    const setComparative = (button) => {
      comparativeButton.value = button;
      const slider = document.querySelector(".comparative_buttons .slider");
      const buttonWidth = document.querySelector(
        ".comparative_buttons .button"
      ).offsetWidth;
      const buttons = ["month", "quarter", "year"];
      const index = buttons.indexOf(button);
      slider.style.transform = `translateX(${index * buttonWidth}px)`;
    };

    return {
      comparativeButton,
      setComparative,
    };
  },
};
</script>

<style scoped>
.comparitive_graph {
  padding: 20px;
}

.comparative_energy {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.comparative_energy p {
  font-size: 14px;
  font-family: "Montserrat";
  color: #000000;
  font-weight: 700;
  text-transform: uppercase;
}

.comparative_energy .comparative_buttons {
  position: relative;
  display: flex;
  align-items: center;
  height: 23px;
  border: 1px solid #453a94;
  border-radius: 20px;
  overflow: hidden;

}

.comparative_energy .comparative_buttons .slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 37.33%;
  background-color: #453a94;
  transition: transform 0.3s ease;
  border-radius: 20px;
}

.comparative_energy .comparative_buttons .button {
  border: none;
  background: none;
  color: #000000;
  font-size: 10px;
  font-family: "Montserrat";
  z-index: 1;
}

.comparative_energy .comparative_buttons .button.active {
  font-weight: 500;
  color: #ffffff;
  outline: none;

}

</style>
