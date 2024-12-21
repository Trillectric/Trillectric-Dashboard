import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import 'leaflet/dist/leaflet.css';
// import { getMapJSON } from 'dotted-map';

// export const mapJsonString = getMapJSON({ 
//   height: 200, 
//   grid: { x: 5, y: 5 }, 
// });

const app = createApp(App);
app.use(router);
app.mount('#app');
