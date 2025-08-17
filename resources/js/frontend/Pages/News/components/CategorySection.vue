<template>
  <div
    class="widget widget_archive wow animate__animated animate__fadeInRight animate__delay-2s"
  >
    <h3 class="widget-title style-02">category</h3>
    <ul>
      <li v-if="categories.length === 0">
        <span>No categories available</span>
      </li>
      <li v-for="(cat, idx) in categories" :key="idx">
        <a href="#" @click.prevent="filterByCategory(cat.id)"
          >{{ cat.title }} <span>({{ cat.news_count || 0 }})</span></a
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { store as news_store } from "../Store/news_store.js";

export default {
  name: "CategorySection",
  computed: {
    ...mapState(news_store, ["categories"]),
  },
  methods: {
    ...mapActions(news_store, ["filterByCategory"]),
  },
};
</script>
