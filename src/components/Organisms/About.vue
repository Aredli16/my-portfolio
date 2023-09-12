<template>
  <section class="container-fluid">
    <div class="row border-bottom">
      <div class="col-lg-4 border-end">
        <InformationCard class="border-0" title="Qui suis-je ?">
          <h5>Un jeune développeur passionné depuis son plus jeune âge</h5>
          <p class="text-muted mb-5">
            L'informatique a toujours été présent dans mon quotidien. J'ai toujours été quelqu'un de curieux et j'ai
            alors commencé à apprendre ce vaste monde en autodidacte dès le début du lycée. Mon parcours m'a ainsi
            permis de développer une certaine expertise et des compétences techniques. Aujourd'hui, j'effectue
            actuellement mon Master en alternance à l'Université Catholique de Lille dans l'entreprise Worldline pour
            parfaire mes compétences puis décrocher le diplôme qui me permettra ainsi d'exercer le métier de mes rêves.
          </p>
          <Button :outlined="true" icon="fa-solid fa-print" title="Imprimer mon CV"/>
        </InformationCard>
      </div>
      <div class="col-lg-4">
        <InformationCard class="border-0" title="Informations personnels">
          <ul class="list-unstyled mb-5">
            <li><span class="fw-600">Date de naissance: </span><span class="text-muted">16/03/2002</span></li>
            <li><span class="fw-600">Email: </span><span class="text-muted">corentin.lempereur16@gmail.com</span></li>
            <li><span class="fw-600">Téléphone: </span><span class="text-muted">06 08 61 88 46</span></li>
            <li><span class="fw-600">Adresse Postale: </span><span class="text-muted">108 Boulevard Montebello 59000 Lille</span>
            </li>
          </ul>
          <SocialButtonBar/>
        </InformationCard>
      </div>
      <div class="col-lg-4 border-start">
        <InformationCard class="border-0" title="Mon expertise">
          <ExpertiseCard
              description="Mes différents projets personnels et professionnels m'ont permis d'acquérir des compétences dans les choix d'une architecture logicielle"
              icon="fa-solid fa-industry"
              name="Conception logicielle"/>
          <ExpertiseCard
              description="Le développement backend a était une révélation dans mon apprentissage du développement. C'est le domaine dans lequel je pense avoir le plus de compétence et qui me plaît le plus"
              icon="fa-solid fa-terminal"
              name="Développement back"/>
          <ExpertiseCard
              description="Durant l'élaboration de mes différents projets, j'ai pu parfaire mes compétences front et cela me permet aujourd'hui de créer des interfaces innovantes et ergonomiques"
              icon="fa-solid fa-window-maximize"
              name="Développement Front"/>
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
