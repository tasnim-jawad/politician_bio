<template>
  <NavbarArea />
    <!-- banner section start here -->
    <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Contact Us'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Contact Us', url: '/contact-us' },
    ]"
    key="contact-us"
  />
  <!-- banner section End here -->
  
  <!-- Office Address Section Start here -->
  <office-address-section />
  <!-- Office Address Section Start here -->

  <!-- Contact Page Form Section Start Here -->
  <contact-page-form-section />
  <!-- Contact Page Form Section End Here -->

  <!-- Map Section Start Here -->
  <map-section />
  <!-- Map Section Start Here -->
</template>
<script>
import NavbarArea from "../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../CommonComponents/CommonBanner.vue";
import OfficeAddressSection from "./components/OfficeAddressSection.vue";
import ContactPageFormSection from './components/ContactPageFormSection.vue';
import MapSection from './components/MapSection.vue';

export default {
  components: {
    NavbarArea,
    CommonBanner,
    OfficeAddressSection,
    ContactPageFormSection,
    MapSection,
  },
};
</script>
