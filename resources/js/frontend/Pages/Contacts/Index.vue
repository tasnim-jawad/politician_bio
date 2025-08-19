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
  <office-address-section
    v-if="addresses?.data?.length > 0"
    :addresses="addresses.data"
  />
  <!-- Office Address Section Start here -->

  <!-- Contact Page Form Section Start Here -->
  <contact-page-form-section @submit="handleFormSubmission" />
  <!-- Contact Page Form Section End Here -->

  <!-- Map Section Start Here -->
  <map-section
    v-if="firstAddressMapLink"
    :mapSrc="firstAddressMapLink"
  />
  <!-- Map Section Start Here -->
</template>
<script>
import { Head } from "@inertiajs/vue3";

import NavbarArea from "../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../CommonComponents/CommonBanner.vue";
import OfficeAddressSection from "./components/OfficeAddressSection.vue";
import ContactPageFormSection from "./components/ContactPageFormSection.vue";
import MapSection from "./components/MapSection.vue";

import { mapActions, mapState } from "pinia";
import { store as contact_store } from "./Store/contact_store.js";

export default {
  props: {
    event: Object,
  },
  components: {
    NavbarArea,
    CommonBanner,
    OfficeAddressSection,
    ContactPageFormSection,
    MapSection,
  },
  methods: {
    ...mapActions(contact_store, ["fetchAllContactPageData"]),

    handleFormSubmission(result) {
      if (result.success) {
        console.log("Form submitted successfully:", result.data);
        // You can add additional success handling here (e.g., show notification)
      } else {
        console.log("Form submission failed:", result.errors);
        // You can add additional error handling here (e.g., show notification)
      }
    },
  },
  computed: {
    ...mapState(contact_store, ["addresses"]),

    firstAddressMapLink() {
      return this.addresses?.data?.[0]?.map_link || null;
      console.log("Map link for first address:", this.firstAddressMapLink);
      
    },
  },
  created: async function () {
    await this.fetchAllContactPageData();
  },
};
</script>
