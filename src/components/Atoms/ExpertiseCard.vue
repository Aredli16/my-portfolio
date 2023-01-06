<template>
  <div class="row ">
    <div class="col-2">
      <FontAwesomeIcon :icon="icon" class="icon text-primary"/>
    </div>
    <div class="col-10">
      <h6>{{ name }}</h6>
      <p class="text-muted">{{ description }}</p>
      <hr class="mb-5">
    </div>
  </div>
</template>

<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.icon {
  font-size: 30px;
}


.text-muted {
  font-size: 14px;
}
</style>
