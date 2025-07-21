<template>
  <div class="why-choose-us-section style-02 choose-bg" :style="mainBgStyle">
    <div :class="bgClass" :style="sideBgStyle"></div>
    <div class="container nav-container z_index_2">
      <div :class="rowClass">
        <div class="col-lg-5">
          <div class="section-title">
            <h4 class="title style-01">Why chose us</h4>
            <p class="description style-01">
              A choice that makes the difference from others.
            </p>
          </div>
          <div class="single-items-wrapper">
            <div
              class="why-choose-single-items wow animate__animated animate__fadeInUp"
            >
              <div class="icon">
                <i class="icon-tips-bulb"></i>
              </div>
              <div class="content">
                <h4 class="title">Smart Thinking</h4>
                <p>
                  Every pleasures is to welcomed pain avoided owing to the
                  dutythe obligations of business
                </p>
              </div>
              <img
                src="frontend/assets/img/setting-shape.png"
                class="shape"
                alt=""
              />
            </div>
            <div
              class="why-choose-single-items wow animate__animated animate__fadeInUp animate__delay-1s"
            >
              <div class="icon">
                <i class="icon-crown"></i>
              </div>
              <div class="content">
                <h4 class="title">Smart Thinking</h4>
                <p>
                  Every pleasures is to welcomed pain avoided owing to the
                  dutythe obligations of business
                </p>
              </div>
              <img
                src="frontend/assets/img/setting-shape.png"
                class="shape"
                alt=""
              />
            </div>
            <div
              class="why-choose-single-items wow animate__animated animate__fadeInUp animate__delay-2s"
            >
              <div class="icon">
                <i class="icon-hand-shake"></i>
              </div>
              <div class="content">
                <h4 class="title">Smart Thinking</h4>
                <p>
                  Every pleasures is to welcomed pain avoided owing to the
                  dutythe obligations of business
                </p>
              </div>
              <img
                src="frontend/assets/img/setting-shape.png"
                class="shape"
                alt=""
              />
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
    position: {
      type: String,
      default: "right",
    },
    mainBg: {
      type: String,
      required: true,
    },
    sideBg: {
      type: String,
      required: true,
    },
  },
  computed: {
    bgClass() {
      return this.position === "left" ? "choose-bg-03" : "choose-bg-02";
    },
    rowClass() {
      return this.position === "left" ? "row justify-content-end" : "row";
    },
    mainBgStyle() {
      return {
        backgroundImage: `url(${this.mainBg})`,
      };
    },
    sideBgStyle() {
      return {
        backgroundImage: `url(${this.sideBg})`,
      };
    },
  },
};
</script>
<style scoped>
.z_index_2 {
  z-index: 2;
  position: relative;
}
</style>
