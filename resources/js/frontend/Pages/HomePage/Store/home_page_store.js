import { defineStore } from "pinia";
import axios from "axios";

export const store = defineStore("home_page", {
  state: () => ({
    banner: null,
    services: [],
    whyChoseUs: [],
    principles: [],
    ourJourney: [],
    mediaCoverages: [],
    comments: [],
    news: [],
    loading: false,
    error: null,
  }),
  actions: {
    _cache: {},
    _isCacheValid(key) {
      const entry = this._cache[key];
      if (!entry) return false;
      const now = Date.now();
      // 10 minutes = 600000 ms
      return now - entry.timestamp < 600000;
    },
    _setCache(key, data) {
      this._cache[key] = { data, timestamp: Date.now() };
    },
    async fetch_banner() {
      if (this._isCacheValid("banners")) {
        this.banner = this._cache["banners"].data;
        return;
      }
      try {
        const res = await axios.get("banners/custom-data");
        this.banner = res.data;
        this._setCache("banners", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_services() {
      if (this._isCacheValid("services")) {
        this.services = this._cache["services"].data;
        return;
      }
      try {
        const res = await axios.get("services/custom-data");
        this.services = res.data;
        this._setCache("services", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_why_chose_us() {
      if (this._isCacheValid("whyChoseUs")) {
        this.whyChoseUs = this._cache["whyChoseUs"].data;
        return;
      }
      try {
        const res = await axios.get("why-chose-uses/custom-data");
        this.whyChoseUs = res.data;
        this._setCache("whyChoseUs", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_principles() {
      if (this._isCacheValid("principles")) {
        this.principles = this._cache["principles"].data;
        return;
      }
      try {
        const res = await axios.get("our-principles/custom-data");
        this.principles = res.data;
        this._setCache("principles", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_our_journey() {
      if (this._isCacheValid("ourJourney")) {
        this.ourJourney = this._cache["ourJourney"].data;
        return;
      }
      try {
        const res = await axios.get("our-journeys/custom-data");
        this.ourJourney = res.data;
        this._setCache("ourJourney", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_media_coverages() {
      if (this._isCacheValid("mediaCoverages")) {
        this.mediaCoverages = this._cache["mediaCoverages"].data;
        return;
      }
      try {
        const res = await axios.get("media-coverages/custom-data");
        this.mediaCoverages = res.data;
        console.log("Media coverages fetched:", res.data);
        
        this._setCache("mediaCoverages", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_comments() {
      if (this._isCacheValid("comments")) {
        this.comments = this._cache["comments"].data;
        return;
      }
      try {
        const res = await axios.get("public-comments/custom-data");
        this.comments = res.data;
        this._setCache("comments", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_news() {
      if (this._isCacheValid("news")) {
        this.news = this._cache["news"].data;
        return;
      }
      try {
        const res = await axios.get("news/custom-data");
        this.news = res.data;
        this._setCache("news", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetchAllHomePageData() {
      this.loading = true;
      this.error = null;
      try {
        await Promise.all([
          this.fetch_banner(),
          this.fetch_services(),
          this.fetch_why_chose_us(),
          this.fetch_principles(),
          this.fetch_our_journey(),
          this.fetch_media_coverages(),
          this.fetch_comments(),
          this.fetch_news(),
        ]);
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
  },
});
