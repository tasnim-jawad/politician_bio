<template>
  <div class="col-lg-6 col-md-6">
    <div class="event-single-items wow animate__animated animate__fadeInUp">
      <div
        class="event-img"
        :style="{ backgroundImage: `url(${event.img})` }"
      ></div>
      <div class="content">
        <div class="post-mate">
          <h2 class="post-date">{{ event.date }}</h2>
          <div class="post-month">{{ event.month }}</div>
        </div>
        <div class="subtitle">
          <div class="location">
            <div class="icon">
              <i class="icon-location"></i>
            </div>
            <p>{{ event.location }}</p>
          </div>
          <div class="time">
            <div class="icon">
              <i class="icon-clock"></i>
            </div>
            <p>{{ event.time }}</p>
          </div>
        </div>
        <h4 class="title">
          <a :href="event.url">{{ event.title }}</a>
        </h4>
        <p class="description">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventSingleItem",
  props: {
    event: Object,
  },
};
</script>
