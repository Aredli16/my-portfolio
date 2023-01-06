<template>
  <Header/>
  <main>
    <About/>
    <Resume/>
    <Portfolio/>
  </main>
  <footer>
    <Contact/>
  </footer>
</template>
<script setup>
import Header from "@/components/Organisms/Header.vue";
import About from "@/components/Organisms/About.vue";
import Resume from "@/components/Organisms/Resume.vue";
import Portfolio from "@/components/Organisms/Portfolio.vue";
import Contact from "@/components/Organisms/Contact.vue";</script>