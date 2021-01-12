<template>
  <div>
    <v-timeline class="d-none d-md-block">
      <v-timeline-item
        v-for="(career, i) in careers"
        :key="i"
        :color="career.color"
        small
      >
        <span
          slot="opposite"
          class="align-self-center"
        >
          <div class="title">{{ career.date }}</div>
        </span>

        <v-card>
          <v-card-title class="card-title font-weight-bold headline">
            {{ career.title }}
          </v-card-title>
          <v-card-subtitle class="font-weight-bold subtitle-1">
            {{ career.lieu }}
          </v-card-subtitle>
          <v-card-text class="font-weight-bold title">
            {{ career.text }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-timeline
      dense
      class="d-md-none"
    >
      <v-timeline-item
        v-for="(career, i) in careers"
        :key="i"
        :color="career.color"
        small
      >
        <v-card>
          <v-card-title class="card-title font-weight-bold headline">
            {{ career.title }}
          </v-card-title>
          <v-card-subtitle class="title">{{ career.date }}</v-card-subtitle>
          <v-card-subtitle class="title">{{ career.lieu }}</v-card-subtitle>
          <v-card-text class="font-weight-bold title">
            {{ career.text }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data () {
    return {
      careers: [
        {
          lieu: "EPF Montpellier",
          title: " Ecole d'ingénieur ",
          date: "2016 - 2021",
          text:
            "Depuis 4 ans je suis étudiant en école d'ingénieur. J'ai eu une formation très généraliste pendant 3 ans et cette année je me suis spécialisé dans une filière plus informatique orientée data.",
          color: "blue lighten-1"
        },
        {
          lieu: "Lycée Cézanne Aix-en-Provence",
          title: "CPGE MPSI",
          date: "2015 - 2016",
          text:
            "Cette année en classe préparatoire m'a appris d'avoir une meileur vision globale des mathématiques. Je réutilise des techniques vues en classe préparatoire pour débloquer des élève.",
          color: "blue lighten-1"
        },
        {
          lieu: "Lycée Aubanel Avignon",
          text: "Mention bien : 19 mathématiques, 16 physiques chimies",
          title: "Baccalauréat ",
          date: " 2014 - 2015",
          color: "blue lighten-1"
        }
      ]
    };
  }
};
</script>

<style></style>
