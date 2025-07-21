<template>
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
  <about-us-section />
  <!-- AboutUs Section End Here -->

  <!-- Why Choose us secion Start here -->
  <why-choose-us
    :position="'right'"
    :main-bg="'/frontend/assets/img/group-activity-02.png'"
    :side-bg="'/frontend/assets/img/ceo.png'"
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
import AboutUsSection from "./Components/AboutUsSection.vue";

// Common Components
import NavbarArea from "../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../CommonComponents/CommonBanner.vue";
//Global Components
import WhyChooseUs from "../../GlobalComponent/WhyChoseUs.vue";
import AtAGlance from "../../GlobalComponent/AtAGlance.vue";
import MissionVision from "../../GlobalComponent/MissionVision.vue";
import VolunteerSection from "../../GlobalComponent/VolunteerSection.vue";

export default {
  components: {
    NavbarArea,
    CommonBanner,
    AboutUsSection,
    AtAGlance,
    MissionVision,
    VolunteerSection,
    WhyChooseUs,
  },
};
</script>
