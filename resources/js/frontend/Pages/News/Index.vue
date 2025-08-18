<template>
  <Head :title="event?.title" />
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'News'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'News', url: '/news' },
    ]"
    key="news"
  />
  <!-- banner section End here -->

  <!-- blog items Section Start Here -->
  <div class="issues-around-us-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title">Read Our Daily blog</h4>

            <p class="description wow animate__ animate__fadeInUp animated">
              Every pleasures is to welcomed pain avoided owing to the duty the
              obligations of business it will frequently.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div
              class="col-lg-6 col-md-6"
              v-for="(item, idx) in news?.data?.data"
              :key="idx"
            >
              <NewsSingleItem :item="item" />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="widget-area">
            <!-- Show current filter -->
            <div
              v-if="currentFilter.type === 'tag'"
              class="current-filter mb-3"
            >
              <span class="w-100 text-start">
                Filtered by tag:
                <span class="badge badge-primary text-white">{{
                  currentFilter.tag_name
                }}</span>
                <button
                  @click="clearFilter"
                  class="btn btn-outline-danger btn-sm p-1 ml-2 square-close-btn"
                >
                  ×
                </button>
              </span>
            </div>
            <!-- Search section -->
            <SearchSection />
            <!-- Search section -->
            <!-- Recent posts section -->
            <RecentPostSection v-if="recent_news" :news="recent_news" />
            <!-- Recent posts section -->

            <!-- Category section -->
            <CategorySection />
            <!-- Category section -->
            <!-- Tags section -->
            <TagsSection />
            <!-- Tags section -->
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-12">
          <Pagination
            :currentPage="news?.data?.current_page || 1"
            :totalPages="news?.data?.last_page || 1"
            @prev="handlePageChange(news?.data?.current_page - 1)"
            @next="handlePageChange(news?.data?.current_page + 1)"
            @change="handlePageChange"
            :shape="'squer'"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- blog Items Section Start Here -->
</template>
<script>
import { Link } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import NavbarArea from "../../CommonComponents/NavbarArea.vue";
import NewsSingleItem from "./components/NewsSingleItem.vue";
import RecentPostSection from "./components/RecentPostSection.vue";
import CommonBanner from "../../CommonComponents/CommonBanner.vue";
import CategorySection from "./components/CategorySection.vue";
import TagsSection from "./components/TagsSection.vue";
import SearchSection from "./components/SearchSection.vue";
import Pagination from "../../CommonComponents/Pagination.vue";

import { mapActions, mapState } from "pinia";
import { store as news_store } from "./Store/news_store.js";

export default {
  props: {
    event: Object,
  },
  components: {
    NavbarArea,
    NewsSingleItem,
    RecentPostSection,
    CommonBanner,
    CategorySection,
    TagsSection,
    SearchSection,
    Pagination,
  },
  data() {
    return {
      current: 1,
      // newsItems: [
      //   {
      //     bg: "/frontend/assets/img/businessmen-shaking-hands.png",
      //     title: "Many important brands have given us their trust",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      //   {
      //     bg: "/frontend/assets/img/partners-shaking-hands.png",
      //     title: "Are Military Coups Back in Style in Africa?",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      //   {
      //     bg: "/frontend/assets/img/head-office.png",
      //     title: "Leadership Forum Empowers Around the World",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      //   {
      //     bg: "/frontend/assets/img/perlament-session.png",
      //     title: "Negotiating with TTP—A Different Perspective",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      //   {
      //     bg: "/frontend/assets/img/interview.png",
      //     title: "Donald Rumsfeld: Anti–Nation- Builder",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      //   {
      //     bg: "/frontend/assets/img/perlament.png",
      //     title: "Trying to Manage North Korean Instability Risks",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      //   {
      //     bg: "/frontend/assets/img/perlament-02.png",
      //     title: "Policing in the Post-Floyd Era",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      //   {
      //     bg: "/frontend/assets/img/speach.png",
      //     title: "The USPS Is a Public Service, Not a Business",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      //   {
      //     bg: "/frontend/assets/img/visitor.png",
      //     title: "Biden's China Reset Is Already on the Ropes",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      //   {
      //     bg: "/frontend/assets/img/political-rally.png",
      //     title: "Myanmar's Coup and Its Recent Elections: Institutions",
      //     url: "/news/details",
      //     author: "Smith Roy",
      //     date: "24th March,2021",
      //   },
      // ],
    };
  },
  watched: {
    news: {
      handler(newVal) {
        console.log("newVal page updated to:", this.news);
        if (newVal && newVal.data && newVal.data.length > 0) {
          this.current = newVal.current_page || 1;
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(news_store, [
      "fetchAllNewsPageData",
      "goToPage",
      "filterByTag",
      "filterByCategory",
      "clearFilter",

    ]),
    handlePageChange(page) {
      console.log("Going to page:", page);
      if (page < 1 || page > (this.news.data.last_page || 1)) return;
      this.goToPage(page);
    },
  },
  created: async function () {
    await this.fetchAllNewsPageData();
  },
  computed: {
    ...mapState(news_store, ["news", "tags", "categories", "currentFilter", "recent_news"]),
  },
};
</script>

<style scoped>
.square-close-btn {
  width: 20px;
  height: 20px;
  border-radius: 0;
  font-size: 12px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}
</style>
