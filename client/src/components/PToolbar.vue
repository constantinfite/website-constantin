<template>
  <nav>
    <v-app-bar
      color="#fff"
      elevation="1"
      height="80"
      app
      class="app-bar"
    >
      <v-btn
        color="primary"
        text
        large
        class="font-weight-bold bouton-header logo d-none d-md-block"
        @click="$vuetify.goTo('#home', options)"
      >Cours Particuliers Constantin</v-btn>
      <v-spacer />
      <div class="d-none d-md-block">
        <v-btn
          v-for="(bouton, i) in boutons"
          :key="i"
          rounded
          class="black--text bouton-header font-weight-bold"
          text
          @click="$vuetify.goTo(bouton.tag, options)"
        >{{ bouton.text }}</v-btn>

        <v-btn
          rounded
          elevation="1"
          color="primary"
          class="ml-3 font-weight-bold bouton-header"
          @click="$vuetify.goTo('#contact', options)"
        >Contact</v-btn>
      </div>
      <v-app-bar-nav-icon
        class="d-md-none ml-8"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class="indigo"
      right
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
        >
          <v-btn
            class="white--text"
            text
            @click="navigationPop(link.id, $vuetify)"
          >{{ link.text }}</v-btn>
          <!--
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          //-->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
// import * as easings from "vuetify/es5/services/goto/easing-patterns";
//mdi-playlist-edit
export default {
  data () {
    return {
      drawer: false,
      options: {
        duration: 500,
        offset: 0,
        easing: 'easeInOutCubic'
      },
      boutons: [
        {
          text: 'Mon parcours',
          tag: '#parcours'
        },
        {
          text: 'Mon experience',
          tag: '#experience'
        },
        {
          text: 'Mes avis',
          tag: '#avis'
        }
      ],
      links: [
        { icon: 'mdi-school', text: 'Mon parcours', id: '#parcours' },
        { icon: 'mdi-teach', text: 'Mon expérience', id: '#experience' },
        { icon: 'mdi-card-text-outline', text: 'Voir mes avis', id: '#avis' },
        { icon: 'mdi-account-box', text: 'Contactez moi', id: '#contact' }
      ]
    }
  },
  methods: {
    navigationPop (id, vuetify) {
      vuetify.goTo(id, this.options), (this.drawer = !this.drawer)
    }
  }
}
</script>

<style>
.app-bar {
  padding: 0 10% !important;
}
.logo {
  font-size: 30px;
}
</style>
