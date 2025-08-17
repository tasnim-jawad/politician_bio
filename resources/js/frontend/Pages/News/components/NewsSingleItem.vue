<template>
  <div class="news-single-items wow animate__animated animate__fadeInUp">
    <div
      class="news-bg"
      :style="{ backgroundImage: `url(/${item?.banner_image})` }"
    >
      <span class="even">{{ item?.tags }}</span>
      <div class="content">
        <h4 class="title">
          <Link :href="`/news/details?slug=${item.slug}`">{{ item?.title }}</Link>
        </h4>
        <div class="author-meta">
          <p class="author-name">
            By:{{ item?.author ? item?.author : "Admin" }}
          </p>
          <p>{{ formatDate(item?.date) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsSingleItem",
  props: {
    item: Object,
  },
  methods: {
    formatDate(date) {
      if (!date) return "";

      try {
        const dateObj = new Date(date);

        // Get day with suffix (1st, 2nd, 3rd, 4th, etc.)
        const day = dateObj.getDate();
        const dayWithSuffix = this.getDayWithSuffix(day);

        // Get month name
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const month = months[dateObj.getMonth()];

        // Get full year
        const year = dateObj.getFullYear();

        return `${dayWithSuffix} ${month}, ${year}`;
      } catch (error) {
        console.warn("Invalid date format:", date);
        return date; // Return original if parsing fails
      }
    },

    getDayWithSuffix(day) {
      if (day >= 11 && day <= 13) {
        return day + "th";
      }
      switch (day % 10) {
        case 1:
          return day + "st";
        case 2:
          return day + "nd";
        case 3:
          return day + "rd";
        default:
          return day + "th";
      }
    },
  },
};
</script>
