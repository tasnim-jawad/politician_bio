<template>
  <Head :title="event.title" />
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
  <OurPrinciple v-if="principles.length > 0" :principleItems="principles" />
  <!-- Our Principle Section End here -->

  <!-- People say section-02 start here -->
  <people-say-section v-if="comments.length > 0" :comments="comments" />
  <!-- People say section-02 end here -->

  <!-- Our speeches section start here -->
  <our-speeches-section v-if="speeches.length > 0" :speeches="speeches" />
  <!-- Our speeches section start here -->
</template>

<script>
import { store as principles_store } from "./Store/principles_store.js";
import { mapActions, mapState } from "pinia";

import { Head } from "@inertiajs/vue3";
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import OurPrinciple from "../../../GlobalComponent/OurPrinciple.vue";
import PeopleSaySection from "../../../GlobalComponent/PeopleSaySection.vue";
import OurSpeechesSection from "../../../GlobalComponent/OurSpeechesSection.vue";

export default {
  props: {
    event: Object,
  },
  components: {
    NavbarArea,
    CommonBanner,
    OurPrinciple,
    PeopleSaySection,
    OurSpeechesSection,
  },
  created: function () {
    this.fetchAllPrinciplesPageData();
  },
  methods: {
    ...mapActions(principles_store, ["fetchAllPrinciplesPageData"]),
  },
  computed: {
    ...mapState(principles_store, [
      "principles",
      "comments",
      "speeches",
    ]),
  },
};
</script>
