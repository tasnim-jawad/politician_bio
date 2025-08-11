<template>
  <div
    class="people-say-section people-say-bg"
    style="background-image: url(/frontend/assets/img/group-activity-02.png)"
  >
    <div class="shapes">
      <img src="/frontend/assets/img/shape-04.png" class="shape-01" alt="" />
      <img src="/frontend/assets/img/shape-03.png" class="shape-02" alt="" />
      <div class="shape-03"></div>
      <div class="shape-04"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="people-say-single-item-02 margin-bottom-60 wow animate__animated animate__fadeInLeft"
          >
            <div class="testimonial-carousel-four">
              <div
                class="people-say-single-item style-01"
                style="background-image: url(/frontend/assets/img/line-03.png)"
                v-for="(item, index) in comments"
                :key="index"
              >
                <img
                  src="/frontend/assets/img/quotes-02.png"
                  class="quotes style-02"
                  alt=""
                />
                <div class="content">
                  <div class="subtitle">
                    <p>Public Comments</p>
                    <div class="icon">
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                    </div>
                  </div>
                  <h4 class="title">People's Say About us</h4>
                  <p class="description" v-html="item?.comment"></p>
                  <div class="author-meta">
                    <div class="thumb">
                      <img
                        :src="
                          item?.thumb ? `/${item.thumb}` : '/uploads/avatar.jpg'
                        "
                        alt=""
                      />
                    </div>
                    <span class="author-name">{{ item?.name }}</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
              <div
                class="people-say-single-item style-01"
                style="background-image: url(assets/img/line-03.png)"
              >
                <img
                  src="/frontend/assets/img/quotes-02.png"
                  class="quotes style-02"
                  alt=""
                />
                <div class="content">
                  <div class="subtitle">
                    <p>Public Comments</p>
                    <div class="icon">
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                    </div>
                  </div>
                  <h4 class="title">People's Say About us</h4>
                  <p class="description">
                    " Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    Occaecat cupidatat non proident,sunt in culpa qui officia
                    deserunt mollit anim id, sint occaecat cupidatat non
                    proident, sunt in culpa qui "
                  </p>
                  <div class="author-meta">
                    <div class="thumb">
                      <img src="/frontend/assets/img/thumb.png" alt="" />
                    </div>
                    <span class="author-name">William Smith</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
              <div
                class="people-say-single-item style-01"
                style="background-image: url(/frontend/assets/img/line-03.png)"
              >
                <img
                  src="/frontend/assets/img/quotes-02.png"
                  class="quotes style-02"
                  alt=""
                />
                <div class="content">
                  <div class="subtitle">
                    <p>Public Comments</p>
                    <div class="icon">
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                    </div>
                  </div>
                  <h4 class="title">People's Say About us</h4>
                  <p class="description">
                    " Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    Occaecat cupidatat non proident,sunt in culpa qui officia
                    deserunt mollit anim id, sint occaecat cupidatat non
                    proident, sunt in culpa qui "
                  </p>
                  <div class="author-meta">
                    <div class="thumb">
                      <img src="/frontend/assets/img/thumb.png" alt="" />
                    </div>
                    <span class="author-name">William Smith</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            class="people-say-single-item-02 style-01 wow animate__animated animate__fadeInRight"
          >
            <div
              class="people-say-bg-02"
              style="
                background-image: url(/frontend/assets/img/young-man-with-flag.png);
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PeopleSaySection",
  props: {
    comments: {
      type: Array,
      default: () => [
        {
          comment:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id, sint occaecat cupidatat non proident, sunt in culpa qui",
          name: "William Smith 1",
        },
        {
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id, sint occaecat cupidatat non proident, sunt in culpa qui",
          name: "William Smith 2",
        },
        {
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id, sint occaecat cupidatat non proident, sunt in culpa qui",
          name: "William Smith 3",
        },
      ],
    },
  },
  mounted() {
    this.initTestimonialCarousel();
  },
  updated() {
    this.initTestimonialCarousel();
  },
  methods: {
    initTestimonialCarousel() {
      if (
        window.$ &&
        typeof window.$(".testimonial-carousel-four").owlCarousel === "function"
      ) {
        const $carousel = window.$(".testimonial-carousel-four");
        $carousel.trigger("destroy.owl.carousel");
        $carousel.owlCarousel({
          loop: true,
          autoplay: true,
          autoPlayTimeout: 1000,
          autoplaySpeed: 2500,
          smartSpeed: 2500,
          margin: 30,
          items: 2,
          dots: false,
          nav: true,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
          ],
          responsive: {
            0: { items: 1 },
            460: { items: 1 },
            599: { items: 1 },
            768: { items: 1 },
            960: { items: 1 },
            1200: { items: 1 },
          },
        });
      }
    },
  },
};
</script>
