<template>
  <section class="container-fluid">
    <div class="row border-bottom">
      <div class="col-lg-4 border-end">
        <InformationCard class="border-0" title="Qui suis-je ?">
          <h5>Un jeune développeur passionné depuis son plus jeune âge</h5>
          <p class="text-muted mb-5">Depuis le lycée, l'âge où j'ai découvert le monde de l'informatique, je n'ai cessé
            d'apprendre l'informatique par curiosité et par passion. Cette passion m'a mené à découvrir le développement
            informatique. Depuis ce jour, j'ai compris que c'était cette branche de l'informatique qui me plaisait le
            plus. Pouvoir créer et utiliser l'ordinateur pour répondre à un besoin quelconque, c'est ce qui me plait le
            plus. </p>
          <Button :outlined="true" icon="fa-solid fa-print" title="Imprimer mon CV"/>
        </InformationCard>
      </div>
      <div class="col-lg-4">
        <InformationCard class="border-0" title="Informations personnels">
          <ul class="list-unstyled mb-5">
            <li><span class="fw-600">Date de naissance: </span><span class="text-muted">16/03/2002</span></li>
            <li><span class="fw-600">Email: </span><span class="text-muted">corentin.lempereur16@gmail.com</span></li>
            <li><span class="fw-600">Téléphone: </span><span class="text-muted">06 08 61 88 46</span></li>
            <li><span class="fw-600">Adresse Postale: </span><span class="text-muted">69 bis Rue Louis Pasteur 59135 Wallers</span>
            </li>
          </ul>
          <SocialButtonBar/>
        </InformationCard>
      </div>
      <div class="col-lg-4 border-start">
        <InformationCard class="border-0" title="Mon expertise">
          <ExpertiseCard
              description="En passant par le HTML & CSS, Javascript puis du rendu côté serveur avec PHP et Javascript, j'ai acquis de solide connaissance en Web"
              icon="fa-solid fa-globe"
              name="Développement Web"/>
          <ExpertiseCard
              description="Ayant appris différentes technos, j'ai pu réaliser mes premiers projets concrets en développement mobile"
              icon="fa-solid fa-mobile"
              name="Développement Mobile"/>
          <ExpertiseCard
              description="Le premier domaine dans le quelle je me suis lancé. Je suis aujourd'hui capable de produire un logiciel mais aussi j'ai aussi des connaissance en programmation système"
              icon="fa-solid fa-computer"
              name="Développement logiciel"/>
        </InformationCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import InformationCard from "../Molecules/InformationCard.vue";
import Button from "../Atoms/Button.vue";
import SocialButtonBar from "../Molecules/SocialButtonBar.vue";
import ExpertiseCard from "../Atoms/ExpertiseCard.vue";</script>

<style scoped>
.text-muted {
  font-size: 14px;
}

ul {
  line-height: 3;
}

ul li {
  font-size: 14px;
}

.fw-600 {
  font-weight: 600;
}
</style>