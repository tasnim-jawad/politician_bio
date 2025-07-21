<template>
  <div class="top-rated-section">
    <div class="container">
      <div class="row">
        <div class="top-rated-title">
          <h4 class="title wow animate__animated animate__fadeInUp">
            {{ title }}
          </h4>
        </div>
        <div class="testimonial-carousel-six">
          <div
            v-for="(item, idx) in topRatedNews"
            :key="idx"
            class="news-single-items wow animate__animated animate__fadeInUp"
            :class="{ [`animate__delay-${idx}s`]: idx > 0 }"
          >
            <div
              class="news-bg"
              :style="{ backgroundImage: `url(${item.bg})` }"
            >
              <span class="even">{{ item.tag }}</span>
              <div class="content">
                <h4 class="title">{{ item.title }}</h4>
                <div class="author-meta">
                  <p class="author-name">By:{{ item.author }}</p>
                  <p>{{ item.date }}</p>
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
export default {
  name: "NewsSlider",
  props: {
    title: {
      type: String,
      default: "Top Related Post",
    },
  },
  data: function () {
    return {
      topRatedNews: [
        {
          bg: "/frontend/assets/img/businessmen-shaking-hands.png",
          tag: "Event",
          title: "Many important brands have given us their trust",
          author: "Smith Roy",
          date: "24th March,2021",
        },
        {
          bg: "/frontend/assets/img/partners-shaking-hands.png",
          tag: "News",
          title: "Many important brands have given us their trust",
          author: "Smith Roy",
          date: "24th March,2021",
        },
      ],
    };
  },
  mounted() {
    if (
      window.jQuery &&
      window.jQuery(".testimonial-carousel-six").length > 0
    ) {
      window.jQuery(".testimonial-carousel-six").owlCarousel({
        loop: true,
        autoplay: false,
        autoPlayTimeout: 1500,
        margin: 30,
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
          768: { items: 2 },
          960: { items: 2 },
          1200: { items: 2 },
          1920: { items: 2 },
        },
      });
    }
  },
};
</script>
