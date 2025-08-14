<template>
  <div class="contact_map">
    <iframe
      :src="validLocation"
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
    location: {
      type: String,
      default:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1588510922243!5m2!1sen!2sbd",
    },
  },
  computed: {
    validLocation() {
      const defaultLocation =
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1588510922243!5m2!1sen!2sbd";

      if (!this.location || this.location.trim() === "") {
        return defaultLocation;
      }

      try {
        const url = new URL(this.location);

        // If already embed link, return it
        if (
          url.hostname.includes("google.com") &&
          url.pathname.includes("/maps/embed")
        ) {
          return this.location;
        }

        // Extract query or coordinates for any google maps link
        let q = url.searchParams.get("q");
        if (!q) {
          const matchCoords = url.pathname.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
          if (matchCoords) {
            q = `${matchCoords[1]},${matchCoords[2]}`;
          } else {
            // For /place/ or /dir/ or any other path, use the last part as query
            const parts = url.pathname.split("/").filter(Boolean);
            const placePart = parts[parts.length - 1];
            if (placePart && !placePart.startsWith("maps")) {
              q = decodeURIComponent(placePart.replace(/\+/g, " "));
            }
          }
        }

        if (q) {
          // Use the old embed format that doesn't require API key
          return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3651.0!2d90.41!3d23.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1588510922243!5m2!1sen!2sbd&q=${encodeURIComponent(
            q
          )}`;
        }

        console.warn("Unrecognized Google Maps format, using default location");
        return defaultLocation;
      } catch (error) {
        console.warn("Invalid URL format provided, using default location");
        return defaultLocation;
      }
    },
  },
};
</script>
