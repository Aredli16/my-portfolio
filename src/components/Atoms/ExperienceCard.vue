<template>
  <h6 class="text-primary fs-4">{{ startingDate }} - {{ endingDate }}</h6>
  <p class="text-muted opacity-75">{{ experience }} | {{ location }}</p>
  <p class="text-muted">
    <slot/>
  </p>
  <hr>
</template>

<script setup>
defineProps({
  startingDate: {
    type: String,
    required: true
  },
  endingDate: {
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