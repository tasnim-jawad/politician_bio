<template>
  <div
    class="media-section style-01"
    style="background-image: url(/frontend/assets/img/media.png)"
  >
    <div class="container">
      <div
        class="video-section style-02 text-center wow animate__animated animate__fadeInUp"
      >
        <a
          class="video-play style-01 style-05 mfp-iframe"
          href="https://www.youtube.com/watch?v=-ZwQtICNbRc"
        >
          <i class="fas fa-play"></i>
        </a>
      </div>
      <div class="media-wrapper">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-title">
              <div class="subtitle wow animate__animated animate__fadeInUp">
                <div class="icon">
                  <span class="icon-star"></span>
                  <span class="icon-star"></span>
                  <span class="icon-star"></span>
                </div>
                <p>Political Campaign</p>
                <div class="icon">
                  <span class="icon-star"></span>
                  <span class="icon-star"></span>
                  <span class="icon-star"></span>
                </div>
              </div>
              <h2 class="title wow animate__animated animate__fadeInUp">
                Media Coverage
              </h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-lg-4 col-md-6"
            v-for="(item, index) in mediaItems"
            :key="index"
          >
            <div class="media-item wow animate__animated animate__fadeInUp">
              <div class="media-thumb">
                <img :src="( '/' + item?.thumbnail_image || '/uploads/default.jpg') " :alt="item?.alt || 'media'" />
                <div class="media-thumb-video">
                  <a
                    class="video-play style-01 style-05 mfp-iframe"
                    :href="item.video_url || item.videoUrl"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
              <div class="media-content">
                <span class="category">{{ item.tag }}</span>
                <h3 class="title">{{ item.title }}</h3>
                <span class="date"
                  ><i class="fas fa-calendar-alt"></i> {{ item.date }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mediaItems: {
      type: Array,
      default: () => [
        {
          thumbnail_image: "frontend/assets/img/elegant-director.png",
          alt: "elegant",
          video_url: "https://www.youtube.com/watch?v=-ZwQtICNbRc",
          tag: "technology",
          title: "Why are so many Canadian kids unvaccinated COVID-19",
          date: "JAN 14, 2022",
        },
        {
          img: "frontend/assets/img/patriotism.png",
          alt: "patriotism",
          video_url: "https://www.youtube.com/watch?v=-ZwQtICNbRc",
          tag: "technology",
          title: "Thursday’s analyst upgrades and downgrade",
          date: "JAN 14, 2022",
        },
        {
          img: "frontend/assets/img/portrait.png",
          alt: "portrait",
          video_url: "https://www.youtube.com/watch?v=-ZwQtICNbRc",
          tag: "technology",
          title: "Thursday’s analyst upgrades and downgrade",
          date: "JAN 14, 2022",
        },
      ],
    },
  },
  mounted() {
    this.initMagnificPopup();
  },
  updated() {
    this.initMagnificPopup();
  },
  methods: {
    initMagnificPopup() {
      if (window.$ && window.$.fn.magnificPopup) {
        window.$(".mfp-iframe").magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
          iframe: {
            markup:
              '<div class="mfp-iframe-scaler">' +
              '<div class="mfp-close"></div>' +
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
              "</div>",
            patterns: {
              youtube: {
                index: "youtube.com/",
                id: function (url) {
                  var m = url.match(/[\?&]v=([^&]+)/);
                  return m ? m[1] : null;
                },
                src: "https://www.youtube.com/embed/%id%?autoplay=1",
              },
              youtu_be: {
                index: "youtu.be/",
                id: function (url) {
                  var m = url.match(/youtu.be\/([^?&]+)/);
                  return m ? m[1] : null;
                },
                src: "https://www.youtube.com/embed/%id%?autoplay=1",
              },
            },
            srcAction: "iframe_src",
          },
        });
      }
    },
  },
};
</script>
