<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Our History'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Our History', url: '/pages/history' },
    ]"
    key="history"
  />
  <!-- banner section End here -->

  <!-- Jour Journey Section Start Her -->
  <our-journey :journeyItems="journeyItems" :contentPosition="'top_left'" />
  <!-- Jour Journey Section End Her -->

  <!-- Our History Timeline Section Start Here -->
  <history-timeline :timelineItems="historyTimelineItems" />
  <!-- Our History Timeline Section End Here -->

  <!-- Counter Section Start -->
  <at-a-glance />
  <!-- Counter Section End -->
</template>
<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import OurJourney from "../../../GlobalComponent/OurJourney.vue";
import HistoryTimeline from "../../../GlobalComponent/HistoryTimeline.vue";
import AtAGlance from '../../../GlobalComponent/AtAGlance.vue'
import CommonBanner from '../../../CommonComponents/CommonBanner.vue';

export default {
  components: {
    NavbarArea,
    OurJourney,
    HistoryTimeline,
    AtAGlance,
    CommonBanner,
  },
  data() {
    return {
      journeyItems: [
        {
          img: "/frontend/assets/img/Home-five/clining-city.png",
          title: "Clean City Program",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
          year: 2005,
        },
        {
          img: "/frontend/assets/img/Home-five/food-donation.png",
          title: "Food Donation Program",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
          year: 2006,
        },
        {
          img: "/frontend/assets/img/Home-five/blood-donation.jpg",
          title: "Blood Donation Program",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
          year: 2007,
        },
        {
          img: "/frontend/assets/img/Home-five/charity-program.jpg",
          title: "Charity Program",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
          year: 2008,
        },
        {
          img: "/frontend/assets/img/Home-five/clild-education.jpg",
          title: "Child Education Program",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
          year: 2009,
        },
        {
          img: "/frontend/assets/img/Home-five/profesonal.jpg",
          title: "Professional Training",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
          year: 2010,
        },
        {
          img: "/frontend/assets/img/Home-five/save-animal.jpg",
          title: "Save The animal Program",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
          year: 2011,
        },
        {
          img: "/frontend/assets/img/history.png",
          title: "Our Journey",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently.",
          year: 2015,
        },
        // ...add more items as needed...
      ],
      historyTimelineItems: [
        {
          img: "/frontend/assets/img/history-02.png",
          title: "Let’s Make Country Great with Razniti",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.",
          month: "January",
          year: 2018,
        },
        {
          img: "/frontend/assets/img/history-03.png",
          title: "Let’s Make Country Great with Razniti",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.",
          month: "February",
          year: 2019,
        },
        {
          img: "/frontend/assets/img/history-04.png",
          title: "Let’s Make Country Great with Razniti",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.",
          month: "March",
          year: 2020,
        },
        {
          img: "/frontend/assets/img/history-05.png",
          title: "Let’s Make Country Great with Razniti",
          description:
            "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.",
          month: "April",
          year: 2021,
        },
      ],
    };
  },

  // mounted() {
  //   this.$nextTick(() => {
  //     const $sliderOne = $(".history-slider-one");
  //     const $sliderTwo = $(".history-slider-two");

  //     if ($sliderOne.length && !$sliderOne.hasClass("slick-initialized")) {
  //       $sliderOne.slick({
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: true,
  //         fade: true,
  //         asNavFor: ".history-slider-two",
  //         appendArrows: $(".slick-slider-controls .slick-nav"),
  //         prevArrow:
  //           '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
  //         nextArrow:
  //           '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
  //       });
  //     }

  //     if ($sliderTwo.length && !$sliderTwo.hasClass("slick-initialized")) {
  //       $sliderTwo.slick({
  //         slidesToShow: 6,
  //         slidesToScroll: 1,
  //         asNavFor: ".history-slider-one",
  //         focusOnSelect: true,
  //         arrows: false,
  //         responsive: [
  //           {
  //             breakpoint: 768,
  //             settings: {
  //               slidesToShow: 3,
  //             },
  //           },
  //           {
  //             breakpoint: 480,
  //             settings: {
  //               slidesToShow: 2,
  //             },
  //           },
  //         ],
  //       });
  //     }
  //   });
  // },
};
</script>
