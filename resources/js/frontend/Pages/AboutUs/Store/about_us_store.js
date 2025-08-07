import { defineStore } from "pinia";
import axios from "axios";

export const store = defineStore("about_us_page", {
  state: () => ({
    about_us: null,
    whyChoseUs: [],
    volunteers: [],
    mission_vision: [],
    counters: [],
    
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
    async fetch_about_us() {
      if (this._isCacheValid("about_us")) {
        this.about_us = this._cache["about_us"].data;
        return;
      }
      try {
        const res = await axios.get("about-uses/custom-data");
        this.about_us = res.data;
        this._setCache("about_us", res.data);
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
    

    async fetch_volunteers() {
      if (this._isCacheValid("volunteers")) {
        this.volunteers = this._cache["volunteers"].data;
        return;
      }
      try {
        const res = await axios.get("volunteers/custom-data");
        this.volunteers = res.data;
        this._setCache("volunteers", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_mission_vision() {
      if (this._isCacheValid("mission_vision")) {
        this.mission_vision = this._cache["mission_vision"].data;
        return;
      }
      try {
        const res = await axios.get("mission-visions/custom-data");
        this.mission_vision = res.data;
        console.log("Media coverages fetched:", res.data);
        
        this._setCache("mission_vision", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    async fetch_counters() {
      if (this._isCacheValid("counters")) {
        this.counters = this._cache["counters"].data;
        return;
      }
      try {
        const res = await axios.get("counters/custom-data");
        this.counters = res.data;
        this._setCache("counters", res.data);
      } catch (e) {
        this.error = e;
      }
    },
    
    async fetchAllAboutUsPageData() {
      this.loading = true;
      this.error = null;
      try {
        await Promise.all([
          this.fetch_about_us(),
          this.fetch_why_chose_us(),
          this.fetch_volunteers(),
          this.fetch_mission_vision(),
          this.fetch_counters()
        ]);
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
  },
});
