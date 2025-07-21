<template>
  <navbar-area />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Our Principles'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Our Principles', url: '/pages/principles' },
    ]"
    key="principles"
  />
  <!-- banner section End here -->

  <!-- Our Principle Section Start here -->
  <our-principle />
  <!-- Our Principle Section End here -->

  <!-- People say section-02 start here -->
  <people-say-section />
  <!-- People say section-02 end here -->

  <!-- Our speeches section start here -->
  <our-speeches-section />
  <!-- Our speeches section start here -->
</template>

<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import OurPrinciple from "../../../GlobalComponent/OurPrinciple.vue";
import PeopleSaySection from "../../../GlobalComponent/PeopleSaySection.vue";
import OurSpeechesSection from "../../../GlobalComponent/OurSpeechesSection.vue";

export default {
  components: {
    NavbarArea,
    CommonBanner,
    OurPrinciple,
    PeopleSaySection,
    OurSpeechesSection,
  },
};
</script>
