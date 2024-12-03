<template>
  <div class="site-info-card">
    <div class="site-left-section">
      <p class="site-main-text">{{ mainText }}</p>
      <p class="site-sub-text">{{ subText }}</p>
    </div>

    <div class="site-image-text-section">
      <div class="site-left-image">
        <img src="../assets/sitep.svg" alt="Image" />
      </div>
      <div class="site-right-text">
        <p class="site-image-top-text">{{ imageTopText }}</p>
        <p class="site-image-bottom-text">{{ imageBottomText }}</p>
      </div>
    </div>

    <div class="site-bottom-section">
      <div class="info_details">
        <p class="site-additional-text">{{ additionalText1 }}</p>
        <p class="site-additional-text-bottom">{{ additionalText2 }}</p>
      </div>
      <div class="info_details">
        <p class="site-additional-text">{{ additionalText3 }}</p>
        <p class="site-additional-text-bottom">{{ additionalText4 }}</p>
      </div>
      <div class="info_details">
        <p class="site-additional-text">{{ additionalText5 }}</p>
        <p class="site-additional-text-bottom">{{ additionalText6 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SiteDetails",
  components: {
  },
  props: {
    mainText: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageTopText: {
      type: String,
      required: true,
    },
    imageBottomText: {
      type: String,
      required: true,
    },
    additionalText1: {
      type: String,
      required: true,
    },
    additionalText2: {
      type: String,
      required: true,
    },
    additionalText3: {
      type: String,
      required: true,
    },
    additionalText4: {
      type: String,
      required: true,
    },
    additionalText5: {
      type: String,
      required: true,
    },
    additionalText6: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.site-info-card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
  gap: 20px;
}

.site-left-section {
  text-align: left;
}

.site-main-text {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.site-sub-text {
  font-size: 15px;
  color: #453a94;
  margin: 5px 0 0;
  font-weight: 600;
  font-family: "Montserrat", serif;
}

.site-image-text-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.site-left-image img {
  object-fit: cover;
}

.site-right-text {
  text-align: left;
}

.site-image-top-text {
  font-size: 14px;
  margin: 0;
  color: #000000;
  font-family: "Montserrat", serif;
}

.site-image-bottom-text {
  font-size: 14px;
  color: #000000;
  font-family: "Montserrat", serif;
  margin: 5px 0 0;
}

.site-bottom-section {
  text-align: left;
}

.site-additional-text {
  font-size: 13px;
  color: #453a94;
  margin: 5px 0;
  font-weight: 600;
  font-family: "Montserrat", serif;
}
.site-additional-text-bottom {
  font-size: 13px;
  color: #000000;
  margin: 5px 0;
  font-family: "Montserrat", serif;
}
.info_details{
    margin-bottom: 5%;
}
</style>
