<template>
<Head :title="event.title" />
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Events'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Events', url: '/events/event' },
    ]"
    key="events"
  />
  <!-- banner section End here -->

  <!-- Event items Section Start Here -->
  <div class="issues-around-us-section">
    <div class="container">
      <div class="row">
        <EventSingleItem
          v-for="(event, idx) in events?.data?.data"
          :key="idx"
          :event="event"
        />
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-12">
          <Pagination 
            :currentPage="events?.data?.current_page || 1"
            :totalPages="events?.data?.last_page || 1"
            @prev="goToPage(events?.data?.current_page - 1)"
            @next="goToPage(events?.data?.current_page + 1)"
            @change="goToPage"
            :shape="'squer'"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Event Items Section Start Here -->
</template>
<script>
import { Head } from "@inertiajs/vue3";
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import Pagination from "../../../CommonComponents/Pagination.vue";
import EventSingleItem from "./components/EventSingleItem.vue";

import { mapActions, mapState } from "pinia";
import { store as events_store } from "./Store/events_store.js";

export default {
  props: {
    event: Object,
  },
  components: {
    NavbarArea,
    EventSingleItem,
    Pagination,
    CommonBanner
  },
  data() {
    return {
      current: 1,
      // events: [
      //   {
      //     img: "/frontend/assets/img/event-01.png",
      //     date: "21",
      //     month: "jan",
      //     location: "684 Ann St.  FL 34608",
      //     time: "12:00 am",
      //     title: "The Economy of the US: What are the Weakest Spots?",
      //     url: "/events/event/details",
      //     description:
      //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      //   },
      //   {
      //     img: "/frontend/assets/img/event-02.png",
      //     date: "04",
      //     month: "feb",
      //     location: "684 Ann St.  FL 34608",
      //     time: "12:00 am",
      //     title: "The Economy of the US: What are the Weakest Spots?",
      //     url: "/events/event/details",
      //     description:
      //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      //   },
      //   {
      //     img: "/frontend/assets/img/event-03.png",
      //     date: "17",
      //     month: "feb",
      //     location: "684 Ann St.  FL 34608",
      //     time: "12:00 am",
      //     title: "The Economy of the US: What are the Weakest Spots?",
      //     url: "/events/event/details",
      //     description:
      //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      //   },
      //   {
      //     img: "/frontend/assets/img/evnt-04.png",
      //     date: "23",
      //     month: "feb",
      //     location: "684 Ann St.  FL 34608",
      //     time: "12:00 am",
      //     title: "The Economy of the US: What are the Weakest Spots?",
      //     url: "/events/event/details",
      //     description:
      //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      //   },
      // ],
    };
  },
  watched: {
    events: {
      handler(newVal) {
        console.log("newVal page updated to:", this.events);
        if (newVal && newVal.data && newVal.data.length > 0) {
          this.current = newVal.current_page || 1;
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(events_store, ["fetchAllEventsPageData"]),
    goToPage(page) {
      console.log("Going to page:", page);
      if (page < 1 || page > (this.events.data.last_page || 1)) return;
      this.fetchAllEventsPageData({ page });
    },
  },
  created: async function () {
    await this.fetchAllEventsPageData();
  },
  computed: {
    ...mapState(events_store, ["events"]),
  },
};
</script>
