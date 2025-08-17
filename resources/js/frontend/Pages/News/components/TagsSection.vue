<template>
  <div
    class="widget widget_tag_cloud wow animate__animated animate__fadeInRight animate__delay-3s"
  >
    <h2 class="widget-title style-02">Tags</h2>
    <div class="tagcloud">
      <!-- Show all tags button if currently filtered -->
      <a
        v-if="currentFilter.type === 'tag'"
        @click="clearFilter"
        class="tag-all"
        style="cursor: pointer; background-color: #f0f0f0; margin-right: 5px"
      >
        All News
      </a>
      <!-- Display dynamic tags from store -->
      <a
        v-for="(tag, idx) in tags"
        :key="idx"
        @click="handleTagClick(tag)"
        :class="{
          active:
            currentFilter.type === 'tag' && currentFilter.tag_name === tag,
        }"
        style="cursor: pointer"
      >
        {{ tag }}
      </a>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { store as news_store } from "../Store/news_store.js";

export default {
  name: "TagsSection",
  computed: {
    ...mapState(news_store, ["tags", "currentFilter"]),
  },
  watch: {
    currentFilter: {
      handler(newFilter) {
        console.log("Filter changed in TagsSection:", newFilter);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions(news_store, ["filterByTag", "clearFilter"]),
    handleTagClick(tag) {
      console.log("Tag clicked:", tag, "Current filter:", this.currentFilter);
      this.filterByTag(tag);
    },
  },
};
</script>

<style scoped>
.tagcloud a.active {
  background-color: #007bff;
  color: white;
}
.tagcloud a:hover {
  background-color: #0056b3;
  color: white;
}
</style>
