<template>
  <div class="contact_map">
    <iframe
      :src="src"
      style="border: 0; width: 100%; height: 100%"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "LocationMap",
  props: {
    src: {
      type: String,
      default:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1588510922243!5m2!1sen!2sbd",
    },
  },
};
</script>
