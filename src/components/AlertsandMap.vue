<template>
  <div class="alerts_and_map">
    <ActualCondition />
    <Random />

  </div>
</template>

<script>
import ActualCondition from "./ActualCondition.vue";
import Random from "./Map/Random.vue";  

export default {
  name: "AlertsandMap",
  components: {
    ActualCondition,
    Random,
  },
};
</script>

<style scoped>
.alerts_and_map {
  display: flex;
  flex-direction: column;
}

.alerts_and_map > * {}

.parent-title {
  text-align: center;
  margin-bottom: 20px;
}

</style>
