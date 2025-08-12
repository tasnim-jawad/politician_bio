<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Issues'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Issues', url: '/pages/issues' },
    ]"
    key="issues"
  />
  <!-- banner section End here -->

  <!-- Issuesd Around Us Section Start Here -->
  <div class="issues-around-us-section margin-top-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title wow animate__animated animate__fadeInUp">
              <a href="#">Issues Around Us</a>
            </h4>
            <p class="description wow animate__animated animate__fadeInUp">
              Every pleasures is to welcomed pain avoided owing to the duty the
              obligations of business it will frequently.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="(item, idx) in issues?.data?.data" :key="idx">
          <IssueItem
            :item="item"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-12">
          <Pagination 
            :currentPage="issues?.data?.current_page || 1"
            :totalPages="issues?.data?.last_page || 1"
            @prev="goToPage(issues?.data?.current_page - 1)"
            @next="goToPage(issues?.data?.current_page + 1)"
            @change="goToPage"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Issuesd Around Us Section Start Here -->
</template>

<script>
import { Head } from "@inertiajs/vue3";
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import Pagination from "../../../CommonComponents/Pagination.vue";
import IssueItem from "./IssueItem.vue";

import { mapActions, mapState } from "pinia";
import { store as issues_store } from "./Store/issues_store.js";

export default {
  components: {
    NavbarArea,
    CommonBanner,
    Pagination,
    IssueItem,
  },
  data() {
    return {
      current: 1,
      // issues: [
      //   {
      //     img: "/frontend/assets/img/modern-building.png",
      //     title: "Jobs and Economy",
      //     url: "/pages/issues/details",
      //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   },
      //   {
      //     img: "/frontend/assets/img/doctors-check.png",
      //     title: "Medcare and Social Security",
      //     url: "/pages/issues/details",
      //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   },
      //   {
      //     img: "/frontend/assets/img/community-services.png",
      //     title: "Environment",
      //     url: "/pages/issues/details",
      //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   },
      //   {
      //     img: "/frontend/assets/img/balancing-budget.png",
      //     title: "Balancing the Budget",
      //     url: "/pages/issues/details",
      //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   },
      //   {
      //     img: "/frontend/assets/img/criminal-judges.png",
      //     title: "Criminal Justice",
      //     url: "/pages/issues/details",
      //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   },
      //   {
      //     img: "/frontend/assets/img/vaterans.png",
      //     title: "Veterans",
      //     url: "/pages/issues/details",
      //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   },
      //   {
      //     img: "/frontend/assets/img/educaition.png",
      //     title: "Education",
      //     url: "/pages/issues/details",
      //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   },
      //   {
      //     img: "/frontend/assets/img/feminist-02.png",
      //     title: "Women's Equality",
      //     url: "/pages/issues/details",
      //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   },
      // ],
    };
  },
  watched: {
    issues: {
      handler(newVal) {
        console.log("newVal page updated to:", this.issues);
        if (newVal && newVal.data && newVal.data.length > 0) {
          this.current = newVal.current_page || 1;
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(issues_store, ["fetchAllIssuesPageData"]),
    goToPage(page) {
      console.log("Going to page:", page);
      if (page < 1 || page > (this.issues.data.last_page || 1)) return;
      this.fetchAllIssuesPageData({ page });
    },
  },
  created: async function () {
    await this.fetchAllIssuesPageData();
  },
  computed: {
    ...mapState(issues_store, ["issues"]),
  },
};
</script>
