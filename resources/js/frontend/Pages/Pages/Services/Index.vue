<template>
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
  />
  <!-- Services Single Section Start here -->

  <!-- People say section-02 start here -->
  <people-say-section />
  <!-- People say section-02 end here -->

  <!-- Project Planing Section Start Here -->
  <project-plan-section />
  <!-- Project Planing Section Start Here -->

  <!-- News Section Start -->
  <news />
  <!-- News Section End  -->
</template>

<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import ServiceSection from "../../../GlobalComponent/ServiceSection.vue";
import PeopleSaySection from "../../../GlobalComponent/PeopleSaySection.vue";
import News from "../../../GlobalComponent/News.vue";
import ProjectPlanSection from "../../../GlobalComponent/ProjectPlanSection.vue";
export default {
  components: {
    NavbarArea,
    CommonBanner,
    ServiceSection,
    PeopleSaySection,
    News,
    ProjectPlanSection,
  },
};
</script>
