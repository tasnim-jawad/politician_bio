<template>
    <div class="issues-single-items style-01">
      <div class="issue-img" :style="{ backgroundImage: `url(${img})` }">
        <div class="content">
          <h4 class="title">
            <a :href="url">{{ title }}</a>
          </h4>
          <p>{{ desc }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "IssueItem",
  props: {
    img: String,
    title: String,
    url: String,
    desc: String,
  },
};
</script>
