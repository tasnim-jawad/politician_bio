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
      <div class="row">
        <div class="col-lg-6">
          <donation-single-item
            img="frontend/assets/img/donation-01.png"
            title="Donate to Help Us Get a Professional Politic"
            detailsUrl="/donation/details"
            raised="12,100"
            goal="40,300"
            unit="$"
          />
        </div>
        <div class="col-lg-6">
          <donation-single-item
            img="frontend/assets/img/dontaion-02.png"
            title="Medcare and Social Security"
            detailsUrl="/donation/details"
            raised="13,300"
            goal="40,300"
            unit="$"
          />
        </div>
        <div class="col-lg-6">
          <donation-single-item
            img="frontend/assets/img/dontion-03.png"
            title="Environment"
            detailsUrl="/donation/details"
            raised="17,300"
            goal="40,300"
            unit="$"
          />
        </div>
        <div class="col-lg-6">
          <donation-single-item
            img="frontend/assets/img/dontion-04.png"
            title="Balancing the Budget"
            detailsUrl="/donation/details"
            raised="33,300"
            goal="40,300"
            unit="$"
          />
        </div>
        <div class="col-lg-6">
          <donation-single-item
            img="frontend/assets/img/dontion-05.png"
            title="Criminal Justice"
            detailsUrl="/donation/details"
            raised="20,300"
            goal="40,300"
            unit="$"
          />
        </div>
        <div class="col-lg-6">
          <donation-single-item
            img="frontend/assets/img/dontion-06.png"
            title="Veterans"
            detailsUrl="/donation/details"
            raised="37,300"
            goal="40,300"
            unit="$"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-9 col-12">
          <Pagination
            :currentPage="current"
            :totalPages="4"
            @prev="current--"
            @next="current++"
            @change="(page) => (current = page)"
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

export default {
  components: {
    NavbarArea,
    Pagination,
    DonationSingleItem,
    Donation,
    CommonBanner,
  },
  data() {
    return {
      current: 3, // This is the current page
    };
  },
};
</script>
