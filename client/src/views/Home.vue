<template>
  <div>
    <v-container fluid class="mb-12 main">
      <v-row justify="center" align="center" class="my-4">
        <v-col cols="10" md="10" lg="10" xl="10" justify="center">
          <p class="display-1">
            Je m'appelle Constantin
            <br />Je donne des cours particuliers de la 6ème jusqu'à la Terminale
            <br />
            <span class="headline">J'effectue les cours à domicile ou en ligne</span>
          </p>
        </v-col>
      </v-row>

      <div align="center" class="display-1">Les matières que j'enseigne</div>
      <v-row class="py-10" justify="center" align="center">
        <v-col v-for="(matiere, i) in matières" :key="i" cols="8" md="5" lg="4" xl="3" class="px-3">
          <v-card color="#ffff" elevation="3" class="pt-5">
            <v-img :src="logo(matiere.img)" contain max-height="80px" />
            <v-card-title color="#545a72" class="justify-center font-weight-bold headline card-title">
              {{ matiere.title }}
            </v-card-title>
            <v-card-text color="#545a72" class="font-weight-medium title texte">
              {{ matiere.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="my-2 pt-4" justify="center" align="center">
        <v-btn
          class="font-weight-bold bouton-header"
          rounded
          x-large
          color="primary"
          @click="$vuetify.goTo('#contact', option)"
        >
          Contactez moi
        </v-btn>
      </div>
    </v-container>

    <v-container fluid class="timeline">
      <div id="parcours" class="main">
        <div class="timeline pt-12">
          <div align="center" class="pb-12 display-2">Mon parcours professionnel</div>

          <v-row justify="center" class="pb-12">
            <v-col cols="10" md="8" lg="10" xl="8">
              <Timeline class />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
    <v-container fluid class="main">
      <div id="experience">
        <div justify="center" align="center" class="display-2 py-12">Mon expérience</div>

        <v-row justify="center" class="pb-12 pt-5">
          <v-col v-for="(exp, i) in exps" :key="i" cols="9" md="12" lg="12" xl="12">
            <PExperience :exp="exp" />
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container fluid class="timeline">
      <div id="avis" class="py-12 main">
        <div justify="center" align="center" class="display-2">Mes avis</div>
        <v-row id="avis" justify="center" class="mb-12 mt-5">
          <PostComponent />
        </v-row>
      </div>
    </v-container>
    <v-container fluid class="main">
      <div id="contact" justify="center" align="center" class="mt-12 display-2">Contact</div>
      <div justify="center" align="center">
        <Contact />
      </div>
    </v-container>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
import PExperience from '@/components/PExperience.vue'
import Contact from '@/components/Contact.vue'
import PostComponent from '@/components/PostComponent'

export default {
  name: 'Home',
  components: {
    Timeline,
    PExperience,
    Contact,
    PostComponent
  },
  data() {
    return {
      showParcours: false,
      showTop: false,
      options: {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      },
      matières: [
        {
          title: 'Mathématiques',
          text: 'Mieux comprendre grâce à des outils de visualisation (Géogébra)',
          img: 'calculus.png'
        },

        {
          title: 'Physique / Chimie',
          text: 'Des applications concrètes de la physique',
          img: 'atom.png'
        },
        {
          title: 'Programmation',
          text: 'Apprendre les bases de la programmation en Python',
          img: 'python.png'
        }
      ],
      exps: [
        {
          title: 'Professeur particulier à domicile et en ligne',
          img: 'photo_moi.jpg',
          date: '2019 - Maintenant',
          text: "Depuis 2019 j'ai enseigné à plus 20 élèves à Montpellier, Avignon et Tahiti. Grâce à tous ces cours effectués j'ai appris à me mettre à la place de l'élève et à comprendre la source du problème. J'adapte ma façon d'enseigner en fonction de l'élève.",
          show: false
        },
        {
          title: "Professeur au sein d'Acadomia et Complétude.",
          img: 'acadomia.png',
          date: '2018 - 2019',
          text: "J'ai été professeur avec Acadomia, j'ai enseigné à 5 élèves de la 3ème à la Terminale.",
          show: true
        },
        {
          title: "Professeur d'anglais et de mathématiques",
          img: 'photo_enfant.jpeg',
          date: "6 semaines à Bali lors d'un stage",
          text: "J'ai eu la chance de faire mon stage d'engagement citoyen à Bali. J'ai enseigné l'enseigné l'anglais et les mathématiques à des élèves de 13 à 14 ans.",
          show: true
        },
        {
          title: "Tuteur dans mon école d'ingénieur EPF",
          img: 'logo_epf_0.png',
          date: '2017 - 2018',
          text: "J'ai été tuteur dans mon école d'ingénieur auprès des 1ères années. J'ai enseigné la physique à un niveau Bac +1  ",
          show: false
        }
      ]
    }
  },
  methods: {
    logo(name) {
      return require('../assets/' + name)
    }

    /*onIntersectExp(entries) {
      console.log(entries);
      this.showParcours = entries[0].isIntersecting;
    }*/
  }
}
</script>

<style>
.timeline {
  background-color: #e6f4f1;
}

.texte {
  text-align: center;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.main {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
</style>
