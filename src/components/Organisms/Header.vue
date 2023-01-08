<template>
  <header>
    <div class="container pt-4">
      <SocialButtonBar :secondary="true"/>
      <HeaderContent class="position-absolute top-50 translate-middle-y"/>
    </div>
  </header>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
      <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              class="navbar-toggler"
              data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse py-2 text-center">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#home">Accueil</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">A propos</a></li>
          <li class="nav-item"><a class="nav-link" href="#resume">CV</a></li>
        </ul>
        <ul class="d-none d-lg-block navbar-nav mx-auto">
          <img id="brand-img" alt="avatar" class="position-absolute start-50 translate-middle"
               src="../../assets/img/avatar.jpg">
          <li id="brand-text" class="position-absolute start-50 translate-middle text-center">
            <h5>Lempereur Corentin</h5>
            <p class="mb-1 text-muted">Développeur informatique</p>
          </li>
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
import HeaderContent from "../Molecules/HeaderContent.vue";

window.addEventListener("scroll", () => {
  if (document.getElementById("navbar").offsetTop > window.scrollY) {
    document.getElementById('brand-img').style.opacity = '1'
    document.getElementById('brand-img').style.top = '50%'
    document.getElementById('brand-text').style.opacity = '0'
    document.getElementById('brand-text').style.top = '100%'

  } else {
    document.getElementById('brand-img').style.opacity = '0'
    document.getElementById('brand-img').style.top = '-5%'
    document.getElementById('brand-text').style.opacity = '1'
    document.getElementById('brand-text').style.top = '50%'

  }
})
</script>

<style scoped>
.navbar {
  box-shadow: 0 5px 10px rgb(54 54 54 / 18%);;
}

.active {
  color: var(--bs-primary) !important;
}

.nav-link {
  font-weight: bold;
  font-size: 1.2em;
  color: rgba(0, 0, 0, 0.8);
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

#brand-text {
  top: 50%;
  opacity: 0;
  transition: 500ms ease;
}

#brand-img {
  top: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 10px solid white;
  box-shadow: 0 5px 1px rgb(128 128 128 / 13%);
  border-radius: 100%;
  opacity: 1;
  transition: 500ms ease;
}
</style>