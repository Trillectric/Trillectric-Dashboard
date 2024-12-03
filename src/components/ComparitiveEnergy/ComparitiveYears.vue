<template>
    <div style="background-color: #F8F8F8; border-radius: 15px; padding: 20px;"> 
  <div style="margin-bottom: 20px;"> 
    <div class="year_dots">
      <div class="dot_year_pair">
        <span class="dot" style="background-color: #6EC5D6;"></span>
        <span class="year">2021</span>
      </div>
      <div class="dot_year_pair">
        <span class="dot" style="background-color: #019FE0;"></span>
        <span class="year">2022</span>
      </div>
      <div class="dot_year_pair">
        <span class="dot" style="background-color: #004B84;"></span>
        <span class="year">2023</span>
      </div>
      <div class="dot_year_pair">
        <span class="dot" style="background-color: #004B84;"></span>
        <span class="year">2024</span>
      </div>
    </div>
  </div>

  <div>
  </div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  components: {
 
  },
  methods: {
   
  },

};

</script>
<style scoped>
.year_dots {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 25%; 
  border-radius: 7px;
  padding: 10px;

  .dot_year_pair {
    display: flex;
    align-items: center;
    margin-right: 15px;

    .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      display: inline-block;
      margin-right: 5px;
    }

    .year {
      font-size: 10px;
      font-family: "Montserrat";

    }
  }
}
</style>