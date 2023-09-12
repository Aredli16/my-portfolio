<template>
  <section class="container-fluid mt-5 p-0 position-relative">
    <iframe
        allowfullscreen=""
        class="d-lg-block d-sm-none"
        height="700" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d636.1350028557888!2d3.3765384378663064!3d50.37513115860842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2ea1bdca5e1d1%3A0xebfd91f9d1c9b42f!2s69%20Rue%20Pasteur%2C%2059135%20Wallers!5e0!3m2!1sfr!2sfr!4v1673196488660!5m2!1sfr!2sfr"
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
              <div v-if="error" class="alert alert-danger" role="alert">
                {{ error }}
              </div>
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
                <div class="d-flex justify-content-center mb-3">
                  <vue-recaptcha ref="recaptcha" sitekey="6LdsQ98jAAAAAIS3ozZUak12eXwK0Rvv3v0ag2Yi"
                                 @verify="checkRobot"/>
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
import {VueRecaptcha} from 'vue-recaptcha';
import {createToaster} from "@meforma/vue-toaster";
import {send} from "@emailjs/browser";

export default {
  components: {SocialButtonBar, FontAwesomeIcon, CardTitle, VueRecaptcha},
  data() {
    return {
      contact_name: "",
      contact_email: "",
      contact_message: "",
      loading: false,
      error: "",
      recaptcha: ""
    }
  },
  methods: {
    checkRobot(response) {
      this.recaptcha = response
    },

    async sendMail() {
      /*
      FORM VALIDATION
       */
      if (!this.contact_name) {
        this.error = "Veuillez renseigner votre nom"
        return
      }

      if (!this.contact_email) {
        this.error = "Veuillez renseigner votre email"
        return
      }

      if (!this.contact_message) {
        this.error = "Veuillez renseigner un message"
        return
      }

      if (!this.recaptcha) {
        this.error = "Veuillez compléter le recaptcha"
        return
      }
      this.error = ""

      this.loading = true
      try {
        await send('service_9yvzhl2', "template_xbjbrs8", {
          from_name: this.contact_name,
          from_email: this.contact_email,
          message: this.contact_message,
          'g-recaptcha-response': this.recaptcha
        }, 'UypyoFdCVhjwEqXhg')
      } catch (e) {
        this.error = e.text
      }

      if (!this.error) {
        const successToast = createToaster({type: 'success', position: 'top-right'})
        successToast.show("L'email a bien était envoyé")

        this.contact_name = ""
        this.contact_email = ""
        this.contact_message = ""
        this.$refs.recaptcha.reset()
      }

      this.loading = false
    }
  }
}
</script>
