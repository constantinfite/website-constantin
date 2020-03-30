<template>
  <div class="home">
    <v-container class="mt-5">
      <v-row justify="center" align="center" class="my-10">
        <v-col cols="12" sm="4">
          <v-img
            max-height="300px"
            max-width="300px"
            src="../assets/photo_moi.jpg"
            class="profilephoto"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="4">blabla</v-col>
      </v-row>
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
        <v-col
          cols="9"
          md="12"
          lg="11"
          v-for="(exp, i) in exps"
          :key="i"
          class="timeline"
        >
          <PExperience :exp="exp" :right="exp.right" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="pt-12">
        <v-divider></v-divider>
      </v-row>
      <v-row justify="center" align="center" class="my-12" id="avis">
        <div class="display-3 ">Mes avis</div>
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
          title: "Professeur au sein d'Acadomia",
          img: "acadomia.png",
          date: "2018 - 2019",
          text:
            "J'ai été professeur avec Acadomia, j'ai enseigné à  des élèves de la 3ème à la Terminal",
          right: false
        },
        {
          title: "Professeur d'anglais et de mathématiques",
          img: "photo_enfant.jpeg",
          date: "6 semaines à Bali",
          right: true,
          text:
            "J'ai eu la chance de faire mon stage d'engagement citoyen à Bali. J'ai enseigné l'enseigné l'anglais et les mathématiques à des élèves de 13 à 14 ans"
        },
        {
          title: "Tuteur dans mon école d'ingénieur EPF",
          img: "logo_epf_0.png",
          date: "2017 - 2018",
          right: false,
          text:
            "J'ai été tuteur dans mon école d'ingénieur auprès des 1ères années "
        },
        {
          title: "Professeur particulier",
          img: "logo_epf_0.png",
          date: "2017 - 2018",
          right: true,
          text: "J'ai été professeur avec Acadomia"
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
