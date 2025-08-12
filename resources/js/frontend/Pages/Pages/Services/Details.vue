<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Services Details'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Services', url: '/pages/services' },
      { text: 'Services Details', url: '/pages/services/details' },
    ]"
    :marginClass="'margin-bottom-0'"
    key="services_details"
  />
  <!-- banner section End here -->

  <!-- ServiceDetailsSection Start here -->
  <service-details-section v-if="service_details" :service="service_details"/>
  <!-- ServiceDetailsSection End here -->

  <!-- service-slider Section Start -->
  <service-slider />
  <!-- service-slider section end -->

  <!-- Why Choose us secion Start here -->
  <why-chose-us
    :position="'right'"
    :main-bg="'/frontend/assets/img/group-activity-02.png'"
    :side-bg="'/frontend/assets/img/ceo.png'"
  />
  <!-- Why Choose us secion End here -->

  <!-- Faq section Start here -->
  <mission-vision />
  <!-- Faq section end here -->

  <!-- Counter Section Start -->
  <at-a-glance />
  <!-- Counter Section End -->
</template>

<script>
import { Head } from "@inertiajs/vue3";
import { mapActions, mapWritableState } from "pinia";
import { store as service_details_store } from "./Store/service_details_store.js";
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import WhyChoseUs from "../../../GlobalComponent/WhyChoseUs.vue";
import MissionVision from "../../../GlobalComponent/MissionVision.vue";
import AtAGlance from "../../../GlobalComponent/AtAGlance.vue";
import ServiceSlider from "../../../GlobalComponent/ServiceSlider.vue";

import ServiceDetailsSection from "./components/ServiceDetailsSection.vue";

export default {
  props: {
    event: Object,
  },
  components: {
    NavbarArea,
    CommonBanner,
    WhyChoseUs,
    MissionVision,
    AtAGlance,
    ServiceSlider,
    ServiceDetailsSection,
  },
  data() {
    return {
      slug: "",
    };
  },
  created: async function () {
    const params = new URLSearchParams(window.location.search);
    this.slug = params.get("slug") || "";
    console.log("slug from detail created:before condition", this.slug);

    if (this.slug) {
      console.log("slug from detail created:", this.slug);

      await this.fetch_service_details(this.slug);
      console.log("service_details after fetch:", this.service_details);
    }
  },
  methods: {
    ...mapActions(service_details_store, ["fetch_service_details"]),
  },
  computed: {
    ...mapWritableState(service_details_store, [
      "service_details",
    ])
  },
};
</script>
