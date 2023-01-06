<template>
  <header>
    <div class="container pt-4">
      <SocialButtonBar :secondary="true"/>
      <HeaderContent class="position-absolute top-50 translate-middle-y"/>
    </div>
  </header>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
      <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              class="navbar-toggler"
              data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse py-2">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#home">Accueil</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">A propos</a></li>
          <li class="nav-item"><a class="nav-link" href="#resume">CV</a></li>
        </ul>
        <ul class="navbar-nav mx-auto brand">
          <img alt="avatar" class="brand-img position-absolute top-50 start-50 translate-middle"
               src="../../assets/img/avatar.jpg">
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
header {
  height: 80vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../assets/img/banner.jpg") no-repeat fixed;
  background-size: cover;
}
</style>
<script setup>
import SocialButtonBar from "../Molecules/SocialButtonBar.vue";
import HeaderContent from "../Molecules/HeaderContent.vue";</script>

<style scoped>
.navbar {
  box-shadow: 0 5px 10px rgb(54 54 54 / 18%);;
}

.nav-link {
  font-weight: bold;
  font-size: 1.2em;
  color: rgba(0, 0, 0, 0.8);
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.active {
  color: var(--bs-primary) !important;
}

.brand-img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 10px solid white;
  box-shadow: 0 5px 1px rgb(128 128 128 / 13%);
  border-radius: 100%;
}
</style>