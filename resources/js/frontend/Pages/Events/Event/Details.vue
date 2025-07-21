<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Event details'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Events', url: '/events/event' },
      { text: 'Event details', url: '/events/event/details' },
    ]"
    key="event_details"
  />
  <!-- banner section End here -->

  <!-- Event Content Section Start here -->
  <event-banner-section />
  <!-- Event Content Section Start here -->

  <!-- speaker Section Start Here -->
  <speaker-slider :speakers="speakers" />
  <!-- speaker Section End Here -->

  <!-- Event Facilities Section Star Here -->
  <event-facilities-section />
  <!-- Event Event Section End Here -->
  <!-- More Issue Section Start Here -->
  <event-slider />
  <!-- More Event Section Start Here -->
</template>
<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import MyCountdown from "./components/MyCountdown.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import EventBannerSection from "./components/EventBannerSection.vue";
import SpeakerSlider from "../../../GlobalComponent/SpeakerSlider.vue";
import EventFacilitiesSection from "./components/EventFacilitiesSection.vue";
import EventSlider from "../../../GlobalComponent/EventSlider.vue";

export default {
  components: {
    NavbarArea,
    MyCountdown,
    CommonBanner,
    EventBannerSection,
    SpeakerSlider,
    EventFacilitiesSection,
    EventSlider,
  },
  data() {
    return {
      speakers: [
        {
          img: "/frontend/assets/img/member-01.png",
          name: "Pier Goodman",
          designation: "PARTY SECRETERY",
          socials: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" },
            { icon: "fab fa-youtube", url: "#" },
          ],
        },
        {
          img: "/frontend/assets/img/member-02.png",
          name: "Pier Goodman",
          designation: "PARTY SECRETERY",
          socials: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" },
            { icon: "fab fa-youtube", url: "#" },
          ],
        },
        {
          img: "/frontend/assets/img/member-03.png",
          name: "Pier Goodman",
          designation: "PARTY SECRETERY",
          socials: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" },
            { icon: "fab fa-youtube", url: "#" },
          ],
        },
      ],
    };
  },
};
</script>
