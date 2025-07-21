<template>
  <div
    class="widget widget_archive wow animate__animated animate__fadeInRight animate__delay-2s"
  >
    <h3 class="widget-title style-02">category</h3>
    <ul>
      <li v-for="(cat, idx) in categories" :key="idx">
        <Link :href="cat.url"
          >{{ cat.name }} <span>({{ cat.count }})</span></Link
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { Link } from '@inertiajs/vue3';

export default {
  name: "CategorySection",
  data: function() {
    return {
      categories: [
        { name: "Business Analysis", count: 4, url: "#" },
        { name: "Business Strategy", count: 5, url: "#" },
        { name: "Stock Investment", count: 1, url: "#" },
        { name: "Marketing Analysis", count: 3, url: "#" },
        { name: "Business Analysis", count: 4, url: "#" },
        { name: "Business Analysis", count: 4, url: "#" },
      ],
    };
  },
};
</script>
