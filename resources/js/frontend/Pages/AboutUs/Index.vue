<template>
  <Head :title="event.title" />
  
  <NavbarArea />
  <!-- Banner section start here -->
  <common-banner
    :background-image="'frontend/assets/img/about-bg.png'"
    :heading="'About Us'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'About Us', url: '/about-us' },
    ]"
    key="about-us"
  />

  <!-- Banner section End here -->

  <!-- AboutUs Section Start Here -->
  <about-us-section v-if="about_us" :about_us="about_us"/>
  <!-- AboutUs Section End Here -->

  <!-- Why Choose us secion Start here -->
  <why-choose-us
    :position="'right'"
    :main-bg="'/frontend/assets/img/group-activity-02.png'"
    :side-bg="'/frontend/assets/img/ceo.png'"
    :whyChooseItems="whyChoseUs"
  />
  <!-- Why Choose us secion End here -->

  <!-- Volunteer Section Start -->
   <volunteer-section />
  <!-- Volunteer Section End -->

  <!-- MissionVision section Start here -->
   <mission-vision />
  <!-- MissionVision section end here -->

  <!-- AtAGlance Section Start -->
   <at-a-glance />
  <!-- AtAGlance Section End -->
</template>
<script>
import { store as about_us_store } from "./Store/about_us_store.js";

import { Head } from "@inertiajs/vue3";
import AboutUsSection from "./Components/AboutUsSection.vue";

// Common Components
import NavbarArea from "../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../CommonComponents/CommonBanner.vue";
//Global Components
import WhyChooseUs from "../../GlobalComponent/WhyChoseUs.vue";
import AtAGlance from "../../GlobalComponent/AtAGlance.vue";
import MissionVision from "../../GlobalComponent/MissionVision.vue";
import VolunteerSection from "../../GlobalComponent/VolunteerSection.vue";
import { mapActions, mapState } from "pinia";

export default {
  props: {
    event: Object,
  },
  components: {
    NavbarArea,
    CommonBanner,
    AboutUsSection,
    AtAGlance,
    MissionVision,
    VolunteerSection,
    WhyChooseUs,
  },
  methods: {
    ...mapActions(about_us_store, ["fetchAllAboutUsPageData"]),
  },
  created: function () {
    this.fetchAllAboutUsPageData();
  },
  computed: {
    ...mapState(about_us_store, [
      "about_us",
      "whyChoseUs",
      "volunteer",
      "mission_vission",
      "counters",
      "loading",
      "error",
    ]),
  },
};
</script>
