<template>
  <div class="header-content">
    <h4>Bonjour, je suis</h4>
    <h1>Corentin Lempereur</h1>
    <h6>Développeur Informatique</h6>
    <Button icon="fa-solid fa-print" title="Imprimer mon CV"/>
  </div>
</template>

<style scoped>

.header-content {
  color: var(--bs-light);
}

h4 {
  font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
  line-height: 0;
}

h1 {
  font-weight: bold;
  font-size: calc(40px + (120 - 40) * ((100vw - 300px) / (1600 - 300)));;
}

h6 {
  font-size: calc(12px + (19 - 12) * ((100vw - 300px) / (1600 - 300)));
  letter-spacing: 8px;
  margin-bottom: 40px;
}
</style>

<script setup>
import Button from "../Atoms/Button.vue";</script>