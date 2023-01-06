<template>
  <button :class="{outlined: outlined}" class="btn btn-primary">
    <FontAwesomeIcon v-if="icon" :icon="icon"/>
    {{ title }}
  </button>
</template>


<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: String,
  outlined: Boolean
})
</script>

<style scoped>
.outlined {
  background-color: transparent;
  color: var(--bs-primary);
  border-color: var(--bs-primary);
  border-radius: 5px;
}
</style>