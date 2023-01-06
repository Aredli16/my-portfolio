<template>
  <h6 class="text-primary fs-4">{{ date }}</h6>
  <p class="text-muted opacity-75">{{ experience }} | <span class="fst-italic">{{ location }}</span></p>
  <p class="text-muted">
    <slot/>
  </p>
</template>

<script setup>
defineProps({
  date: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})
</script>