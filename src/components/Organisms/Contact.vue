<template>
  <section class="container-fluid mt-5 p-0 position-relative">
    <iframe
        allowfullscreen=""
        class="d-lg-block d-sm-none"
        height="700" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1272.2452268022923!2d3.3770415980866644!3d50.376055121860276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2ea1bc3e7ad1b%3A0xc6526f0ad5f1a0ff!2s71%20Rue%20Pasteur%2C%2059135%20Wallers!5e0!3m2!1sfr!2sfr!4v1673030555432!5m2!1sfr!2sfr"
        style="border:0; filter: grayscale(0.7)"
        width="100%"></iframe>
    <div class="position-absolute top-50 start-50 translate-middle w-50">
      <div class="row">
        <div class="col-lg-7">
          <div class="card p-5">
            <div class="card-title">
              <CardTitle>Contact</CardTitle>
            </div>
            <div class="card-body">
              <form @submit.prevent="sendMail">
                <div class="mb-3">
                  <input v-model="contact_name" class="form-control" placeholder="Nom *" type="text">
                </div>
                <div class="mb-3">
                  <input v-model="contact_email" class="form-control" placeholder="Email *" type="email">
                </div>
                <div class="mb-3">
                  <textarea v-model="contact_message" class="form-control" rows="5" type="text"></textarea>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary rounded-1 w-100">Envoyer</button>
                </div>
              </form>
              <div v-if="loading" class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card p-5 h-100">
            <div class="card-title">
              <CardTitle>Me Contacter</CardTitle>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-lg-2">
                  <FontAwesomeIcon icon="fa-solid fa-mobile" style="font-size: 20px"/>
                </div>
                <div class="col-lg-10">
                  <h6 style="line-height: 0.5">Téléphone:</h6>
                  <p class="text-muted" style="font-size: 14px">06 08 61 88 46</p>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-lg-2">
                  <FontAwesomeIcon icon="fa-solid fa-map" style="font-size: 20px"/>
                </div>
                <div class="col-10">
                  <h6 style="line-height: 0.5">Adresse:</h6>
                  <p class="text-muted" style="font-size: 14px">69 bis Rue Louis Pasteur 59135 Wallers</p>
                </div>
              </div>
              <div class="row mb-1">
                <div class="col-lg-2">
                  <FontAwesomeIcon icon="fa-solid fa-at" style="font-size: 20px"/>
                </div>
                <div class="col-lg-10">
                  <h6 style="line-height: 0.5">Email:</h6>
                  <p class="text-muted" style="font-size: 14px">corentin.lempereur16@gmail.com</p>
                </div>
              </div>

              <SocialButtonBar class="mt-5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import CardTitle from "@/components/Atoms/CardTitle.vue";
import SocialButtonBar from "@/components/Molecules/SocialButtonBar.vue";
import {send} from "@emailjs/browser";

export default {
  components: {SocialButtonBar, FontAwesomeIcon, CardTitle},
  data() {
    return {
      contact_name: "",
      contact_email: "",
      contact_message: "",
      loading: false
    }
  },
  methods: {
    async sendMail() {
      this.loading = true

      await send('service_9yvzhl2', "template_xbjbrs8", {
        from_name: this.contact_name,
        from_email: this.contact_email,
        message: this.contact_message
      }, 'UypyoFdCVhjwEqXhg')

      this.contact_name = ""
      this.contact_email = ""
      this.contact_message = ""

      this.loading = false
    }
  }
}
</script>