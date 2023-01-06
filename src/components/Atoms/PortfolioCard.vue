<template>
  <div class="card rounded-1 border-0">
    <img :src="img" alt="portfolio-project" class="card-img rounded-1">
    <a :href="link" class="card-img-overlay bg-primary invisible opacity-0 rounded-1 text-bg-dark" target="_blank">
      <div class="position-absolute start-50 top-50 translate-middle text-center">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text fst-italic">
          <slot/>
        </p>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  link: String
})
</script>

<style scoped>
.card-img-overlay {
  transition: visibility 0.3s linear, opacity 0.3s linear;
}

.card:hover .card-img-overlay {
  opacity: 0.95 !important;
  visibility: visible !important;
  transition: visibility 0.3s linear, opacity 0.3s linear;
}
</style>