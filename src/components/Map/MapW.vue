<template>
    <div class="map-container">
      <div class="svg-map" ref="svgMap" v-html="svgMap"></div>
      <div class="popup" v-if="popupVisible" :style="{ left: popupX + 'px', top: popupY + 'px' }">
        <div class="popup-content">
          <h3>{{ popupText }}</h3>
          <p>{{ popupStatus }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DottedMap from 'dotted-map';
  import {getMapJSON}  from  'dotted-map';
  export default {
    data() {
      return {
        svgMap: '',
        popupVisible: false,
        popupX: 0,
        popupY: 0,
        popupText: '',
        popupStatus: '',
        solarConnectionPoints: [
          {
            lat: 28.6139,
            lng: 77.2090,
            username: 'John Doe',
            status: 'Active',
            tooltip: 'New Delhi (Solar Connection)',
            color: '#FFD700', // Gold
          },
          {
            lat: 19.076,
            lng: 72.8777,
            username: 'Jane Smith',
            status: 'Inactive',
            tooltip: 'Mumbai (Solar Connection)',
            color: '#FF6347', // Tomato
          },
          {
            lat: 12.9716,
            lng: 77.5946,
            username: 'Alice Brown',
            status: 'Active',
            tooltip: 'Bangalore (Solar Connection)',
            color: '#32CD32', // LimeGreen
          },
          {
            lat: 22.5726,
            lng: 88.3639,
            username: 'Bob Green',
            status: 'Active',
            tooltip: 'Kolkata (Solar Connection)',
            color: '#1E90FF', // DodgerBlue
          },
          {
            lat: 23.0225,
            lng: 72.5714,
            username: 'Charlie Black',
            status: 'Inactive',
            tooltip: 'Ahmedabad (Solar Connection)',
            color: '#8A2BE2', // BlueViolet
          },
        ],
      };
    },
    mounted() {
      this.generateMap();
    },
    methods: {
      generateMap() {
        const map = new DottedMap({
          height: 200,
          grid: { x: 5, y: 5 },
        });
  
        this.solarConnectionPoints.forEach((pin) => {
          map.addPin({
            lat: pin.lat,
            lng: pin.lng,
            svgOptions: {
              color: pin.color, // Set color dynamically
              radius: 1.2,
            },
          });
        });
  
        let svgContent = map.getSVG({
          radius: 0.5,
          color: '#fff',
          shape: 'circle',
          backgroundColor: 'none',
        });
  
        svgContent = this.addHoverEventsToSolarConnections(svgContent);
  
        this.svgMap = svgContent;
  
        this.$nextTick(() => {
          this.applyHoverEventsToPins();
        });
      },
  
      addHoverEventsToSolarConnections(svgContent) {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
        const circles = svgDoc.querySelectorAll('circle');
  
        this.circles = circles; // Store circles for event binding
        return new XMLSerializer().serializeToString(svgDoc);
      },
  
      applyHoverEventsToPins() {
        this.circles.forEach((circle, index) => {
          const pin = this.solarConnectionPoints[index];
  
          // Use mouseover and mouseout for hover detection
          circle.addEventListener('mouseover', (event) => {
            this.showPopup(event, pin);
          });
  
          circle.addEventListener('mouseout', () => {
            this.hidePopup();
          });
        });
      },
  
      showPopup(event, pin) {
        this.popupVisible = true;
        this.popupText = pin.username;
        this.popupStatus = `Status: ${pin.status}`;
  
        const boundingBox = event.target.getBoundingClientRect();
        const mapBoundingBox = this.$refs.svgMap.getBoundingClientRect();
  
        // Position the popup
        this.popupX = boundingBox.left + boundingBox.width / 2 - mapBoundingBox.left;
        this.popupY = boundingBox.top - 10 - mapBoundingBox.top;
      },
  
      hidePopup() {
        this.popupVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
  }
  
  .svg-map {
    width: 200%;
    height: auto;
    display: block;
    cursor: pointer;
  }
  
  .popup {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 15px;
    border-radius: 4px;
    font-size: 14px;
    pointer-events: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
  
  .popup-content h3 {
    margin: 0;
    font-size: 16px;
  }
  
  .popup-content p {
    margin-top: 5px;
    font-size: 14px;
    color: #FFD700;
  }
  </style>
  

   <!-- <template>
    <div class="map-container">
      <img :src="`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`" />
    </div>
  </template>
  
  <script>
  import { mapJsonString } from '../../main';
  
  export default {
    data() {
      return {
        svgMap: null,
        map: null,
      };
    },
    mounted() {
      this.generateMap();
    },
    methods: {
      generateMap() {
        this.map = new DottedMap({ map: JSON.parse(mapJsonString) });
        this.map.addPin({
          lat: 40.73061,
          lng: -73.935242,
          svgOptions: { color: '#d6ff79', radius: 0.4 },
        });
        this.svgMap = this.map.getSVG({
          radius: 0.22,
          color: '#423B38',
          shape: 'circle',
          backgroundColor: '#020300',
        });
      },
    },
  };
  </script>
  
  
  <style scoped>
  .map-container {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
  }
  
  .svg-map {
    width: 200%;
    height: auto;
    display: block;
    cursor: pointer;
  }
  
  .popup {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 15px;
    border-radius: 4px;
    font-size: 14px;
    pointer-events: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
  
  .popup-content h3 {
    margin: 0;
    font-size: 16px;
  }
  
  .popup-content p {
    margin-top: 5px;
    font-size: 14px;
    color: #FFD700;
  }
  </style> -->