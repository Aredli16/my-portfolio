<template>
  <div class="d-flex">
    <SocialButton :secondary="secondary" icon="fa-brands fa-facebook"/>
    <SocialButton :secondary="secondary" icon="fa-brands fa-twitter"/>
    <SocialButton :secondary="secondary" icon="fa-brands fa-instagram"/>
    <SocialButton :secondary="secondary" icon="fa-brands fa-github"/>
    <SocialButton :secondary="secondary" icon="fa-brands fa-linkedin"/>
  </div>
</template>

<script setup>
import SocialButton from "../Atoms/SocialButton.vue";

defineProps({
  secondary: Boolean
})
</script>