<template>
  <div class="home">
    <v-img src="../assets/background.png" dark max-height="1000px">
      <v-row fill-height>
        <v-container>
          <v-row class="grey--text">
            <v-col cols="12" md="12" lg="12">
              <div class="black--text display-1 pt-10">
                Je m'appelle
                <v-sheet width="200px" class="cyan accent-3 font-weight-bold display-1">Constantin</v-sheet>
              </div>
              <div class="black--text headline pt-5">
                Je suis
                <span class="black--text headline font-weight-bold">professeur particulier</span>
                de la 6ème jusqu'à la Terminale
              </div>
              <div class="black--text headline py-5">J'effectue les cours en ligne</div>
              <v-row class="py-10" justify="center" align="center">
                <v-col
                  cols="5"
                  md="3"
                  lg="3"
                  v-for="(matiere, i) in matières"
                  :key="i"
                  class="timeline px-5"
                >
                  <v-card>
                    <v-img :src="logo(matiere.img)" dark max-height="500px"></v-img>
                    <v-card-title class="justify-center font-weight-bold">{{ matiere.title }}</v-card-title>
                    <v-card-text class="texte">{{ matiere.text }}</v-card-text>
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
      </v-row>
    </v-img>
    <v-container class="mt-5">
      <v-row justify="center" align="center">
        <v-divider></v-divider>
      </v-row>
      <div justify="center" align="center" class="my-12" id="parcours">
        <div class="display-3">Mon parcours</div>
      </div>
      <v-row justify="center">
        <v-col cols="10" md="8" lg="10">
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
</style>
