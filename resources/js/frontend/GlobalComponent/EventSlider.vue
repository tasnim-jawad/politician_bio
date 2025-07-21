<template>
  <div class="more-issue-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title style-02 wow animate__animated animate__fadeInUp">
              {{ title }}
            </h4>
            <p
              class="description style-02 wow animate__animated animate__fadeInUp"
            >
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="testimonial-carousel-six">
          <div
            v-for="(event, idx) in events"
            :key="idx"
            class="event-single-items wow animate__animated animate__fadeInUp"
            :class="{ [`animate__delay-${idx}s`]: idx > 0 }"
          >
            <div
              class="event-img"
              :style="{ backgroundImage: `url(${event.img})` }"
            ></div>
            <div class="content">
              <div class="post-mate">
                <h2 class="post-date">{{ event.date }}</h2>
                <div class="post-month">{{ event.month }}</div>
              </div>
              <div class="subtitle">
                <div class="location">
                  <div class="icon">
                    <i class="icon-location"></i>
                  </div>
                  <p>{{ event.location }}</p>
                </div>
                <div class="time">
                  <div class="icon">
                    <i class="icon-clock"></i>
                  </div>
                  <p>{{ event.time }}</p>
                </div>
              </div>
              <h4 class="title">{{ event.title }}</h4>
              <p class="description">{{ event.description }}</p>
              <div class="btn-wrapper">
                <a :href="event.url" class="boxed-btn event-btn"
                  ><i class="fas fa-arrow-right"></i>Read More</a
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
  name: "EventSlider",
  props: {
    title: {
      type: String,
      default: "More Event Programs",
    },
    description: {
      type: String,
      default:
        "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
    },
    
  },
  data() {
    return {
      events: [
        {
          img: "/frontend/assets/img/event-03.png",
          date: "17",
          month: "feb",
          location: "684 Ann St. FL 34608",
          time: "12:00 am",
          title: "The Economy of the US: What are the Weakest Spots?",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
          url: "#",
        },
        {
          img: "/frontend/assets/img/evnt-04.png",
          date: "18",
          month: "mar",
          location: "123 Main St. NY 10001",
          time: "1:00 pm",
          title: "Global Trade and Its Impact on Local Economies",
          description:
            "Exploring how global trade affects local markets and economies.",
          url: "#",
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
