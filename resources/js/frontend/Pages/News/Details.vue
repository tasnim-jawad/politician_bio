<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'News Details'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'News', url: '/pages/news' },
      { text: 'News Details', url: '/pages/news/details' },
    ]"
    key="news_details"
  />
  <!-- banner section End here -->

  <!-- blog items Section Start Here -->
  <div class="issues-around-us-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="blog-details-items">
            <div class="thumb">
              <img
                :src="`/${news_details?.banner_image}`"
                alt="blog"
                class="news-banner-image"
              />
            </div>
            <div class="blog-details-item-header">
              <h6>{{ news_details?.news_category_id?.title }}</h6>
            </div>
            <h2 class="title">
              {{ news_details?.title }}
            </h2>
            <div v-html="news_details?.content" class="mb-4"></div>
          </div>
          <div class="blog-details-footer">
            <ul class="tags">
              <li class="title">Tags:</li>
              <li v-if="news_details?.tags">
                <span
                  v-for="(tag, index) in getTagsList"
                  :key="index"
                  class="tag-item"
                >
                  {{ tag.trim() }}
                </span>
              </li>
              <li v-else>
                <span class="tag-item">No tags available</span>
              </li>
            </ul>
          </div>
          <div class="blog-single-pagination">
            <ul>
              <li v-if="prevNews">
                <Link
                  class="next page-numbers"
                  :href="`/news/details?slug=${prevNews.slug}`"
                >
                  <i class="fas fa-arrow-left"></i>Previous News
                </Link>
              </li>
              <li v-else>
                <span class="next page-numbers disabled">
                  <i class="fas fa-arrow-left"></i>Previous News
                </span>
              </li>
              <li>
                <Link href="/news">
                  <img src="/frontend/assets/icon/Repeat-Grid.svg" alt="" />
                </Link>
              </li>
              <li v-if="nextNews">
                <Link
                  class="next page-numbers"
                  :href="`/news/details?slug=${nextNews.slug}`"
                >
                  Next News<i class="fas fa-arrow-right"></i>
                </Link>
              </li>
              <li v-else>
                <span class="next page-numbers disabled">
                  Next News<i class="fas fa-arrow-right"></i>
                </span>
              </li>
            </ul>
          </div>

          <!-- Top Related Section Start Here -->
          <!-- Top Related Section Start Here -->
          <NewsSlider
            :title="`Related News`"
            :news="related_news"
            v-if="related_news && related_news.length > 0"
          />
          <div
            v-else-if="news_details?.news_category_id?.id"
            class="no-related-news"
          >
            <p>
              No related news found in category:
              {{ news_details?.news_category_id?.title }}
            </p>
            <p>Debug - Category ID: {{ news_details?.news_category_id?.id }}</p>
            <p>Debug - Related news array: {{ related_news }}</p>
          </div>
          <!-- Top Related Section End Here -->
          <!-- Top Related Section End Here -->

          <!-- Comment Form Section Start Here -->
          <!-- Comment Form Section Start Here -->
          <comment-form-section />
          <!-- Comment Form Section End Here -->
          <!-- Comment Form Section End Here -->
        </div>
        <div class="col-lg-4">
          <div class="widget-area">
            <!-- Search section -->
            <SearchSection />
            <!-- Search section -->
            <!-- Recent posts section -->
            <RecentPostSection v-if="recent_news" :news="recent_news" />
            <!-- Recent posts section -->

            <!-- Category section -->
            <!-- <CategorySection /> -->
            <!-- Category section -->
            <!-- Tags section -->
            <!-- <TagsSection /> -->
            <!-- Tags section -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- blog Items Section Start Here -->
</template>
<script>
import { Head } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
import NavbarArea from "../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../CommonComponents/CommonBanner.vue";
import CategorySection from "./components/CategorySection.vue";
import TagsSection from "./components/TagsSection.vue";
import SearchSection from "./components/SearchSection.vue";
import RecentPostSection from "./components/RecentPostSection.vue";
import NewsSlider from "../../GlobalComponent/NewsSlider.vue";
import CommentFormSection from "./components/CommentFormSection.vue";

import { mapActions, mapState, mapWritableState } from "pinia";
import { store as news_details_store } from "./Store/news_details_store.js";
import { store as news_store } from "./Store/news_store.js";

export default {
  props: {
    event: Object,
  },
  components: {
    NavbarArea,
    CommonBanner,
    CategorySection,
    TagsSection,
    SearchSection,
    RecentPostSection,
    NewsSlider,
    CommentFormSection,
  },
  data() {
    return {
      slug: "",
      prevNews: null,
      nextNews: null,
      topRatedNews: [
        {
          bg: "/frontend/assets/img/businessmen-shaking-hands.png",
          title: "Many important brands have given us their trust",
          author: "Smith Roy",
          date: "24th March,2021",
        },
        {
          bg: "/frontend/assets/img/partners-shaking-hands.png",
          title: "Many important brands have given us their trust",
          author: "Smith Roy",
          date: "24th March,2021",
        },
      ],
    };
  },
  created: async function () {
    const params = new URLSearchParams(window.location.search);
    this.slug = params.get("slug") || "";
    console.log("slug:", this.slug);

    if (this.slug) {
      await this.fetch_news_details(this.slug);
      console.log("news_details after fetch:", this.news_details);

      // Fetch previous and next news after getting current news details
      if (this.news_details?.id) {
        const prevNext = await this.fetch_prev_next_news(this.news_details.id);
        this.prevNews = prevNext.prev_news;
        this.nextNews = prevNext.next_news;
        console.log("Previous news:", this.prevNews);
        console.log("Next news:", this.nextNews);

        // Fetch related news from the same category
        if (this.news_details?.news_category_id?.id) {
          await this.fetch_related_news(
            this.news_details.news_category_id.id,
            this.news_details.id
          );
          console.log("Related news:", this.related_news);
        }
      }
    }
    await this.fetchAllNewsDetailsPageData();
    console.log("recent_news after fetch:", this.recent_news);
  },
  methods: {
    ...mapActions(news_details_store, [
      "fetch_news_details",
      "fetchAllNewsDetailsPageData",
      "fetch_prev_next_news",
      "fetch_related_news",
    ]),
  },
  computed: {
    ...mapWritableState(news_details_store, [
      "news_details",
      "recent_news",
      "related_news",
    ]),
    getTagsList() {
      if (!this.news_details?.tags) return [];
      return this.news_details.tags
        .split(",")
        .filter((tag) => tag.trim() !== "");
    },
  },
};
</script>

<style scoped>
.news-banner-image {
  width: 100% !important;
  height: 400px !important;
  object-fit: cover !important;
  object-position: center !important;
  border-radius: 8px;
}

.thumb {
  overflow: hidden;
  border-radius: 8px;
}

.tag-item {
  display: inline-block;
  background-color: #f0f0f0;
  color: #333;
  padding: 4px 8px;
  margin: 2px 4px 2px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.next.page-numbers.disabled {
  color: #ccc !important;
  cursor: not-allowed;
  text-decoration: none;
}

.next.page-numbers.disabled:hover {
  color: #ccc !important;
  text-decoration: none;
}
</style>
