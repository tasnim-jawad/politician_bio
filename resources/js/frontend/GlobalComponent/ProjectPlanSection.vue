<template>
  <div class="project-plaing-section margin-top-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="single-items-wrapper planing-bg"
            style="background-image: url(/frontend/assets/img/woman-hands.png)"
          >
            <div
              v-for="(item, idx) in planingItems"
              :key="idx"
              :class="[
                'planing-item-wrapper',
                'wow',
                'animate__animated',
                'animate__fadeInLeft',
                item.delay,
              ]"
            >
              <div
                :class="['planing-single-item', idx === 1 ? 'style-01' : '']"
              >
                <div class="icon">
                  <i :class="item.icon"></i>
                </div>
                <div class="content">
                  <h6 class="title">{{ item.title }}</h6>
                  <p>{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            v-for="(item, idx) in principleItems"
            :key="idx"
            :class="[
              'princilple-single-items',
              'style-01',
              'wow',
              'animate__animated',
              'animate__fadeInUp',
              item.delay,
            ]"
          >
            <div class="icon style-01">
              <i :class="item.icon"></i>
            </div>
            <div class="content">
              <h4 class="title style-01">{{ item.title }}</h4>
              <p class="style-01">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPlanSection",
  data() {
    return {
      planingItems: [
        {
          icon: "icon-manager",
          title: "Management",
          value: "102+",
          delay: "",
        },
        {
          icon: "icon-mike",
          title: "Campaigns",
          value: "100%",
          delay: "animate__delay-1s",
        },
        {
          icon: "icon-location-02",
          title: "Coverage Area",
          value: "98%",
          delay: "animate__delay-2s",
        },
      ],
      principleItems: [
        {
          icon: "icon-resource",
          title: "Project Planing",
          desc: "Efficiently orchestrate resource sucking human capital whereas future-proof outsourcing.",
          delay: "",
        },
        {
          icon: "icon-form",
          title: "Collecting Requirements",
          desc: "Efficiently orchestrate resource sucking human capital whereas future-proof outsourcing.",
          delay: "animate__delay-1s",
        },
        {
          icon: "icon-analyzing",
          title: "Analyzing About Service",
          desc: "Efficiently orchestrate resource sucking human capital whereas future-proof outsourcing.",
          delay: "animate__delay-3s",
        },
        {
          icon: "icon-final-flag",
          title: "Final Deployment",
          desc: "Efficiently orchestrate resource sucking human capital whereas future-proof outsourcing.",
          delay: "animate__delay-4s",
        },
      ],
    };
  },
};
</script>
