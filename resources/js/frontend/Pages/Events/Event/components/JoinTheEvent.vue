<template>
  <div
    class="contact-page-wrapper style-01 wow animate__ animate__fadeInRight animated"
    style="visibility: visible; animation-name: fadeInRight"
  >
    <div
      class="contact-form contact-bg"
      style="background-image: url(/frontend/assets/img/contact-bg.png)"
    >
      <div class="content desktop-center">
        <img
          src="/frontend/assets/img/circle-02.png"
          class="title-shape style-01"
          alt=""
        />
        <h6 class="title">Join the event</h6>
      </div>
      <form
        action="https://themeim.com/demo/senatory/request.html"
        class="contact-page-form"
        novalidate="novalidate"
      >
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="form-group">
              <input
                type="text"
                name="fname"
                placeholder="Name"
                class="form-control"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="form-group">
              <input
                type="email"
                name="lname"
                placeholder="Email"
                class="form-control"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Mobile No"
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
                name="phone"
                placeholder="Post Code"
                class="form-control"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="btn-wrapper desktop-center">
              <a href="#" class="boxed-btn political-btn style-01"
                >JOIN NOW<i class="icon-paper-plan"></i
              ></a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "JoinTheEvent",
};
</script>
