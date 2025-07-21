<template>
  <div class="history-single-item">
    <span class="circle"></span>
    <div :class="['history-single-item-content', contentClass]">
      <div class="thumb" :style="{ backgroundImage: `url(${item.img})` }"></div>
      <div class="content">
        <h4 class="title">{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div :class="['history-year', yearClass]">
      <p class="month">{{ item.month }}</p>
      <h6 class="year">{{ item.year }}</h6>
    </div>
  </div>
</template>
<script>
export default {
  name: "HistorySingleItem",
  props: {
    item: { type: Object, required: true },
    contentClass: { type: String, default: "" },
    yearClass: { type: String, default: "" },
  },
};
</script>
