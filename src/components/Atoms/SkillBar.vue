<template>
  <h6 class="text-muted fw-bold">{{ skill }}</h6>
  <div :aria-valuenow="percentage" aria-label="Info example" aria-valuemax="100" aria-valuemin="0" class="progress mb-3"
       role="progressbar">
    <div :style="{'width': percentage + '%'}" class="progress-bar bg-primary"></div>
  </div>
</template>


<script setup>
defineProps({
  skill: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.progress {
  border-radius: 0;
  height: 5px;
}
</style>