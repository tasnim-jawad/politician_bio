<template>
  <div
    class="header-area header-sanatory header-bg-04"
    style="
      background-image: url(frontend/assets/img/Home-five/home-five-banner.png);
    "
  >
    <div class="container custom-container-02">
      <div class="home-five-banner">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="header-inner-02">
              <h4 class="subtitle">
                LETS STAND TOGETHER<i class="icon-star"></i
                ><i class="icon-star"></i><i class="icon-star"></i>
                <span>City Mayor</span>
              </h4>
              <h1 class="title">We Can Make Our City Great Again!</h1>
              <p>
                President represented Delaware for 36 years in the U.S. Senate
                before becoming the 47th <br />
                Vice President of the United States. As President, Harison will
                restore America’s leadership <br />
                and build our communities back better.
              </p>
              <div class="btn-wrapper">
                <Link href="/about-us" class="boxed-btn read-btn"
                  ><i class="fas fa-arrow-right"></i>Read More</Link>
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="thumbnail">
              <img
                src="frontend/assets/img/Home-five/candidate-img.png"
                alt="mayor image"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Navbar area Start -->
      <NavbarArea />
      <!-- navbar area end -->
    </div>
  </div>
</template>

<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";

export default {
  components: {
    NavbarArea,
  },
};
</script>

<style scoped></style>
