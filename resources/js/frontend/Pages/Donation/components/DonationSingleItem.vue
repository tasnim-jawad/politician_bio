<template>
  <div class="issues-single-items">
    <div class="issue-img" :style="{ backgroundImage: `url(${img})` }">
      <div class="content">
        <h4 class="title">
          <Link :href="detailsUrl">{{ title }}</Link>
        </h4>
        <div class="progress-content">
          <div class="progress-item">
            <div class="single-progressbar">
              <div class="html">
                <div
                  class="progressbar"
                  style="
                    width: 100%;
                    background-color: transparent;
                    border-radius: 8px;
                  "
                >
                  <div
                    class="proggress"
                    :style="
                      Object.assign(
                        {
                          backgroundColor: 'rgb(175, 15, 21)',
                          height: '5px',
                          borderRadius: '8px',
                        },
                        percentStyle
                      )
                    "
                  ></div>
                  <div class="percentCount" :style="percentCountStyle">
                    {{ percent }}%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="goal">
            <h4 class="raised">Raised : {{ unit }}{{ raised }}</h4>
            <h4 class="raised">Goal : {{ unit }}{{ goal }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DonationSingleItem",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    detailsUrl: {
      type: String,
      default: "/donation/details",
    },
    raised: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      default: "$",
    },
  },
  computed: {
    percent() {
      // Remove commas and convert to number
      const raisedNum = parseFloat(this.raised.replace(/,/g, ""));
      const goalNum = parseFloat(this.goal.replace(/,/g, ""));
      if (!goalNum) return 0;
      return Math.min(100, Math.round((raisedNum / goalNum) * 100));
    },
    percentStyle() {
      return {
        width: this.percent + "%",
      };
    },
    percentCountStyle() {
      return {
        left: `calc(${this.percent}% - 20px)`,
      };
    },
  },
};
</script>
