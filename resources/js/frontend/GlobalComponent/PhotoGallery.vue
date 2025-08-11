<template>
  <div class="political-gallery-item style-01">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title style-02 wow animate__animated animate__fadeInUp">
              Our Photo Gallery
            </h4>
            <p
              class="description style-02 wow animate__animated animate__fadeInUp"
            >
              Every pleasures is to welcomed pain avoided owing to the duty the
              obligations of business it will frequently.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="testimonial-carousel-seven">
          <div
            class="gallery-single-items wow animate__ animate__fadeInUp animated"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <div class="thumb style-01">
              <img
                src="/frontend/assets/img/photo-gallery.png"
                alt="our work image"
              />
              <div class="cart-icon">
                <a
                  class="image-popup"
                  href="/frontend/assets/img/photo-gallery.png"
                  ><i class="fas fa-plus"></i
                ></a>
              </div>
            </div>
          </div>
          <div
            class="gallery-single-items wow animate__ animate__fadeInUp animated"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <div class="thumb style-01">
              <img
                src="/frontend/assets/img/photo-gallery-02.png"
                alt="our work image"
              />
              <div class="cart-icon">
                <a
                  class="image-popup"
                  href="/frontend/assets/img/photo-gallery-02.png"
                  ><i class="fas fa-plus"></i
                ></a>
              </div>
            </div>
          </div>
          <div
            class="gallery-single-items wow animate__ animate__fadeInUp animated"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <div class="thumb style-01">
              <img
                src="/frontend/assets/img/photo-gallery-03.png"
                alt="our work image"
              />
              <div class="cart-icon">
                <a
                  class="image-popup"
                  href="/frontend/assets/img/photo-gallery-03.png"
                  ><i class="fas fa-plus"></i
                ></a>
              </div>
            </div>
          </div>
          <div
            class="gallery-single-items wow animate__ animate__fadeInUp animated"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <div class="thumb style-01">
              <img
                src="/frontend/assets/img/photo-gallery-04.png"
                alt="our work image"
              />
              <div class="cart-icon">
                <a
                  class="image-popup"
                  href="/frontend/assets/img/photo-gallery-04.png"
                  ><i class="fas fa-plus"></i
                ></a>
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
  name: "PhotoGallery",
  mounted() {
    // Mount testimonial-carousel-seven Owl Carousel
    if (
      window.jQuery &&
      window.jQuery(".testimonial-carousel-seven").length > 0
    ) {
      window.jQuery(".testimonial-carousel-seven").owlCarousel({
        loop: true,
        autoplay: false,
        autoPlayTimeout: 1000,
        margin: 30,
        items: 2,
        center: true,
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
          599: { items: 2 },
          768: { items: 2 },
          960: { items: 3 },
          1200: { items: 4 },
        },
      });
      // Magnific Popup for every image
      window.jQuery(".testimonial-carousel-seven .image-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
        mainClass: "mfp-fade",
        removalDelay: 300,
        zoom: {
          enabled: true,
          duration: 300,
        },
      });
    }
  },
};
</script>
