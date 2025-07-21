<template>
  <div
    class="widget widget_recent_posts wow animate__animated animate__fadeInRight animate__delay-1s"
  >
    <h4 class="widget-title style-02">Recent Post</h4>
    <ul class="recent_post_item">
      <li
        class="single-recent-post-item"
        v-for="(post, idx) in recentPosts"
        :key="idx"
      >
        <div class="thumb">
          <img :src="post.img" :alt="post.alt" />
        </div>
        <div class="content">
          <span class="time">{{ post.time }}</span>
          <h4 class="title">
            <a :href="post.url">{{ post.title }}</a>
          </h4>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RecentPostSection",
  data() {
    return {
      recentPosts: [
        {
          img: "/frontend/assets/img/blog-01.png",
          alt: "recent post",
          time: "AUG 23,2021",
          title: "Producing ideas is the main way to grow the",
          url: "#",
        },
        {
          img: "/frontend/assets/img/blog-02.png",
          alt: "recent post",
          time: "AUG 23,2021",
          title: "Donald Rumsfeld: Anti–Nation-Builder",
          url: "#",
        },
        {
          img: "/frontend/assets/img/blog-03.png",
          alt: "recent post",
          time: "AUG 23,2021",
          title: "Negotiating with TTP—A Different Perspective",
          url: "#",
        },
        {
          img: "/frontend/assets/img/blog-04.png",
          alt: "recent post",
          time: "AUG 23,2021",
          title: "Policing in the Post-Floyd Era",
          url: "#",
        },
      ],
    };
  },
};
</script>
