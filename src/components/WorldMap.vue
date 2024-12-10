<template>
    <div class="map-container">
      <l-map
        :zoom="2"
        :center="[20, 0]"
        style="height: 100%; width: 100%"
        class="dotted-world-map"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <l-circle-marker
          v-for="(location, index) in locations"
          :key="index"
          :lat-lng="[location.lat, location.lng]"
          :radius="3"
          :color="'#FF6347'"
          :fill-color="'#FF6347'"
          :fill-opacity="1"
        />
      </l-map>
    </div>
  </template>
  
  <script>
  import { LMap, LTileLayer, LCircleMarker } from "vue3-leaflet";
  
  export default {
    name: "DottedWorldMap",
    components: {
      LMap,
      LTileLayer,
      LCircleMarker,
    },
    data() {
      return {
        locations: [
          { lat: 51.5074, lng: -0.1278 }, // London
          { lat: 40.7128, lng: -74.006 }, // New York
          { lat: 35.6895, lng: 139.6917 }, // Tokyo
          { lat: -33.8688, lng: 151.2093 }, // Sydney
          { lat: 48.8566, lng: 2.3522 }, // Paris
          { lat: -23.5505, lng: -46.6333 }, // São Paulo
        ],
      };
    },
  };
  </script>
  
  <style>
  .map-container {
    height: 500px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .dotted-world-map {
    /* Additional styles if needed */
  }
  </style>
  