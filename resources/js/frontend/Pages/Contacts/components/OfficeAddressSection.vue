<template>
  <div class="office-address-section">
    <div class="container">
      <img
        src="frontend/assets/img/shape-05.png"
        class="contact-shape"
        alt=""
      />
      <img
        src="frontend/assets/img/shape-08.png"
        class="contact-shape-02"
        alt=""
      />
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title wow animate__animated animate__fadeInUp">
              {{ title }}
            </h4>
            <p class="description wow animate__animated animate__fadeInUp">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="(address, idx) in officeAddresses"
          :key="idx"
        >
          <single-testimonial-item-02
            :title="address.title"
            :icon="address.icon"
            :flag-img="address.flagImg"
            :address="address.address"
            :phone="address.phone"
            :email="address.email"
            :delay="address.delay"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTestimonialItem02 from "./SingleTestimonialItem02.vue";
export default {
  name: "OfficeAddressSection",
  components: {
    SingleTestimonialItem02,
  },
  props: {
    title: {
      type: String,
      default: "Have to join with us?",
    },
    description: {
      type: String,
      default:
        "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
    },
  },
  data: function () {
    return {
      officeAddresses: [
        {
          id: 1,
          title: "California",
          icon: "icon-bridge",
          flagImg: "assets/img/flag-shape.png",
          address: "Woods Avenue (East LA), 380/6, San Morni CA",
          phone: "009-215-5599",
          email: "info@yourmail.com",
          delay: "",
        },
        {
          id: 2,
          title: "New York",
          icon: "icon-building",
          flagImg: "assets/img/flag-shape.png",
          address: "Woods Avenue (East LA), 380/6, San Morni CA",
          phone: "009-215-5599",
          email: "info@yourmail.com",
          delay: "animate__delay-1s",
        },
        {
          id: 3,
          title: "Florida",
          icon: "icon-avenue",
          flagImg: "assets/img/flag-shape.png",
          address: "Woods Avenue (East LA), 380/6, San Morni CA",
          phone: "009-215-5599",
          email: "info@yourmail.com",
          delay: "animate__delay-2s",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
