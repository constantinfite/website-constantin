<template>
  <div class="home">
    <v-layout fill-height align-center>
      <v-container class="app-bar mb-12">
        <div class="display-1 pt-10" color="#545a72" id="home">Je m'appelle Constantin</div>
        <div
          class="black--text display-1 pt-5"
        >Je suis professeur particulier de la 6ème jusqu'à la Terminale</div>
        <div
          class="grey--text text--darken-4 headline pt-5 mb-12"
        >J'effectue les cours à domicile ou en ligne</div>
        <div align="center" class="display-1">Les matières que j'enseigne</div>
        <v-row class="py-10" justify="center" align="center">
          <v-col
            cols="12"
            md="6"
            lg="4"
            xl="3"
            v-for="(matiere, i) in matières"
            :key="i"
            class="px-2"
          >
            <v-card max-width="300" color="#ffff">
              <!--
              <v-img :src="logo(matiere.img)" height="100"></v-img>-->
              <v-card-title
                color="#545a72"
                class="justify-center font-weight-bold card-title"
              >{{ matiere.title }}</v-card-title>
              <v-card-text color="#545a72" class>{{ matiere.text }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <div class="my-2 pt-10">
            <v-btn
              class="font-weight-bold bouton-header"
              rounded
              x-large
              color="primary"
              @click="$vuetify.goTo('#contact', option)"
            >Contactez moi</v-btn>
          </div>
        </v-row>
      </v-container>
    </v-layout>

    <v-container fluid>
      <div class="timeline pt-12">
        <div align="center" class="pb-12 display-3" id="parcours">Mon parcours professionnel</div>

        <v-row justify="center" class="pb-12">
          <v-col cols="10" md="8" lg="10" xl="8">
            <Timeline class />
          </v-col>
        </v-row>
      </div>
      <div id="experience" class="app-bar">
        <div
          justify="center"
          align="center"
          class="display-3 py-12"
        >Mon expérience en tant que professeur</div>

        <v-row justify="center" class="pb-12 pt-10">
          <v-col cols="9" md="12" lg="10" xl="7" v-for="(exp, i) in exps" :key="i">
            <PExperience :exp="exp" :right="exp.right" />
          </v-col>
        </v-row>
      </div>

      <div class="py-12 timeline" id="avis">
        <div justify="center" align="center" class="display-3">Mes avis</div>

        <v-row justify="center" class="mb-12 mt-5" id="avis">
          <PostComponent />
        </v-row>
      </div>
      <div>
        <div id="contact" justify="center" align="center" class="mt-12 display-3">Contact</div>

        <div justify="center" align="center">
          <Contact />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Timeline from "@/components/Timeline.vue";
import PExperience from "@/components/PExperience.vue";
import Contact from "@/components/Contact.vue";
import PostComponent from "@/components/PostComponent";

export default {
  name: "Home",
  components: {
    Timeline,
    PExperience,
    Contact,
    PostComponent
  },
  methods: {
    logo(name) {
      return require("../assets/" + name);
    }
  },
  data() {
    return {
      options: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      },
      matières: [
        {
          title: "Mathématiques",
          text: "Une vision différente avec Géogébra",
          img: "maths.png"
        },

        {
          title: "Physiques / Chimies",
          text: "Des applications concretes de la physique",
          img: "physics.png"
        },
        {
          title: "Programmation",
          text: "Apprendre les bases de la programmation en Python",
          img: "programmation.png"
        }
      ],
      exps: [
        {
          title: "Professeur particulier à domicile et en ligne",
          img: "photo_moi.jpg",
          date: "2019 - Maintenant",
          text:
            "Depuis 1 an et demi j'effectue des cours particuliers à domicile "
        },
        {
          title: "Professeur au sein d'Acadomia et Complétude",
          img: "acadomia.png",
          date: "2018 - 2019",
          text:
            "J'ai été professeur avec Acadomia, j'ai enseigné à  des 5 élèves de la 3ème à la Terminal"
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
            "J'ai été tuteur dans mon école d'ingénieur auprès des 1ères années. J'ai enseigné la physique niveau Bac +1  "
        }
      ]
    };
  }
};
</script>

<style>
.timeline {
  background-color: #e6f4f1;
}

.texte {
  text-align: center;
}

.app-bar {
  padding: 0 5%;
}
</style>

