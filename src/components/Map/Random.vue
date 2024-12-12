<template>
  <div style="padding: 16px;">
    <h1>Solar Points</h1>

    <div class="world_map">
    <Map/>
    </div>

  </div>
</template>
<script>
import Map from './MapW.vue';

export default {
  name: 'App',
  components: {
    Map
  }
};
</script>


<style>
h1{
  border-top: 0.5px solid #453A94;
  font-size: 15px;
    font-weight: 600;
    font-family: "Montserrat", serif;
    padding: 15px 0px;
    color: #fff;
}
</style>