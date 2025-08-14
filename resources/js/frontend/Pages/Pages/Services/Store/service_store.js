import { defineStore } from "pinia";
import axios from "axios";

export const store = defineStore("services_page", {
  state: () => ({
    services: [],
    comments: [],
    project_planings: null,
    news: [],
    loading: false,
    error: null,
  }),
  actions: {
    _cache: {},
    _cacheKeyPrefix: "services_page_cache_",
    async _isCacheValid(key) {
      // Try memory first, then Cache Storage
      let entry = this._cache[key];
      if (!entry && "caches" in window) {
        try {
          const cache = await caches.open(this._cacheKeyPrefix);
          const match = await cache.match(key);
          if (match) {
            entry = await match.json();
            this._cache[key] = entry;
          }
        } catch (e) {}
      }
      if (!entry) return false;
      const now = Date.now();
      return now - entry.timestamp < 600000;
    },
    async _setCache(key, data) {
      const entry = { data, timestamp: Date.now() };
      this._cache[key] = entry;
      if ("caches" in window) {
        try {
          const cache = await caches.open(this._cacheKeyPrefix);
          const response = new Response(JSON.stringify(entry), {
            headers: { "Content-Type": "application/json" },
          });
          await cache.put(key, response);
        } catch (e) {}
      }
    },
    async fetch_services() {
      if (await this._isCacheValid("services")) {
        this.services = this._cache["services"].data;
        return;
      }
      try {
        const res = await axios.get("services/custom-data");
        this.services = res.data;
        await this._setCache("services", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_comments() {
      if (await this._isCacheValid("comments")) {
        this.comments = this._cache["comments"].data;
        return;
      }
      try {
        const res = await axios.get("public-comments/custom-data");
        this.comments = res.data;
        await this._setCache("comments", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_project_planings() {
      if (await this._isCacheValid("project_planings")) {
        this.project_planings = this._cache["project_planings"].data;
        return;
      }
      try {
        const res = await axios.get("project-planings", {
          params: {
            latest_data:true,
          },
        });
        this.project_planings = res.data;
        await this._setCache("project_planings", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_news() {
      if (await this._isCacheValid("news")) {
        this.news = this._cache["news"].data;
        return;
      }
      try {
        const res = await axios.get("news/custom-data");
        this.news = res.data;
        await this._setCache("news", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetchAllServicesPageData() {
      this.loading = true;
      this.error = null;
      try {
        await Promise.all([
          this.fetch_services(),
          this.fetch_comments(),
          this.fetch_project_planings(),
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
