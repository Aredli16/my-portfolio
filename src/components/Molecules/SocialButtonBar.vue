<template>
  <div class="d-flex">
    <a href="https://www.facebook.com/profile.php?id=100009306909887" target="_blank">
      <SocialButton :secondary="secondary" icon="fa-brands fa-facebook"/>
    </a>
    <a href="https://twitter.com/coco_lempereur" target="_blank">
      <SocialButton :secondary="secondary" icon="fa-brands fa-twitter"/>
    </a>
    <a href="https://www.instagram.com/corentinlempereur/" target="_blank">
      <SocialButton :secondary="secondary" icon="fa-brands fa-instagram"/>
    </a>
    <a href="https://www.linkedin.com/in/lempereurcorentin/" target="_blank">
      <SocialButton :secondary="secondary" icon="fa-brands fa-linkedin"/>
    </a>
    <a href="https://github.com/Aredli16" target="_blank">
      <SocialButton :secondary="secondary" icon="fa-brands fa-github"/>
    </a>


  </div>
</template>

<script setup>
import SocialButton from "../Atoms/SocialButton.vue";

defineProps({
  secondary: Boolean
})
</script>