<template>
  <div class="card">
    <div class="card-header" :id="faq.headerId">
      <h5 class="mb-0">
        <a
          class="collapsed"
          role="button"
          data-toggle="collapse"
          :data-target="'#' + faq.id"
          :aria-expanded="false"
          :aria-controls="faq.id"
        >
          <i class="fas fa-star"></i>
          {{ faq.question }}
        </a>
      </h5>
    </div>
    <div :id="faq.id" class="collapse" data-parent="#accordion">
      <div class="card-body">
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqCard",
  props: {
    faq: Object,
    index: Number,
  },
};
</script>
