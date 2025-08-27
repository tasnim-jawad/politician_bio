import { defineStore } from "pinia";
import axios from "axios";

export const store = defineStore("issue_details_page", {
  state: () => ({
    section_headings: [],
    issue_details: null,
    loading: false,
    error: null,
  }),
  actions: {
    _cache: {},
    _cacheKeyPrefix: "issue_details_page_cache_",
    async _isCacheValid(key) {
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
    async fetch_section_headings() {
      if (await this._isCacheValid("section_headings")) {
        this.section_headings = this._cache["section_headings"].data;
        return;
      }
      try {
        const res = await axios.get("section_headings",{
          params: {
            get_all: 1,
            limit: 1000,
          },
        });
        this.section_headings = res.data;
        await this._setCache("section_headings", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_issue_details(slug) {
      const cacheKey = `issue_details_${slug}`;
      if (await this._isCacheValid(cacheKey)) {
        this.issue_details = this._cache[cacheKey].data;
        console.log("Using cached issue details for:", slug);
        console.log("Cached issue details:", this.issue_details);
        return;
      }
      try {
        const res = await axios.get(`issues/${slug}`);
        // Normalize response for both paginated and non-paginated
        let result = res.data;
        if (!result.data) {
          // If data is not present, fallback to array
          result = {
            data: Array.isArray(res.data) ? res.data : [],
            current_page: 1,
            last_page: 1,
            total: Array.isArray(res.data) ? res.data.length : 0,
            per_page: 6,
          };
        }
        this.issue_details = result;
        await this._setCache(cacheKey, this.issue_details);
      } catch (e) {
        this.error = e;
      }
    },
    // async fetchAllDonationPageData({ page = 1 } = {}) {
    //   this.loading = true;
    //   this.error = null;
    //   try {
    //     await this.fetch_donation_details({ page });
    //   } catch (e) {
    //     this.error = e;
    //   } finally {
    //     this.loading = false;
    //   }
    // },
  },
});
