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
        <div class="col-md-6" v-for="(item, idx) in issues" :key="idx">
          <IssueItem
            :img="item.img"
            :title="item.title"
            :url="item.url"
            :desc="item.desc"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-7">
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
  <!-- Issuesd Around Us Section Start Here -->
</template>

<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import Pagination from "../../../CommonComponents/Pagination.vue";
import IssueItem from "./IssueItem.vue";
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
      issues: [
        {
          img: "/frontend/assets/img/modern-building.png",
          title: "Jobs and Economy",
          url: "/pages/issues/details",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          img: "/frontend/assets/img/doctors-check.png",
          title: "Medcare and Social Security",
          url: "/pages/issues/details",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          img: "/frontend/assets/img/community-services.png",
          title: "Environment",
          url: "/pages/issues/details",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          img: "/frontend/assets/img/balancing-budget.png",
          title: "Balancing the Budget",
          url: "/pages/issues/details",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          img: "/frontend/assets/img/criminal-judges.png",
          title: "Criminal Justice",
          url: "/pages/issues/details",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          img: "/frontend/assets/img/vaterans.png",
          title: "Veterans",
          url: "/pages/issues/details",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          img: "/frontend/assets/img/educaition.png",
          title: "Education",
          url: "/pages/issues/details",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          img: "/frontend/assets/img/feminist-02.png",
          title: "Women's Equality",
          url: "/pages/issues/details",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
      ],
    };
  },
};
</script>
