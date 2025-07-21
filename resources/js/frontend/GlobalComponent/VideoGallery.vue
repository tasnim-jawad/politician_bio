<template>
  <div class="see-our-video-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title wow animate__animated animate__fadeInUp">
              See Our Video
            </h4>
            <p
              class="description style-03 wow animate__animated animate__fadeInUp"
            >
              Every pleasures is to welcomed pain avoided owing to the duty the
              obligations of business it will frequently.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="testimonial-carousel-five">
            <div
              class="video-bg"
              style="
                background-image: url(/frontend/assets/img/celebration.png);
              "
            >
              <div class="btn-wrapper administration">
                <a
                  class="video-play style-03 mfp-iframe"
                  href="https://www.youtube.com/watch?v=-ZwQtICNbRc"
                >
                  <i class="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div
              class="video-bg"
              style="
                background-image: url(/frontend/assets/img/celebration.png);
              "
            >
              <div class="btn-wrapper administration">
                <a
                  class="video-play style-03 mfp-iframe"
                  href="https://www.youtube.com/watch?v=-ZwQtICNbRc"
                >
                  <i class="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div
              class="video-bg"
              style="
                background-image: url(/frontend/assets/img/celebration.png);
              "
            >
              <div class="btn-wrapper administration">
                <a
                  class="video-play style-03 mfp-iframe"
                  href="https://www.youtube.com/watch?v=-ZwQtICNbRc"
                >
                  <i class="fas fa-play"></i>
                </a>
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
  name: "VideoGallery",
  mounted() {
    // Mount testimonial-carousel-five Owl Carousel
    if (
      window.jQuery &&
      window.jQuery(".testimonial-carousel-five").length > 0
    ) {
      window.jQuery(".testimonial-carousel-five").owlCarousel({
        loop: true,
        autoplay: false,
        autoPlayTimeout: 1000,
        margin: 30,
        items: 2,
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
          768: { items: 1 },
          960: { items: 1 },
          1200: { items: 1 },
        },
      });
    }
  },
};
</script>
