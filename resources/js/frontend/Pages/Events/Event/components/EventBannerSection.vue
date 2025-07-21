<template>
  <div class="event-content-section margin-top-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="event-single-items">
            <img
              src="/frontend/assets/img/event-single-shape.png"
              class="event-single-shape"
              alt=""
            />
            <div class="bg-wrapper">
              <div
                class="event-bg"
                style="
                  background-image: url(/frontend/assets/img/event-single-bg.png);
                "
              >
                <div class="post-mate style-01">
                  <h2 class="post-date">04</h2>
                  <div class="post-month">feb</div>
                </div>
                <my-countdown :date-time="'2025-09-23 13:00:00'" />
              </div>
            </div>
            <div class="content style-01">
              <div class="subtitle">
                <div class="location">
                  <div class="icon">
                    <i class="icon-location"></i>
                  </div>
                  <p>684 Ann St. FL 34608</p>
                </div>
                <div class="time">
                  <div class="icon">
                    <i class="icon-clock"></i>
                  </div>
                  <p>12:00 am</p>
                </div>
              </div>
              <h4 class="title wow animate__animated animate__fadeInUp">
                The Economy of the US: What are the Weakest Spots?
              </h4>
              <p class="description wow animate__animated animate__fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in magna ac tellus fringilla eleifend. Mauris et velit risus.
                Phasellus nisi ipsum, fermentum egetosse consequat non, molestie
                at augue. Proin rutrum sem a rutrum ultricies. Nunc felis neque,
                dictum ut porta a, ullamcorper vel ante. Quisque non consequat
                ligula. Be to Pellentesque porttitor eu nisi eu bibendum. In non
                faucibus justo, et viverra lectus. Fusce sodales mauris et velit
                accumsan vulputate.Lorem ipsum dolor sit amet, set consectetur
                adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.
              </p>
              <p class="description wow animate__animated animate__fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in magna ac tellus fringilla eleifend. Mauris et velit risus.
                Phasellus nisi ipsum, fermentum egetosse consequat non, molestie
                at augue. Proin rutrum sem a rutrum ultricies. Nunc felis neque,
                dictum ut porta a, ullamcorper vel ante. Quisque non consequat
                ligula. Be to Pellentesque porttitor eu nisi eu bibendum. In non
                faucibus justo.
              </p>
            </div>
          </div>
          <div class="event-location">
            <div class="row">
              <div class="col-lg-4">
                <join-the-event />
              </div>
              <div class="col-lg-8">
                <location-map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyCountdown from "./MyCountdown.vue";
import JoinTheEvent from "./JoinTheEvent.vue";
import LocationMap from "../../../../GlobalComponent/LocationMap.vue";
export default {
  name: "EventBannerSection",
  components: {
    MyCountdown,
    JoinTheEvent,
    LocationMap,
  },
};
</script>
