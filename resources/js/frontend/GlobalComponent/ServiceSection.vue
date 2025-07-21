<template>
  <div
    class="services-single-section style-01"
    :style="{
      marginTop: serviceMarginTop,
      marginBottom: serviceMarginBottom,
    }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title wow animate__animated animate__fadeInUp">
              {{ sectionTitle }}
            </h4>
            <p class="description wow animate__animated animate__fadeInUp">
              {{ sectionDescription }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, idx) in serviceItems"
          :key="idx"
          class="col-lg-4 col-md-6"
        >
          <div class="services-single-item style-01">
            <div class="icon style-01">
              <i :class="item.icon"></i>
            </div>
            <div class="content">
              <h4 class="title">
                <a :href="item.url">{{ item.title }}</a>
              </h4>
              <p class="description">{{ item.description }}</p>
            </div>
            <div class="btn-wrapper">
              <a :href="item.url" class="boxed-btn event-btn"
                ><i class="fas fa-arrow-right"></i>Read More</a
              >
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
    sectionTitle: {
      type: String,
      default: "Our Services",
    },
    sectionDescription: {
      type: String,
      default:
        "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
    },
    serviceMarginTop: {
      type: String,
      default: "0px",
    },
    serviceMarginBottom: {
      type: String,
      default: "30px",
    },
    serviceItems: {
      type: Array,
      default: () => [
        {
          icon: "icon-school",
          title: "School & University",
          url: "services-single.html",
          description:
            "Efficiently orchestrate resource sucking human capital whereas future-proof",
        },
        {
          icon: "icon-sweet-hone",
          title: "City Traffic & Parking",
          url: "services-single.html",
          description:
            "Efficiently orchestrate resource sucking human capital whereas future-proof",
        },
        {
          icon: "icon-kids-house",
          title: "Parks & Recreation",
          url: "services-single.html",
          description:
            "Efficiently orchestrate resource sucking human capital whereas future-proof",
        },
        {
          icon: "icon-school",
          title: "School & University",
          url: "services-single.html",
          description:
            "Efficiently orchestrate resource sucking human capital whereas future-proof",
        },
        {
          icon: "icon-sweet-hone",
          title: "City Traffic & Parking",
          url: "services-single.html",
          description:
            "Efficiently orchestrate resource sucking human capital whereas future-proof",
        },
        {
          icon: "icon-kids-house",
          title: "Parks & Recreation",
          url: "services-single.html",
          description:
            "Efficiently orchestrate resource sucking human capital whereas future-proof",
        },
      ],
    },
  },
};
</script>
