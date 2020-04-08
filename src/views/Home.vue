<template>
  <div class="home">
    <v-img src="../assets/background.png" dark max-height="600px">
      <v-layout fill-height>
        <v-container>
          <v-row class="grey--text">
            <v-col>
              <div class="black--text font-weight-bold display-3 pt-10">Bienvenue</div>
              <div class="black--text display-2 pt-5">Je suis professeur particulier de</div>
              <v-row class="py-10">
                <v-col>
                  <v-card flat>
                    <v-card-title>Mathématiques</v-card-title>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card flat>
                    <v-card-title>Physiques</v-card-title>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card flat>
                    <v-card-title>Programmation</v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <v-container class="mt-5">
      <v-row justify="center" align="center">
        <v-divider></v-divider>
      </v-row>
      <v-row justify="center" align="center" class="my-12" id="parcours">
        <div class="display-3">Mon parcours</div>
      </v-row>
      <v-row>
        <v-col>
          <Timeline class="timeline" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-divider></v-divider>
      </v-row>
      <v-row justify="center" align="center" class="my-12" id="experience">
        <div class="display-3">Mon expérience</div>
      </v-row>
      <v-row justify="center" class="background">
        <v-col cols="9" md="12" lg="11" v-for="(exp, i) in exps" :key="i" class="timeline">
          <PExperience :exp="exp" :right="exp.right" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="pt-12">
        <v-divider></v-divider>
      </v-row>
      <v-row justify="center" align="center" class="my-12" id="avis">
        <div class="display-3">Mes avis</div>
      </v-row>

      <v-row justify="center" align="center">
        <v-divider></v-divider>
      </v-row>
      <v-row justify="center" align="center" class="mt-12" id="contact">
        <div class="display-3">Contact</div>
      </v-row>

      <v-row justify="center" align="center">
        <Contact />
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Timeline from "@/components/Timeline.vue";
import PExperience from "@/components/PExperience.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Timeline,
    PExperience,
    Contact
  },
  data() {
    return {
      exps: [
        {
          title: "Professeur particulier",
          img: "photo_moi.jpg",
          date: "2019 - Maintenant",
          text: "J'ai été professeur avec Acadomia"
        },
        {
          title: "Professeur au sein d'Acadomia",
          img: "acadomia.png",
          date: "2018 - 2019",
          text:
            "J'ai été professeur avec Acadomia, j'ai enseigné à  des élèves de la 3ème à la Terminal"
        },
        {
          title: "Professeur d'anglais et de mathématiques",
          img: "photo_enfant.jpeg",
          date: "6 semaines à Bali lors d'un stage",
          text:
            "J'ai eu la chance de faire mon stage d'engagement citoyen à Bali. J'ai enseigné l'enseigné l'anglais et les mathématiques à des élèves de 13 à 14 ans"
        },
        {
          title: "Tuteur dans mon école d'ingénieur EPF",
          img: "logo_epf_0.png",
          date: "2017 - 2018",
          text:
            "J'ai été tuteur dans mon école d'ingénieur auprès des 1ères années "
        }
      ]
    };
  }
};
</script>

<style>
.profilephoto {
  border-radius: 30px;
}

.timeline {
}

.background {
}
</style>
