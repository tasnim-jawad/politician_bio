import { defineStore } from "pinia";
import axios from "axios";

export const store = defineStore("donation_details_page", {
  state: () => ({
    donations: {
      data: [],
      current_page: 1,
      last_page: 1,
      total: 0,
      per_page: 6,
    },
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
    async fetch_donation_details({ page = 1 } = {}) {
      const cacheKey = `donations_page_${page}`;
      if (this._isCacheValid(cacheKey)) {
        this.donations = this._cache[cacheKey].data;
        return;
      }
      try {
        const res = await axios.get("donation-details/", {
          params: {
            page,
            limit: 6,
          },
        });
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
        this.donations = result;
        this._setCache(cacheKey, this.donations);
      } catch (e) {
        this.error = e;
      }
    },
    async fetchAllDonationPageData({ page = 1 } = {}) {
      this.loading = true;
      this.error = null;
      try {
        await this.fetch_donations({ page });
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
  },
});
