<template>
  <div class="volunteer-section-area style-02">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-9">
          <div class="section-title">
            <div
              class="subtitle wow animate__ animate__fadeInUp animated"
              style="visibility: visible; animation-name: fadeInUp"
            >
              <div class="icon">
                <span class="icon-star"></span>
                <span class="icon-star"></span>
                <span class="icon-star"></span>
              </div>
              <p>Join Campaigns</p>
              <div class="icon">
                <span class="icon-star"></span>
                <span class="icon-star"></span>
                <span class="icon-star"></span>
              </div>
            </div>
            <h4 class="title wow animate__animated animate__fadeInUp">
              Meet Our Party Volunteer
            </h4>
            <p class="description wow animate__animated animate__fadeInUp">
              Every pleasures is to welcomed pain avoided owing to the duty the
              obligations of business it will frequently.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="testimonial-carousel-two">
          <div class="volunteer-single-items">
            <div class="thum">
              <img src="/frontend/assets/img/volunteer-03.png" alt="" />
            </div>
            <div class="content">
              <div class="author-meta">
                <span class="author-name">Pier Goodman</span>
                <p class="designation">MANAGING DIRECTOR</p>
              </div>
              <div class="social-links">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-youtube"></i>
              </div>
            </div>
          </div>
          <div class="volunteer-single-items">
            <div class="thum">
              <img src="/frontend/assets/img/volunteer-01.png" alt="" />
            </div>
            <div class="content">
              <div class="author-meta">
                <span class="author-name">Pier Goodman</span>
                <p class="designation">MANAGING DIRECTOR</p>
              </div>
              <div class="social-links">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-youtube"></i>
              </div>
            </div>
          </div>
          <div class="volunteer-single-items">
            <div class="thum">
              <img src="/frontend/assets/img/volunteer-02.png" alt="" />
            </div>
            <div class="content">
              <div class="author-meta">
                <span class="author-name">Pier Goodman</span>
                <p class="designation">MANAGING DIRECTOR</p>
              </div>
              <div class="social-links">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-youtube"></i>
              </div>
            </div>
          </div>
          <div class="volunteer-single-items">
            <div class="thum">
              <img src="/frontend/assets/img/volunteer-04.png" alt="" />
            </div>
            <div class="content">
              <div class="author-meta">
                <span class="author-name">Pier Goodman</span>
                <p class="designation">MANAGING DIRECTOR</p>
              </div>
              <div class="social-links">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-youtube"></i>
              </div>
            </div>
          </div>
          <div class="volunteer-single-items">
            <div class="thum">
              <img src="/frontend/assets/img/valunteer-05.png" alt="" />
            </div>
            <div class="content">
              <div class="author-meta">
                <span class="author-name">Pier Goodman</span>
                <p class="designation">MANAGING DIRECTOR</p>
              </div>
              <div class="social-links">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-youtube"></i>
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
  name: "VolunteerSection",
  mounted() {
    // Initialize Owl Carousel after DOM is rendered
    if (window.$ && window.$(".testimonial-carousel-two").length > 0) {
      window.$(".testimonial-carousel-two").owlCarousel({
        loop: true,
        autoplay: false,
        autoPlayTimeout: 3000,
        dots: false,
        nav: true,
        center: true,
        margin: 25,
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
          1440: { items: 5 },
          1920: { items: 5 },
        },
      });
    }
  },
};
</script>
