<template>
  <footer
    class="footer-area line-bg"
    style="background-image: url(/frontend/assets/img/line.png)"
  >
    <div class="footer-top issue style-01">
      <div class="container">
        <div class="footer-top-border padding-bottom-60 padding-top-75">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-widget widget">
                <div class="about_us_widget">
                  <a href="index.html" class="footer-logo">
                    <img
                      src="/frontend/assets/img/footer-logo.png"
                      alt="footer logo"
                  /></a>
                  <p>
                    President represented Delaware for 36 years in the U.S.
                    Senate before becoming the 47th Vice President of the United
                    States.
                  </p>
                  <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <ul class="contact_info_list">
                <li class="single-info-item">
                  <div class="icon style-01">
                    <i class="icon-location"></i>
                  </div>
                  <div class="details style-01">
                    66 Broklyn Street 30 Road. New York United States
                  </div>
                </li>
                <li class="single-info-item">
                  <div class="icon">
                    <i class="icon-envelope"></i>
                  </div>
                  <div class="details">info@yourmail.com</div>
                </li>
                <li class="single-info-item">
                  <div class="icon">
                    <i class="icon-phone"></i>
                  </div>
                  <div class="details">009-215-5599</div>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 offset-lg-1 col-md-12">
              <div
                class="footer-widget widget widget_subscribe subscribe-bg"
                style="
                  background-image: url(/frontend/assets/img/Mask-flag.png);
                "
              >
                <div class="shape-01"></div>
                <div class="shape-02"></div>
                <div class="header-content">
                  <h4 class="title">Join Our Newsletter</h4>
                </div>

                <!-- Success Message with transition -->
                <transition name="fade">
                  <div
                    v-if="newsletterStore.successMessage"
                    class="alert alert-success mb-3"
                  >
                    {{ newsletterStore.successMessage }}
                  </div>
                </transition>

                <!-- General Error Message -->
                <div
                  v-if="newsletterStore.errors.general"
                  class="alert alert-danger mb-3"
                >
                  <div
                    v-for="error in newsletterStore.errors.general"
                    :key="error"
                  >
                    {{ error }}
                  </div>
                </div>

                <form class="subscribe-form" @submit.prevent="handleSubscribe">
                  <div class="form-group d-flex flex-column">
                    <input
                      v-model="newsletterStore.email"
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': newsletterStore.errors.email }"
                      placeholder="Enter Email"
                      :disabled="newsletterStore.loading"
                    />
                    <!-- Email validation errors -->
                    <div
                      v-if="newsletterStore.errors.email"
                      class="invalid-feedback d-block text-white"
                    >
                      <div
                        v-for="error in newsletterStore.errors.email"
                        :key="error"
                      >
                        {{ error }}
                      </div>
                    </div>
                  </div>
                  <div class="btn-wrapper">
                    <button
                      type="submit"
                      class="boxed-btn btn-sanatory style-03"
                      :disabled="newsletterStore.loading"
                    >
                      <span v-if="newsletterStore.loading">
                        <i class="fas fa-spinner fa-spin"></i> Subscribing...
                      </span>
                      <span v-else>
                        Subscribe Now <i class="icon-paper-plan"></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom-border">
          <div class="row">
            <div class="col-lg-2 col-md-6 col-sm-6 col-6">
              <div class="footer-widget widget widget_nav_menu">
                <h4 class="widget-title">
                  Explore
                  <span class="line">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot style-02"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </span>
                </h4>
                <ul>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Election</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-6">
              <div class="footer-widget widget widget_nav_menu">
                <h4 class="widget-title">
                  Useful Links
                  <span class="line">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot style-02"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </span>
                </h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-6">
              <div class="footer-widget widget widget_nav_menu">
                <h4 class="widget-title">
                  Quick Links
                  <span class="line">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot style-02"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </span>
                </h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">News</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="footer-widget widget widget_nav_menu">
                <h4 class="widget-title">
                  Events Campaigns
                  <span class="line">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot style-02"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </span>
                </h4>
                <div class="footer-event-item">
                  <div class="content">
                    <div class="designation">
                      <span class="event">Event</span>
                      <span class="date">29 May 2021</span>
                    </div>
                    <h6 class="title">
                      <a href="event-single.html"
                        >Lets meet for protecting eco system</a
                      >
                    </h6>
                    <p>
                      Every pleasures is to welcomed pain avoided owing to the
                      duty the
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-widget widget style-01 widget_nav_menu">
                <div class="footer-event-item">
                  <div class="content">
                    <div class="designation">
                      <span class="event">Event</span>
                      <span class="date">29 May 2021</span>
                    </div>
                    <h6 class="title">
                      <a href="event-single.html"
                        >Lets meet for protecting eco system</a
                      >
                    </h6>
                    <p>
                      Every pleasures is to welcomed pain avoided owing to the
                      duty the
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="copyright-area-inner">
                  Copyright © 2022 Senatory. All Rights Reserved. Designed by
                  Theme IM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useNewsletterStore } from "../Store/newsletter_store.js";

export default {
  setup() {
    const newsletterStore = useNewsletterStore();

    const handleSubscribe = async () => {
      await newsletterStore.subscribe();
    };

    return {
      newsletterStore,
      handleSubscribe,
    };
  },
};
</script>

<style scoped>
.alert {
  padding: 10px 15px;
  margin-bottom: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

/* Fade out animation for success message */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.is-invalid {
  border-color: #dc3545 !important;
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  color: #dc3545;
}

.form-control:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-sanatory:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
