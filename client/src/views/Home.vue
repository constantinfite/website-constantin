<template>
  <div class="home">
    <v-layout fill-height align-center>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="6" md="10" lg="10" xl="9">
            <div class="black--text display-1 pt-10">
              Je m'appelle Constantin             
            </div>
            <div class="black--text display-1 pt-5">
              Je suis professeur particulier de la 6ème jusqu'à la Terminale
            </div>
            <div class="grey--text text--darken-4 headline py-5">J'effectue les cours en ligne</div>
            <v-row class="py-10" justify="center" align="center">
              <v-col
                cols="7"
                md="6"
                lg="4"
                xl="3"
                v-for="(matiere, i) in matières"
                :key="i"
                class="timeline px-2"
              >
                <v-card max-width="300" color="#ffff">
                  <!--
                  <v-img :src="logo(matiere.img)" height="100"></v-img>-->
                  <v-card-title 
                  color="#545a72"
                    class="justify-center font-weight-bold card-title"
                  >{{ matiere.title }}</v-card-title>
                  <v-card-text color="#545a72" class="">{{ matiere.text }}</v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <div class="my-2 pt-10">
                <v-btn
                  rounded
                  x-large
                  color="primary"
                  @click="$vuetify.goTo('#contact', option)"
                >Contactez moi</v-btn>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>

    <v-container class="mt-5">
      <div justify="center" align="center" class="my-12" id="parcours">
        <div class="display-3">Mon parcours</div>
      </div>
      <v-row justify="center">
        <v-col cols="10" md="8" lg="10" xl="8">
          <Timeline class="timeline" />
        </v-col>
      </v-row>

      <div justify="center" align="center" class="my-12" id="experience">
        <div class="display-3">Mon expérience</div>
      </div>
      <v-row justify="center">
        <v-col cols="9" md="12" lg="10" xl="7" v-for="(exp, i) in exps" :key="i" class="timeline">
          <PExperience :exp="exp" :right="exp.right" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="pt-12">
        <v-divider></v-divider>
      </v-row>
      <v-row justify="center" align="center" class="mt-12" id="avis">
        <div class="display-3">Mes avis</div>
      </v-row>

      <v-row justify="center" class="mb-12 mt-5" id="avis">
        <PostComponent />
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
          text: "J'ai été professeur avec Acadomia"
        },
        {
          title: "Professeur au sein d'Acadomia et Complétude",
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

.texte {
  text-align: center;
}
.card-title {
  word-break: normal;
}
</style>
