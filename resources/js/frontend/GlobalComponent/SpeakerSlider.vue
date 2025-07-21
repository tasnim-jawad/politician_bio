<template>
  <div class="party-member-section-area style-02">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title wow animate__animated animate__fadeInUp text-left">
              {{ title }}
            </h4>
            <p class="wow animate__animated animate__fadeInUp">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="testimonial-carousel political-member">
            <div
              v-for="(speaker, idx) in speakers"
              :key="idx"
              class="single-party-member-item wow animate__animated animate__fadeInUp"
              :class="{ [`animate__delay-${idx}s`]: idx > 0 }"
            >
              <div class="thumb">
                <img :src="speaker.img" :alt="speaker.name" />
              </div>
              <div class="content">
                <div class="author-meta">
                  <span class="author-name">{{ speaker.name }}</span>
                  <p class="designation">{{ speaker.designation }}</p>
                </div>
                <div class="social-links">
                  <ul>
                    <li v-for="(link, lidx) in speaker.socials" :key="lidx">
                      <a :href="link.url" target="_blank"
                        ><i :class="link.icon"></i
                      ></a>
                    </li>
                  </ul>
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
  name: "SpeakerSlider",
  props: {
    speakers: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: "Legend Speakers",
    },
    description: {
      type: String,
      default:
        "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
    },
  },
  mounted() {
    if (
      window.jQuery &&
      window.jQuery(".testimonial-carousel.political-member").length > 0
    ) {
      window.jQuery(".testimonial-carousel.political-member").owlCarousel({
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
          1200: { items: 3 },
          1920: { items: 3 },
        },
      });
    }
  },
};
</script>
