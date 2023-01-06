<template>
  <section class="container mt-5">
    <SectionTitle primary-text="Mon"> CV</SectionTitle>
    <div class="row justify-content-evenly">
      <div class="col-lg-4">
        <InformationCard class="p-4" title="Expériences">
          <ExperienceCard ending-date="test" experience="test" location="test" starting-date="testr"/>
        </InformationCard>
      </div>
      <div class="col-lg-4">
        <InformationCard class="p-4" title="Formation">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus dolorem earum, obcaecati officiis
          perspiciatis totam. Aliquam aperiam culpa dolore doloribus excepturi fugiat, illo, libero minima modi
          molestiae totam, vel!
        </InformationCard>
      </div>
      <div class="col-lg-4">
        <InformationCard class="p-4" title="Compétences">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam animi dolorem dolores ducimus error
          facilis fugit illo iure laboriosam mollitia numquam quaerat qui quisquam sed, sequi sit temporibus velit!
        </InformationCard>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionTitle from "../Atoms/SectionTitle.vue";
import InformationCard from "../Molecules/InformationCard.vue";
import ExperienceCard from "@/components/Atoms/ExperienceCard.vue";</script>