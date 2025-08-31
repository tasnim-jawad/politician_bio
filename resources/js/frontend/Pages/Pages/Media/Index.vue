<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Media'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Media', url: '/pages/media' },
    ]"
    key="media"
  />
  <!-- banner section End here -->

  <!-- Photo Gallery Section Start Here -->
  <photo-gallery
    v-if="photo_gallery"
    :photos="photo_gallery"
    :short_title="mediaImagesSection?.short_title"
    :long_title="mediaImagesSection?.long_title"
  />
  <!-- Photo Gallery Section End Here -->

  <!-- See Our Video Section Start Here -->
  <video-gallery
    v-if="video_gallery"
    :videos="video_gallery"
    :short_title="mediaVideoSection?.short_title"
    :long_title="mediaVideoSection?.long_title"
  />
  <!-- See Our Video Section End Here -->

  <!-- News Section Start -->
  <news
    v-if="news"
    :lead_news="news.lead_news"
    :side_news="news.side_news"
    :short_title="mediaNewsSection?.short_title"
    :title="mediaNewsSection?.title"
  />
  <!-- News Section End  -->
</template>

<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import PhotoGallery from "../../../GlobalComponent/PhotoGallery.vue";
import VideoGallery from "../../../GlobalComponent/VideoGallery.vue";
import News from "../../../GlobalComponent/News.vue";
import { store as media_store } from "./Store/media_store.js";
import { mapActions, mapWritableState } from "pinia";

export default {
  components: {
    NavbarArea,
    CommonBanner,
    PhotoGallery,
    VideoGallery,
    News,
  },
  created: function () {
    this.fetchAllMediaPageData();
  },
  methods: {
    ...mapActions(media_store, ["fetchAllMediaPageData"]),
    get_section_headings_data(section_type) {
      return this.section_headings?.find(
        (section) => section.section_type === section_type
      );
    },
  },
  computed: {
    ...mapWritableState(media_store, [
      "photo_gallery",
      "video_gallery",
      "news",
      "section_headings",
    ]),
    mediaImagesSection() {
      return this.get_section_headings_data("media_images");
    },
    mediaVideoSection() {
      return this.get_section_headings_data("media_video");
    },
    mediaNewsSection() {
      return this.get_section_headings_data("media_news");
    },
  },
};
</script>
