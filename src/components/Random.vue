<template>
    <div id="india-map" class="map-container"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import indiaGeoJson from '../assets/india-geojson.json'; 
  
  export default {
    name: 'IndiaDottedMap',
    data() {
      return {
        map: null,
        dotLayer: null,
        cities: [
          { name: 'New Delhi', lat: 28.6139, lng: 77.2090 },
          { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
          { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
          { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
          { name: 'Bengaluru', lat: 12.9716, lng: 77.5946 },
          { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
          { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714 },
          { name: 'Pune', lat: 18.5204, lng: 73.8567 },
          { name: 'Jaipur', lat: 26.9124, lng: 75.7873 },
          { name: 'Lucknow', lat: 26.8467, lng: 80.9462 },
          // Add more cities as needed
        ],
      };
    },
    mounted() {
      this.initializeMap();
      this.addGeoJSONLayer();
      this.generateDottedMap();
    },
    methods: {
      initializeMap() {
        // Initialize the map without a tile layer, focusing only on dots
        this.map = L.map('india-map').setView([20.5937, 78.9629], 5); // Center of India
      },
  
      addGeoJSONLayer() {
        // Add GeoJSON data for India borders (outline), without the tile layer
        L.geoJSON(indiaGeoJson, {
          style: { color: '#ff6347', weight: 1 }, // Set GeoJSON line color and weight
        }).addTo(this.map);
      },
  
      generateDottedMap() {
        // Create a layer for dots
        this.dotLayer = L.layerGroup().addTo(this.map);
  
        // Add dots for each city in the cities array
        this.cities.forEach((city) => {
          this.addDot(city.lat, city.lng);
        });
      },
  
      addDot(lat, lng) {
        // Add a dot (circle marker) to the map at city locations
        L.circleMarker([lat, lng], {
          radius: 6,  // Size of the dot (adjust to make it smaller or larger)
          color: '#3498db',  // Dot color
          fillColor: '#3498db',
          fillOpacity: 0.8,
        }).addTo(this.dotLayer);
      },
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    height: 55%;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  