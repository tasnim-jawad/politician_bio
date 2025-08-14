<template>
  <Head :title="event.title" />
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Services'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Services', url: '/pages/services' },
    ]"
    key="services"
  />
  <!-- banner section End here -->

  <!-- Secrvices Single Section Start here -->
  <service-section
    :sectionTitle="'We provide a full range services for Our Country'"
    :sectionDescription="'Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.'"
    :serviceMarginTop="'0px'"
    :serviceMarginBottom="'90px'"
    v-if="services"
    :serviceItems="services"
  />
  <!-- Services Single Section Start here -->

  <!-- People say section-02 start here -->
  <people-say-section v-if="comments.length > 0" :comments="comments" />
  <!-- People say section-02 end here -->

  <!-- Project Planing Section Start Here -->
  <project-plan-section v-if="project_planings" :project_planings="project_planings"/>
  <!-- Project Planing Section Start Here -->

  <!-- News Section Start -->
  <News v-if="news" :lead_news="news.lead_news" :side_news="news.side_news" />
  <!-- News Section End  -->
</template>

<script>
import { Head } from "@inertiajs/vue3";
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import ServiceSection from "../../../GlobalComponent/ServiceSection.vue";
import PeopleSaySection from "../../../GlobalComponent/PeopleSaySection.vue";
import News from "../../../GlobalComponent/News.vue";
import ProjectPlanSection from "../../../GlobalComponent/ProjectPlanSection.vue";
import { store as service_store } from "./Store/service_store.js";
import { mapActions, mapWritableState } from "pinia";
export default {
  props: {
    event: Object,
  },
  components: {
    NavbarArea,
    CommonBanner,
    ServiceSection,
    PeopleSaySection,
    News,
    ProjectPlanSection,
  },
  created() {
    this.fetchAllServicesPageData();
  },
  methods: {
    ...mapActions(service_store, ["fetchAllServicesPageData"]),
  },
  computed: {
    ...mapWritableState(service_store, ["services", "comments", "project_planings", "news"]),
  },
};
</script>
