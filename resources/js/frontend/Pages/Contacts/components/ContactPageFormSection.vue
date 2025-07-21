<template>
  <div
    class="contact-page-form-section contact-form-bg"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contact-item-wrapper">
            <img :src="ellipse02" class="contact-shape" alt="" />
            <img :src="ellipse03" class="contact-shape-02" alt="" />
            <img :src="ellipse04" class="contact-shape-03" alt="" />
            <img :src="ellipse05" class="contact-shape-04" alt="" />
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="contact-single-item">
                  <div class="content">
                    <h4 class="title wow animate__animated animate__fadeInUp">
                      <slot name="headline"
                        >Thanks for your interest in Senatory</slot
                      >
                    </h4>
                    <p class="wow animate__animated animate__fadeInUp">
                      <slot name="subtext"
                        >The circumstances get murkier with both sides trying
                        every trick to ensure their victory in upcoming.</slot
                      >
                    </p>
                  </div>
                  <div class="thumb">
                    <img :src="contactThumb" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="contact-page-wrapper style-03">
                  <div
                    class="contact-form contact-bg style-01"
                    :style="{ backgroundImage: 'url(' + formBg + ')' }"
                  >
                    <div class="content desktop-center">
                      <img
                        :src="circle02"
                        class="title-shape style-02"
                        alt=""
                      />
                      <h6 class="title">
                        <slot name="formTitle">Contact Now</slot>
                      </h6>
                    </div>
                    <form
                      @submit.prevent="onSubmit"
                      class="contact-page-form"
                      novalidate
                    >
                      <div class="row">
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <input
                              type="text"
                              v-model="form.firstName"
                              placeholder="First Name*"
                              class="form-control"
                              required
                              aria-required="true"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <input
                              type="text"
                              v-model="form.lastName"
                              placeholder="Last Name*"
                              class="form-control"
                              required
                              aria-required="true"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <input
                              type="email"
                              v-model="form.email"
                              placeholder="Email*"
                              class="form-control"
                              required
                              aria-required="true"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <input
                              type="tel"
                              v-model="form.phone"
                              placeholder="Phone Number*"
                              class="form-control"
                              required
                              aria-required="true"
                            />
                          </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                          <div class="form-group">
                            <input
                              type="text"
                              v-model="form.subject"
                              placeholder="Subject"
                              class="form-control"
                              required
                              aria-required="true"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group style-01">
                            <textarea
                              v-model="form.address"
                              placeholder="Address"
                              class="text-area"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="btn-wrapper desktop-center">
                            <button
                              type="submit"
                              class="boxed-btn political-btn style-01"
                            >
                              <slot name="buttonText">JOIN NOW</slot
                              ><i class="icon-paper-plan"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
  name: "ContactPageFormSection",
  props: {
    bgImage: {
      type: String,
      default: "/frontend/assets/img/contact-bg-02.png",
    },
    ellipse02: {
      type: String,
      default: "frontend/assets/img/Ellipse-02.png",
    },
    ellipse03: {
      type: String,
      default: "/frontend/assets/img/Ellipse-03.png",
    },
    ellipse04: {
      type: String,
      default: "/frontend/assets/img/Ellipse-04.png",
    },
    ellipse05: {
      type: String,
      default: "/frontend/assets/img/Ellipse-05.png",
    },
    contactThumb: {
      type: String,
      default: "/frontend/assets/img/contact-01.png",
    },
    formBg: {
      type: String,
      default: "/frontend/assets/img/contact-02.png",
    },
    circle02: {
      type: String,
      default: "/frontend/assets/img/circle-02.png",
    },
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        address: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // You can handle form submission here (e.g., emit event, call API, etc.)
      this.$emit("submit", { ...this.form });
      // Optionally reset form
      this.form = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        address: "",
      };
    },
  },
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
