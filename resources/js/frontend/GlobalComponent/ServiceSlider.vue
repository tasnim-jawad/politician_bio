<template>
  <div class="header-bottom-area margin-top-120">
    <div class="container">
      <div class="row">
        <div class="testimonial-carousel">
          <div
            class="single-testimonial-item wow animate__animated animate__fadeInUp"
          >
            <img
              src="/frontend/assets/img/flag-shape.png"
              class="shape-01"
              alt=""
            />
            <div class="icon">
              <span class="icon-sweet-hone"></span>
            </div>
            <div class="content">
              <h4 class="title">City Traffic & Parking</h4>
              <p class="description">
                Efficiently orchestrate resource sucking human capital whereas
                future-proof outsourcing. Credibly actualize one-to-one
                meta-services.
              </p>
            </div>
          </div>
          <div
            class="single-testimonial-item wow animate__animated animate__fadeInUp animate__delay-1s"
          >
            <img
              src="/frontend/assets/img/flag-shape.png"
              class="shape-01"
              alt=""
            />
            <div class="icon">
              <span class="icon-kids-house"></span>
            </div>
            <div class="content">
              <h4 class="title">Parks, Fields & Recreation</h4>
              <p class="description">
                Efficiently orchestrate resource sucking human capital whereas
                future-proof outsourcing. Credibly actualize one-to-one
                meta-services.
              </p>
            </div>
          </div>
          <div
            class="single-testimonial-item wow animate__animated animate__fadeInUp animate__delay-2s"
          >
            <img
              src="/frontend/assets/img/flag-shape.png"
              class="shape-01"
              alt=""
            />
            <div class="icon">
              <span class="icon-gym"></span>
            </div>
            <div class="content">
              <h4 class="title">Sports & Fitness Center</h4>
              <p class="description">
                Efficiently orchestrate resource sucking human capital whereas
                future-proof outsourcing. Credibly actualize one-to-one
                meta-services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSlider",
  mounted() {
    if (window.jQuery && window.jQuery(".testimonial-carousel").length > 0) {
      window.jQuery(".testimonial-carousel").owlCarousel({
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
