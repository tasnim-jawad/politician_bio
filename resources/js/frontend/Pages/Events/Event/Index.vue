<template>
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
          v-for="(event, idx) in events"
          :key="idx"
          :event="event"
        />
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-9 col-9">
          <Pagination
            :currentPage="current"
            :totalPages="4"
            @prev="current--"
            @next="current++"
            @change="(page) => (current = page)"
            :shape="'squer'"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Event Items Section Start Here -->
</template>
<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import Pagination from "../../../CommonComponents/Pagination.vue";
import EventSingleItem from "./components/EventSingleItem.vue";

export default {
  components: {
    NavbarArea,
    EventSingleItem,
    Pagination,
    CommonBanner
  },
  data() {
    return {
      current: 3,
      events: [
        {
          img: "/frontend/assets/img/event-01.png",
          date: "21",
          month: "jan",
          location: "684 Ann St.  FL 34608",
          time: "12:00 am",
          title: "The Economy of the US: What are the Weakest Spots?",
          url: "/events/event/details",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          img: "/frontend/assets/img/event-02.png",
          date: "04",
          month: "feb",
          location: "684 Ann St.  FL 34608",
          time: "12:00 am",
          title: "The Economy of the US: What are the Weakest Spots?",
          url: "/events/event/details",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          img: "/frontend/assets/img/event-03.png",
          date: "17",
          month: "feb",
          location: "684 Ann St.  FL 34608",
          time: "12:00 am",
          title: "The Economy of the US: What are the Weakest Spots?",
          url: "/events/event/details",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          img: "/frontend/assets/img/evnt-04.png",
          date: "23",
          month: "feb",
          location: "684 Ann St.  FL 34608",
          time: "12:00 am",
          title: "The Economy of the US: What are the Weakest Spots?",
          url: "/events/event/details",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
      ],
    };
  },
};
</script>
