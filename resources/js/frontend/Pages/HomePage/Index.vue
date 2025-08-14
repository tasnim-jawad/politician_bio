<template>
  
  <Head :title="event.title">
    <meta
      head-key="description"
      name="description"
      :content="event.meta.description"
    />
  </Head>
  <!-- Header Single Section Start here -->
  <!-- Header Single Section Start here -->
  <div class="header-style-05">
    <!-- Mobile Supported Navbar Start -->
    <Header />
    <!-- Mobile Supported Navbar End -->
    <!-- Banner Section Area Start Here -->
    <!-- Banner Section Area Start Here -->
    <Suspense>
      <template #default>
        <BannerSection v-if="banner" :data="banner" />
      </template>
      <template #fallback>
        <div class="banner-skeleton">Loading banner...</div>
      </template>
    </Suspense>
    <!-- Banner Section Area End Here -->
    <!-- Banner Section Area End Here -->
  </div>
  <!-- Header Single Section Start here -->
  <!-- Header Single Section Start here -->

  <!-- Services Single Section Start here -->
  <!-- Services Single Section Start here -->
  <div ref="servicesSection">
    <Suspense>
      <template #default>
        <ServiceSection
          v-if="isServicesVisible && services.length > 0"
          :serviceMarginTop="'100px'"
          :serviceItems="services"
        />
      </template>
      <template #fallback>
        <div class="section-skeleton">Loading services...</div>
      </template>
    </Suspense>
  </div>
  <!-- Services Single Section Start here -->
  <!-- Services Single Section Start here -->

  <!-- Why Choose us secion Start here -->
  <!-- Why Choose us secion Start here -->
  <div ref="whyChooseSection">
    <Suspense>
      <template #default>
        <WhyChoseUs
          v-if="isWhyChooseVisible"
          :position="'right'"
          :main-bg="'/frontend/assets/img/group-activity-02.png'"
          :side-bg="'/frontend/assets/img/ceo.png'"
          :whyChooseItems="whyChoseUs"
        />
      </template>
      <template #fallback>
        <div class="section-skeleton">Loading why choose us...</div>
      </template>
    </Suspense>
  </div>
  <!-- Why Choose us secion End here -->
  <!-- Why Choose us secion End here -->

  <!-- Our Principle Section Start here -->
  <!-- Our Principle Section Start here -->
  <div ref="principlesSection">
    <Suspense>
      <template #default>
        <OurPrinciple
          v-if="isPrinciplesVisible && principles.length > 0"
          :principleItems="principles"
        />
      </template>
      <template #fallback>
        <div class="section-skeleton">Loading principles...</div>
      </template>
    </Suspense>
  </div>
  <!-- Our Principle Section End here -->
  <!-- Our Principle Section End here -->

  <!-- Our Journey Section Start Here -->
  <!-- Our Journey Section Start Here -->
  <div ref="journeySection">
    <Suspense>
      <template #default>
        <OurJourney
          v-if="isJourneyVisible && ourJourney.length > 0"
          :journeyItems="ourJourney"
        />
      </template>
      <template #fallback>
        <div class="section-skeleton">Loading journey...</div>
      </template>
    </Suspense>
  </div>
  <!-- Our Journey Section End Here -->
  <!-- Our Journey Section End Here -->

  <!-- Media section Start here -->
  <!-- Media section Start here -->
  <div ref="mediaSection">
    <Suspense>
      <template #default>
        <MediaCoverage
          v-if="isMediaVisible && mediaCoverages"
          :mediaItems="mediaCoverages"
        />
      </template>
      <template #fallback>
        <div class="section-skeleton">Loading media coverage...</div>
      </template>
    </Suspense>
  </div>
  <!-- Media section end here -->
  <!-- Media section end here -->

  <!-- Donation Section Start -->
  <!-- Donation Section Start -->
  <div ref="donationSection">
    <Suspense>
      <template #default>
        <Donation v-if="isDonationVisible" />
      </template>
      <template #fallback>
        <div class="section-skeleton">Loading donation...</div>
      </template>
    </Suspense>
  </div>
  <!-- Donation Section End -->
  <!-- Donation Section End -->

  <!-- Testimonial Section-02 Start -->
  <!-- Testimonial Section-02 Start -->
  <div ref="testimonialSection">
    <Suspense>
      <template #default>
        <Testimonial
          v-if="isTestimonialVisible && comments"
          :comments="comments"
        />
      </template>
      <template #fallback>
        <div class="section-skeleton">Loading testimonials...</div>
      </template>
    </Suspense>
  </div>
  <!-- Testimonial Secition-02 End -->
  <!-- Testimonial Secition-02 End -->

  <!-- News Section Start -->
  <!-- News Section Start -->
  <div ref="newsSection">
    <Suspense>
      <template #default>
        <News
          v-if="isNewsVisible && news"
          :lead_news="news.lead_news"
          :side_news="news.side_news"
        />
      </template>
      <template #fallback>
        <div class="section-skeleton">Loading news...</div>
      </template>
    </Suspense>
  </div>
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
import { defineAsyncComponent } from "vue";

// Critical components loaded immediately
import Header from "../../Shared/Header.vue";
import BackToTop from "../../CommonComponents/BackToTop.vue";
import VotePooll from "../../CommonComponents/VotePooll.vue";

// Lazy loaded components
const BannerSection = defineAsyncComponent(() =>
  import("./Components/BannerSection.vue")
);
const ServiceSection = defineAsyncComponent(() =>
  import("../../GlobalComponent/ServiceSection.vue")
);
const Donation = defineAsyncComponent(() =>
  import("../../GlobalComponent/Donation.vue")
);
const MediaCoverage = defineAsyncComponent(() =>
  import("../../GlobalComponent/MediaCoverage.vue")
);
const News = defineAsyncComponent(() =>
  import("../../GlobalComponent/News.vue")
);
const OurJourney = defineAsyncComponent(() =>
  import("../../GlobalComponent/OurJourney.vue")
);
const OurPrinciple = defineAsyncComponent(() =>
  import("../../GlobalComponent/OurPrinciple.vue")
);
const Testimonial = defineAsyncComponent(() =>
  import("../../GlobalComponent/Testimonial.vue")
);
const WhyChoseUs = defineAsyncComponent(() =>
  import("../../GlobalComponent/WhyChoseUs.vue")
);

import { mapActions, mapState } from "pinia";

export default {
  props: {
    event: Object,
    data: Object,
  },

  components: {
    Head,
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
    VotePooll,
    BackToTop,
  },
  data() {
    return {
      isServicesVisible: false,
      isWhyChooseVisible: false,
      isPrinciplesVisible: false,
      isJourneyVisible: false,
      isMediaVisible: false,
      isDonationVisible: false,
      isTestimonialVisible: false,
      isNewsVisible: false,
      observer: null,
    };
  },
  methods: {
    ...mapActions(home_page_store, ["fetchAllHomePageData"]),

    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: "150px",
        threshold: 0.1,
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;

            switch (target) {
              case this.$refs.servicesSection:
                this.isServicesVisible = true;
                break;
              case this.$refs.whyChooseSection:
                this.isWhyChooseVisible = true;
                break;
              case this.$refs.principlesSection:
                this.isPrinciplesVisible = true;
                break;
              case this.$refs.journeySection:
                this.isJourneyVisible = true;
                break;
              case this.$refs.mediaSection:
                this.isMediaVisible = true;
                break;
              case this.$refs.donationSection:
                this.isDonationVisible = true;
                break;
              case this.$refs.testimonialSection:
                this.isTestimonialVisible = true;
                break;
              case this.$refs.newsSection:
                this.isNewsVisible = true;
                break;
            }

            // Unobserve after triggering to save resources
            this.observer.unobserve(target);
          }
        });
      };

      this.observer = new IntersectionObserver(observerCallback, options);
    },

    observeElements() {
      const sections = [
        this.$refs.servicesSection,
        this.$refs.whyChooseSection,
        this.$refs.principlesSection,
        this.$refs.journeySection,
        this.$refs.mediaSection,
        this.$refs.donationSection,
        this.$refs.testimonialSection,
        this.$refs.newsSection,
      ];

      sections.forEach((section) => {
        if (section) {
          this.observer.observe(section);
        }
      });
    },
  },

  async created() {
    // Load critical data immediately
    await this.fetchAllHomePageData();
  },

  mounted() {
    // Setup intersection observer for lazy loading
    this.setupIntersectionObserver();
    this.$nextTick(() => {
      this.observeElements();
    });
  },

  beforeUnmount() {
    // Cleanup observers
    if (this.observer) {
      this.observer.disconnect();
    }
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

<style scoped>
.banner-skeleton,
.section-skeleton {
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 8px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 16px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Global image optimization */
:deep(img) {
  content-visibility: auto;
  contain-intrinsic-size: 300px 200px;
  transition: opacity 0.3s ease;
}

/* Optimize image containers */
:deep(.image-container) {
  position: relative;
  overflow: hidden;
}

/* Add loading states for images */
:deep(.image-loading) {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

/* Section visibility animation */
.section-enter-active {
  transition: all 0.3s ease-out;
}

.section-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.section-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
