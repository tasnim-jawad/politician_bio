import { defineStore } from "pinia";
import axios from "axios";

export const useHomePageStore = defineStore("homePage", {
  state: () => ({
    banner: null,
    services: [],
    whyChoseUs: [],
    principles: [],
    ourJourney: [],
    mediaCoverages: [],
    comments: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchBanner() {
      try {
        const res = await axios.get("/api/banner");
        this.banner = res.data;
      } catch (e) {
        this.error = e;
      }
    },
    async fetchServices() {
      try {
        const res = await axios.get("/api/services");
        this.services = res.data;
      } catch (e) {
        this.error = e;
      }
    },
    async fetchWhyChoseUs() {
      try {
        const res = await axios.get("/api/why-chose-us");
        this.whyChoseUs = res.data;
      } catch (e) {
        this.error = e;
      }
    },
    async fetchPrinciples() {
      try {
        const res = await axios.get("/api/principles");
        this.principles = res.data;
      } catch (e) {
        this.error = e;
      }
    },
    async fetchOurJourney() {
      try {
        const res = await axios.get("/api/our-journey");
        this.ourJourney = res.data;
      } catch (e) {
        this.error = e;
      }
    },
    async fetchMediaCoverages() {
      try {
        const res = await axios.get("/api/media-coverages");
        this.mediaCoverages = res.data;
      } catch (e) {
        this.error = e;
      }
    },
    async fetchComments() {
      try {
        const res = await axios.get("/api/comments");
        this.comments = res.data;
      } catch (e) {
        this.error = e;
      }
    },
    async fetchAllHomePageData() {
      this.loading = true;
      this.error = null;
      try {
        await Promise.all([
          this.fetchBanner(),
          this.fetchServices(),
          this.fetchWhyChoseUs(),
          this.fetchPrinciples(),
          this.fetchOurJourney(),
          this.fetchMediaCoverages(),
          this.fetchComments(),
        ]);
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
  },
});
