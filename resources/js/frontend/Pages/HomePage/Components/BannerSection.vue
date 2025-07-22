<template>
  <div
    class="header-area header-sanatory header-bg-04"
    :style="{
      backgroundImage: `url(/${data.background_image || '/uploads/default.jpg'})`,
    }"
    
  >
    <div class="container custom-container-02">
      <div class="home-five-banner">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="header-inner-02">
              <h4 class="subtitle">
                {{ data.slogan }}<i class="icon-star"></i
                ><i class="icon-star"></i><i class="icon-star"></i>
                <span>{{ data.election_type }}</span>
              </h4>
              <h1 class="title">{{ data.main_title }}</h1>
              <p>
                {{ data.short_title }}
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
                :src="data.image || '/uploads/default.jpg'"
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
  props: {
    data: Object,
  },
  components: {
    NavbarArea,
  },
};
</script>

<style scoped></style>
