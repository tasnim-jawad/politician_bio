<template>
  <Head :title="event.title" />
  <!-- Header Single Section Start here -->
  <!-- Header Single Section Start here -->
  <div class="header-style-05">
    <!-- Mobile Supported Navbar Start -->
    <Header />
    <!-- Mobile Supported Navbar End -->
    <!-- Banner Section Area Start Here -->
    <!-- Banner Section Area Start Here -->
    <BannerSection v-if="banner" :data="banner" />
    <!-- Banner Section Area End Here -->
    <!-- Banner Section Area End Here -->
  </div>
  <!-- Header Single Section Start here -->
  <!-- Header Single Section Start here -->

  <!-- Services Single Section Start here -->
  <!-- Services Single Section Start here -->
  <ServiceSection
    :serviceMarginTop="'100px'"
    v-if="services.length > 0"
    :serviceItems="services"
  />
  <!-- Services Single Section Start here -->
  <!-- Services Single Section Start here -->

  <!-- Why Choose us secion Start here -->
  <!-- Why Choose us secion Start here -->
  <why-chose-us
    :position="'right'"
    :main-bg="'/frontend/assets/img/group-activity-02.png'"
    :side-bg="'/frontend/assets/img/ceo.png'"
    :whyChooseItems="whyChoseUs"
  />
  <!-- Why Choose us secion End here -->
  <!-- Why Choose us secion End here -->

  <!-- Our Principle Section Start here -->
  <!-- Our Principle Section Start here -->
  <OurPrinciple v-if="principles.length > 0" :principleItems="principles" />
  <!-- Our Principle Section End here -->
  <!-- Our Principle Section End here -->

  <!-- Our Journey Section Start Here -->
  <!-- Our Journey Section Start Here -->
  <OurJourney v-if="ourJourney.length > 0" :journeyItems="ourJourney" />
  <!-- Our Journey Section End Here -->
  <!-- Our Journey Section End Here -->

  <!-- Media section Start here -->
  <!-- Media section Start here -->
  <MediaCoverage
    v-if="mediaCoverages"
    :mediaItems="mediaCoverages"
  />
  <!-- Media section end here -->
  <!-- Media section end here -->

  <!-- Donation Section Start -->
  <!-- Donation Section Start -->
  <Donation />
  <!-- Donation Section End -->
  <!-- Donation Section End -->

  <!-- Testimonial Section-02 Start -->
  <!-- Testimonial Section-02 Start -->
  <Testimonial v-if="comments" :comments="comments" />
  <!-- Testimonial Secition-02 End -->
  <!-- Testimonial Secition-02 End -->

  <!-- News Section Start -->
  <!-- News Section Start -->
  <News v-if="news" :lead_news="news.lead_news" :side_news="news.side_news"/>
  <!-- News Section End  -->
  <!-- News Section End  -->

  <!-- back to top area start -->
  <!-- back to top area start -->
  <BackToTop />
  <!-- back to top area end -->
  <!-- back to top area end -->

  <!-- Vote poll start here -->
  <!-- Vote poll start here -->
  <VotePooll />
  <!-- Vote poll start here -->
  <!-- Vote poll start here -->
</template>

<script>
import { store as home_page_store } from "./Store/home_page_store.js";

import { Head } from "@inertiajs/vue3";
import BannerSection from "./Components/BannerSection.vue";
// Common Components
import BackToTop from "../../CommonComponents/BackToTop.vue";
import VotePooll from "../../CommonComponents/VotePooll.vue";
// Shared components
import Footer from "../../Shared/Footer.vue";
import Header from "../../Shared/Header.vue";
//global components
import Donation from "../../GlobalComponent/Donation.vue";
import MediaCoverage from "../../GlobalComponent/MediaCoverage.vue";
import News from "../../GlobalComponent/News.vue";
import OurJourney from "../../GlobalComponent/OurJourney.vue";
import OurPrinciple from "../../GlobalComponent/OurPrinciple.vue";
import ServiceSection from "../../GlobalComponent/ServiceSection.vue";
import Testimonial from "../../GlobalComponent/Testimonial.vue";
import WhyChoseUs from "../../GlobalComponent/WhyChoseUs.vue";
import { mapActions, mapState } from "pinia";
import { Comment } from "vue";

export default {
  props: {
    event: Object,
    data: Object,
  },
  components: {
    Header,
    BannerSection,
    ServiceSection,
    Donation,
    OurPrinciple,
    OurJourney,
    MediaCoverage,
    Testimonial,
    WhyChoseUs,
    News,
    Footer,
    VotePooll,
    BackToTop,
  },
  methods: {
    ...mapActions(home_page_store, ["fetchAllHomePageData"]),
  },
  created: function () {
    this.fetchAllHomePageData();
  },
  computed: {
    ...mapState(home_page_store, [
      "banner",
      "services",
      "whyChoseUs",
      "principles",
      "ourJourney",
      "mediaCoverages",
      "comments",
      "news",
      "loading",
      "error",
    ]),
  },
};
</script>

<style scoped></style>
