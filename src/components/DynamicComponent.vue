<template>
  <div :class="['dynamic', { 'dynamic-expanded': sidebarOpen }]">
    <div class="content-wrapper">
      <div class="left-section">
      <Menu/>
      <ProductionConsumption/>
        <SitePower/>
        <ComparitiveButtons/>
      </div>
      <div class="right-section">
        <PowerFlow/>
        <AlertNotification
      topText="Alerts(1)"
      :number="2"
      rightTopText="No Site Communication"
      rightBottomText="7/7/2024 23:01 "
    />
    <SiteDetails
    mainText="Site Details"
    subText="Mr. Sawhney A47/6"
    imageSrc="../assets/sitep.svg"
    imageTopText=" 11.40 kWp"
    imageBottomText="ID: 207890"
    additionalText1="Account "
    additionalText2="Sunson Energy Pvt. Ltd"
    additionalText3="Installation Date  "
    additionalText4="9/7/2024"
    additionalText5="Address "
    additionalText6="Lorem ipsum dolor sit amet consectetur. Luctus neque sed."
  />
  <Equipments/>
      </div>
    </div>
  </div>
</template>  
<script>
import Menu from './Menus.vue'
import ProductionConsumption from './ProductionConsumption.vue'
import PowerFlow from './PowerFlow.vue';
import AlertNotification from './AlertNotification.vue'
import SiteDetails from './SiteDetails.vue'
import Equipments from './Equipments.vue'
import SitePower from './SitePower.vue'
import ComparitiveButtons from './ComparitiveEnergy/ComparitiveButtons.vue';
export default {
  name: "DynamicComponent",
  components: {
    Menu,
    ProductionConsumption,
    PowerFlow,
    AlertNotification,
    SiteDetails,
    Equipments,
    SitePower,
    ComparitiveButtons
  },
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    sidebarOpen: {
        type: Boolean,
        default: false,
      },
  },
};
</script>
<style scoped>
.dynamic-component {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.dynamic {
    transition: margin-left 0.3s ease;
    margin-left: 100px; 
  }
  .dynamic-expanded {
    margin-left: 220px; 
  }
.content-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 20px;
}
.left-section {
  background-color: #fff;
  width: 65%;
}
.right-section {
  width: 35%;
  background-color: #F3F1FF;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto; 
}
</style>

  