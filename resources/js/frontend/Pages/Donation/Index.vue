<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Donations'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Donations', url: '/donation' },
    ]"
    key="donation"
  />
  <!-- banner section End here -->

  <!-- Dontaion items Section Start Here -->
  <div class="issues-around-us-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title wow animate__animated animate__fadeInUp">
              Donation Programs
            </h4>
            <p class="description wow animate__animated animate__fadeInUp">
              Every pleasures is to welcomed pain avoided owing to the duty the
              obligations of business it will frequently.
            </p>
          </div>
        </div>
      </div>
      <!-- <p>{{ donations.data.last_page }}</p> -->
      <div class="row">
        <div
          class="col-lg-6"
          v-for="(donation,index) in donations.data.data"
          :key="index"
        >
          <donation-single-item
            :img="donation.banner_image || 'uploads/default.jpg'"
            :title="donation.title"
            :slug="donation.slug"
            :raised="donation.achived"
            :goal="donation.target"
            :unit="donation.unit || '$'"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-12">
          <Pagination 
            :currentPage="donations.data.current_page || 1"
            :totalPages="donations.data.last_page || 1"
            @prev="goToPage(donations.data.current_page - 1)"
            @next="goToPage(donations.data.current_page + 1)"
            @change="goToPage"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Donation Items Section Start Here -->
</template>
<script>
import NavbarArea from "../../CommonComponents/NavbarArea.vue";
import Pagination from "../../CommonComponents/Pagination.vue";
import Donation from "../../GlobalComponent/Donation.vue";
import DonationSingleItem from "./components/DonationSingleItem.vue";
import CommonBanner from "../../CommonComponents/CommonBanner.vue";
import { mapActions, mapState } from "pinia";
import { store as donation_store } from "./Store/donation_store.js";

export default {
  props: {
    event: Object,
  },
  components: {
    NavbarArea,
    Pagination,
    DonationSingleItem,
    Donation,
    CommonBanner,
  },
  data() {
    return {
      // current: 1, // Not needed, handled by store
    };
  },
  watched: {
    donations: {
      handler(newVal) {
        console.log("newVal page updated to:", this.donations);
        if (newVal && newVal.data && newVal.data.length > 0) {
          this.current = newVal.current_page || 1;
          
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(donation_store, ["fetchAllDonationPageData"]),
    goToPage(page) {
      console.log("Going to page:", page);
      if (page < 1 || page > (this.donations.data.last_page || 1)) return;
      this.fetchAllDonationPageData({ page });
    },
  },
  created:async function () {
    await this.fetchAllDonationPageData();
  },
  computed: {
    ...mapState(donation_store, [
      "donations",
      "loading", 
      "error"
    ]),
  },
};
</script>
