<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Volunteer'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Volunteer', url: '/pages/volunteer' },
    ]"
    key="volunteer"
  />
  <!-- banner section End here -->

  <!-- Volunteer Form Section Start Here -->
  <div class="volunteer-section-area style-03">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title volunteer wow animate__animated animate__fadeInUp">
              Get Involved!
            </h4>
            <p
              class="description style-03 wow animate__animated animate__fadeInUp"
            >
              Every pleasures is to welcomed pain avoided owing to the duty the
              obligations of business it will frequently.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="volunteer-form">
            <div class="contact-form style-01">
              <form
                action="https://themeim.com/demo/senatory/request.html"
                class="contact-page-form"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        name="fname"
                        placeholder="First Name*"
                        class="form-control"
                        required=""
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        name="lname"
                        placeholder="Last Name*"
                        class="form-control"
                        required=""
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email*"
                        required=""
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        name="telephone"
                        placeholder="Phone Number*"
                        class="form-control"
                        required=""
                        aria-required="true"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="form-question">
              <h6 class="title">How would you like to help?</h6>
              <div class="check-box-wrapper">
                <div class="check-box">
                  <label class="container-box">
                    Telephone Calls
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Distribute Signs
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box style-01">
                  <label class="container-box">
                    Voter Registration
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Other
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="form-question">
              <h6 class="title">How would you like to help?</h6>
              <div class="check-box-wrapper">
                <div class="check-box">
                  <label class="container-box">
                    Morning
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Afternoon
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Evening
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="form-question">
              <h6 class="title">How would you like to help?</h6>
              <div class="check-box-wrapper">
                <div class="check-box">
                  <label class="container-box">
                    Sun
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Mon
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Tue
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Wed
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Thu
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Fri
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box">
                  <label class="container-box">
                    Sat
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="form-question">
              <h6 class="title">Additional comments</h6>
              <div class="col-md-12 p-0">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="type here...."
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="btn-wrapper">
              <a href="#" class="boxed-btn btn-sanatory volunteer"
                ><i class="fas fa-arrow-right"></i>Join Our Team</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Volunteer Form Section Start Here -->
</template>

<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
export default {
  components: { 
    NavbarArea,
    CommonBanner,
  },
};
</script>
