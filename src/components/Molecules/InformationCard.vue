<template>
  <div class="card">
    <CardTitle>{{ title }}</CardTitle>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import CardTitle from "../Atoms/CardTitle.vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  noBorder: Boolean
})
</script>

<style scoped>
.card {
  padding: 60px;
  border-radius: 0;
}

.content {
  margin-top: 40px;
}
</style>