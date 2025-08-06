<template>
  <div
    class="testimonial-section-area people-say testimonial-bg-02 home-five"
    style="background-image: url(frontend/assets/img/team-02.png)"
  >
    <div class="shapes political-shape">
      <img src="frontend/assets/img/shape-04.png" class="shape-01" alt="" />
      <img src="frontend/assets/img/shape-03.png" class="shape-02" alt="" />
      <div class="shape-03"></div>
      <div class="shape-04"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-6">
          <div class="testimonial-carousel-area">
            <div class="testimonial-carousel-four">
              <div
                class="people-say-single-item"
                v-for="(item, index) in comments"
                :key="index"
              >
                <img
                  src="frontend/assets/img/quotes.png"
                  class="quotes"
                  alt=""
                />
                <div class="content">
                  <div class="subtitle wow animate__animated animate__fadeInUp">
                    <p>Public Comments</p>
                    <div class="icon">
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                    </div>
                  </div>
                  <h4 class="title wow animate__animated animate__fadeInUp">
                    People's Say About us
                  </h4>
                  <p
                    class="description wow animate__animated animate__fadeInUp"
                  >
                    {{ item.description }}
                  </p>
                  <div
                    class="author-meta wow animate__animated animate__fadeInUp"
                  >
                    <span class="author-name">{{ item.author }}</span>
                    <span class="line"></span>
                  </div>
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
  props: {
    comments: {
      type: Array,
      default: () => [
        {
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id, sint occaecat cupidatat non proident, sunt in culpa qui",
          author: "William Smith 1",
        },
        {
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id, sint occaecat cupidatat non proident, sunt in culpa qui",
          author: "William Smith 2",
        },
        {
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id, sint occaecat cupidatat non proident, sunt in culpa qui",
          author: "William Smith 3",
        },
      ],
    },
  },
};
</script>
