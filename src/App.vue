<template>
  <div data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true"
       data-bs-spy="scroll"
       data-bs-target="navbar" tabindex="0">
    <span id="home"></span>
    <Header/>
    <main>
      <About id="about"/>
      <Resume id="resume"/>
      <Portfolio id="portfolio"/>
    </main>
    <span id="contact"></span>
    <footer>
      <Contact/>
    </footer>
  </div>
</template>
<script setup>
import Header from "@/components/Organisms/Header.vue";
import About from "@/components/Organisms/About.vue";
import Resume from "@/components/Organisms/Resume.vue";
import Portfolio from "@/components/Organisms/Portfolio.vue";
import Contact from "@/components/Organisms/Contact.vue";</script>