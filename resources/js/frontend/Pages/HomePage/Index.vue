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
    <BannerSection :data="data.banner" />
    <!-- Banner Section Area End Here -->
    <!-- Banner Section Area End Here -->
  </div>
  <!-- Header Single Section Start here -->
  <!-- Header Single Section Start here -->

  <!-- Services Single Section Start here -->
  <!-- Services Single Section Start here -->
  <ServiceSection
    :serviceMarginTop="'100px'"
    :serviceItems="data.services"
  />
  <!-- Services Single Section Start here -->
  <!-- Services Single Section Start here -->

  <!-- Why Choose us secion Start here -->
  <!-- Why Choose us secion Start here -->
  <why-chose-us
    :position="'right'"
    :main-bg="'/frontend/assets/img/group-activity-02.png'"
    :side-bg="'/frontend/assets/img/ceo.png'"
    :whyChooseItems="data.why_chose_us"
  />
  <!-- Why Choose us secion End here -->
  <!-- Why Choose us secion End here -->

  <!-- Our Principle Section Start here -->
  <!-- Our Principle Section Start here -->
  <OurPrinciple />
  <!-- Our Principle Section End here -->
  <!-- Our Principle Section End here -->

  <!-- Our Journey Section Start Here -->
  <!-- Our Journey Section Start Here -->
  <OurJourney />
  <!-- Our Journey Section End Here -->
  <!-- Our Journey Section End Here -->

  <!-- Media section Start here -->
  <!-- Media section Start here -->
  <MediaCoverage />
  <!-- Media section end here -->
  <!-- Media section end here -->

  <!-- Donation Section Start -->
  <!-- Donation Section Start -->
  <Donation />
  <!-- Donation Section End -->
  <!-- Donation Section End -->

  <!-- Testimonial Section-02 Start -->
  <!-- Testimonial Section-02 Start -->
  <Testimonial />
  <!-- Testimonial Secition-02 End -->
  <!-- Testimonial Secition-02 End -->

  <!-- News Section Start -->
  <!-- News Section Start -->
  <News />
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
};
</script>

<style scoped></style>
