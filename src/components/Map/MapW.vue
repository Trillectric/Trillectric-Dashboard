<template>
    <div>
     
      <div v-html="svgMap"></div>
    </div>
  </template>
  
  <script>
  import DottedMap from 'dotted-map';
  
  export default {
    data() {
      return {
        svgMap: '', 
      };
    },
    mounted() {
      this.generateMap(); 
    },
    methods: {
      generateMap() {
        const map = new DottedMap({ height: 60, grid: 'diagonal' });
  
        map.addPin({
          lat: 40.73061,
          lng: -73.935242,
          svgOptions: { color: '#d6ff79', radius: 0.4 },
        });
        map.addPin({
          lat: 48.8534,
          lng: 2.3488,
          svgOptions: { color: '#fffcf2', radius: 0.4 },
        });
  
        this.svgMap = map.getSVG({
          radius: 0.22, 
          color: '#423B38', 
          shape: 'circle', 
          backgroundColor: '#020300', 
        });
  
        console.log('Generated SVG:', this.svgMap);
      },
    },
  };
  </script>
  
  <style scoped>
  div {
    width: 100%;
    overflow: hidden;
  }
  </style>
  