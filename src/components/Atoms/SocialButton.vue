<template>
  <FontAwesomeIcon :class="{secondary: secondary, primary: !secondary}" :icon="icon" class="icon"/>
</template>

<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  icon: {
    type: String,
    required: true
  },
  secondary: Boolean
})
</script>

<style scoped>
.icon {
  font-size: 18px;
  margin-right: 20px;
}

.primary {
  color: var(--bs-primary);
}

.secondary {
  color: var(--bs-light);
}
</style>