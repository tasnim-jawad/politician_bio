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
  <photo-gallery />
  <!-- Photo Gallery Section End Here -->

  <!-- See Our Video Section Start Here -->
  <video-gallery />
  <!-- See Our Video Section End Here -->

  <!-- News Section Start -->
  <news />
  <!-- News Section End  -->
   
</template>

<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import PhotoGallery from "../../../GlobalComponent/PhotoGallery.vue";
import VideoGallery from "../../../GlobalComponent/VideoGallery.vue";
import News from "../../../GlobalComponent/News.vue";
export default {
  components: {
    NavbarArea,
    CommonBanner,
    PhotoGallery,
    VideoGallery,
    News,
  },
};
</script>
