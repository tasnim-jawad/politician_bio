<template>
  <div>
    <!-- <Header /> -->
    <div class="main-wrapper">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { store as section_headings_store } from "@/Store/section_headings_store";
import { mapActions } from "pinia";
export default {
  name: "Layout",
  components: { Header, Footer },
  methods: {
    ...mapActions(section_headings_store, [
      "fetch_section_headings",
    ]),
  },
  created: async function() {
    await this.fetch_section_headings();
  },
};
</script>

<style></style>
