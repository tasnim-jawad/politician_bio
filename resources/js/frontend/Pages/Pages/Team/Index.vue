<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Our Team'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Our Team', url: '/pages/team' },
    ]"
    key="team"
  />
  <!-- banner section End here -->

  <!-- Volunteer Team Section Start here -->
  <team-section-area />
  <!-- Volunteer Team Section Start here -->

  <!-- Counter Section Start -->
  <at-a-glance />
  <!-- Counter Section End -->
</template>
<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import AtAGlance from "../../../GlobalComponent/AtAGlance.vue";
import TeamSectionArea from "./TeamSectionArea.vue";

export default {
  components: {
    NavbarArea,
    CommonBanner,
    AtAGlance,
    TeamSectionArea,
  },
};
</script>
