<template>
  <div
    class="widget widget_tag_cloud wow animate__animated animate__fadeInRight animate__delay-3s"
  >
    <h2 class="widget-title style-02">Tags</h2>
    <div class="tagcloud">
      <Link v-for="(tag, idx) in tags" :key="idx" :href="tag.url">{{
        tag.name
      }}</Link>
    </div>
  </div>
</template>
<script>
import { Link } from "@inertiajs/vue3";

export default {
  name: "TagsSection",
  data:function() {
    return {
      tags: [
        { name: "Branding", url: "#" },
        { name: "Art guide", url: "#" },
        { name: "Marketing", url: "#" },
        { name: "Gallery", url: "#" },
        { name: "Corporate", url: "#" },
        { name: "Business", url: "#" },
      ],
    };
  },
};
</script>
