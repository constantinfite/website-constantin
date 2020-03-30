<template>
  <v-timeline>
    <v-timeline-item
      v-for="(career, i) in careers"
      :key="i"
      :color="career.color"
      small="true"
    >
      <span slot="opposite" class="align-self-center">
        <div>{{ career.date }}</div>
      </span>

      <v-card flat>
        <v-card-title class="card-title">{{ career.title }}</v-card-title>
        <v-card-subtitle>{{ career.lieu }}</v-card-subtitle>
        <v-card-text>{{ career.text }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      careers: [
        {
          lieu: "EPF Montpellier",
          title: " Ecole d'ingénieur ",
          date: "2016 - 2021",
          text:
            "J’ai enseigné les mathématiques et l'anglais à des élèves à Bali",
          color: "red lighten-1"
        },
        {
          lieu: "Lycée Cézanne Aix-en-Provence",
          title: "CPGE MPSI",
          date: "2015 - 2016",
          text:
            "Cette année en classe préparatoire m'a permis d'apprendre une bonne rigueur de travail et u",
          color: "amber"
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

<style >
.card-title {
  word-break: normal;
}
</style>
