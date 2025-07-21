<template>
  <div :class="['blog-pagination', shapeClass]">
    <div :class="['blog-pagination', marginClass, shapeClass]">
      <ul>
        <li><span @click="$emit('prev')">PREV</span></li>
        <li v-for="page in pages" :key="page">
          <a
            class="page-numbers"
            :class="{ current: page === currentPage }"
            href="#"
            @click.prevent="$emit('change', page)"
            >{{ page < 10 ? "0" + page : page }}</a
          >
        </li>
        <li>
          <span class="next page-numbers" @click="$emit('next')">NEXT</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 4,
    },
    shape: {
      type: String,
      default: "circle", // 'squer' or 'circle'
      validator: (v) => ["squer", "circle"].includes(v),
    },
  },
  computed: {
    pages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
    shapeClass() {
      return this.shape === "squer" ? "style-01" : "";
    },
    marginClass() {
      return "margin-top-30";
    },
  },
};
</script>
<style scoped>
/* Add any custom styles if needed */
</style>
