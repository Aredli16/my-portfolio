<template>
  <section class="container mt-5">
    <SectionTitle primary-text="Mon"> CV</SectionTitle>
    <div class="row justify-content-evenly">
      <div class="col-lg-4">
        <InformationCard class="p-4" title="Expériences">
          <ExperienceCard date="Avril 2023 - Aout 2023" experience="Trading développeur"
                          location="Equens Worldline">
            Mener un projet de développement de bout en bout impactant des webs d'administration, de monitoring et
            d'analyse de données. Etre à l'écoute d'interlocuteurs projets et d'experts. Gérer les différentes phases
            d'un projet autour d'un
            sujet complexe et dans un contexte multiclient et international
          </ExperienceCard>
          <hr>
          <ExperienceCard date="2021 - Aujourd'hui" experience="Préparateur et Livreur Drive" location="Auchan Retail">
            Préparation des commandes puis livraison finale jusqu’aux clients dans le respect de la charte de l’enseigne
          </ExperienceCard>
          <hr>
          <ExperienceCard date="Mai 2021 - Aout 2021 / Juin 2020 - Aout 2020"
                          experience="Opérateur de ligne en conditionnement"
                          location="Société des eaux minérales de Saint-Amand">
            Gestion d’une ligne de production (réapprovisionnement en matières premières, assurer le bon maintien de la
            ligne de production)
          </ExperienceCard>
          <hr>
          <ExperienceCard date="2017" experience="Stage dans un service informatique"
                          location="Lyreco">
            Stage de découverte en classe de 3ème. Ce stage m'a permis de découvrir le monde de l'entreprise ainsi que
            différents types de métier dans l'informatique: administrateur système, réseau et développeur
          </ExperienceCard>
        </InformationCard>
      </div>
      <div class="col-lg-4">
        <InformationCard class="p-4" title="Formation">
          <ExperienceCard date="En Cours" experience="Licence Informatique"
                          location="Université Polytechnique des Hauts-de-France">
          </ExperienceCard>
          <hr>
          <ExperienceCard date="2020" experience="Baccalauréat"
                          location="Lycée Kastler Denain">
            Baccalauréat scientifique spécialité science de l’ingénieur avec option ISN (Informatique et Sciences du
            numérique). Obtenu avec mention Bien
          </ExperienceCard>
          <hr>
          <ExperienceCard date="2017" experience="Brevet des collèges"
                          location="Collège Jean Moulin Wallers">
            Obtenu avec mention Bien
          </ExperienceCard>
        </InformationCard>
      </div>
      <div class="col-lg-4">
        <InformationCard class="p-4" title="Compétences">
          <SkillBar :percentage="95" skill="PHP"/>
          <SkillBar :percentage="95" skill="Java"/>
          <SkillBar :percentage="92" skill="Javascript"/>
          <SkillBar :percentage="90" skill="Dart"/>
          <SkillBar :percentage="90" skill="SQL"/>
          <SkillBar :percentage="85" skill="HTML & CSS"/>
          <SkillBar :percentage="60" skill="C & C++"/>
        </InformationCard>
        <InformationCard class="p-4 mt-3" title="Langues">
          <SkillBar :percentage="100" skill="Francais"/>
          <SkillBar :percentage="75" skill="Anglais"/>
          <SkillBar :percentage="50" skill="Espagnol"/>
        </InformationCard>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionTitle from "../Atoms/SectionTitle.vue";
import InformationCard from "../Molecules/InformationCard.vue";
import ExperienceCard from "../Atoms/ExperienceCard.vue";
import SkillBar from "../Atoms/SkillBar.vue";</script>
