<template>
  <div class="news-single-items wow animate__animated animate__fadeInUp">
    <div class="news-bg" :style="{ backgroundImage: `url(${item.bg})` }">
      <span class="even">Event</span>
      <div class="content">
        <h4 class="title">
          <a :href="item.url">{{ item.title }}</a>
        </h4>
        <div class="author-meta">
          <p class="author-name">By:{{ item.author }}</p>
          <p>{{ item.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsSingleItem",
  props: {
    item: Object,
  },
};
</script>
