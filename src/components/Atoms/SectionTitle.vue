<template>
  <h2 class="mb-5">
    <span v-if="primaryText" style="color: var(--bs-primary)">{{ primaryText }}</span>
    <slot/>
  </h2>
</template>

<script setup>
defineProps({
  primaryText: String
})
</script>