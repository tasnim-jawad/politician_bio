<template>
  <div class="more-issue-section style-02">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title style-02 wow animate__animated animate__fadeInUp">
              More Donation Programs
            </h4>
            <p
              class="description style-02 wow animate__animated animate__fadeInUp"
            >
              Every pleasures is to welcomed pain avoided owing to the duty the
              obligations of business it will frequently.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="testimonial-carousel-six">
          <div
            class="issues-single-items home-six"
            v-for="(donation, index) in donations.data.data"
            :key="index"
          >
            <div
              class="issue-img"
              :style="{
                backgroundImage: `url(/${
                  donation?.banner_image || 'uploads/default.jpg'
                })`,
              }"
            >
              <div class="content">
                <h4 class="title">
                  <Link :href="`/donation/details?slug=${donation?.slug}`"
                    >{{ donation?.title }}</Link
                  >
                  <!-- {{ donation?.title }} -->
                </h4>
                <div class="progress-content">
                  <div class="progress-item">
                    <div class="single-progressbar">
                      <div class="html"></div>
                    </div>
                  </div>
                  <div class="goal">
                    <h4 class="raised">Raised : {{ donation?.achived }} /=</h4>
                    <h4 class="raised">Goal : {{ donation?.target }} /=</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { store as donationStore } from "../Pages/Donation/Store/donation_store";
export default {
  name: "MoreDonationProgramsSection",
  created: async function () {
    await this.fetch_donations();
  },
  methods: {
    ...mapActions(donationStore, ["fetch_donations"]),
  },
  computed: {
    ...mapWritableState(donationStore, ["donations"]),
  },
  mounted() {
    this.initTestimonialCarousel();
  },
  updated() {
    this.initTestimonialCarousel();
  },
  methods: {
    ...mapActions(donationStore, ["fetch_donations"]),
    initTestimonialCarousel() {
      if (window.$ && window.$.fn.owlCarousel) {
        const $TestimonialCarousel = window.$(".testimonial-carousel-six");
        if ($TestimonialCarousel.length > 0) {
          $TestimonialCarousel.trigger("destroy.owl.carousel");
          $TestimonialCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            autoPlayTimeout: 1000,
            margin: 30,
            items: 2,
            dots: false,
            nav: true,
            navText: [
              '<i class="fa fa-angle-left"></i>',
              '<i class="fa fa-angle-right"></i>',
            ],
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            responsive: {
              0: { items: 1 },
              460: { items: 1 },
              599: { items: 1 },
              768: { items: 1 },
              960: { items: 2 },
              1200: { items: 2 },
            },
          });
        }
      }
    },
  },
};
</script>

<style scoped>
/* Add section-specific styles here if needed */
</style>
