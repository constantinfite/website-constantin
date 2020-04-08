<template>
  <nav>
    <v-app-bar app flat color="grey lighten-4">
      <v-app-bar-nav-icon
        class="hidden-sm-and-up ml-8"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text ml-8">
        <span class="font-weight-light">Constantin </span>
        <span class>F.</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only mr-12">
        <v-btn @click="$vuetify.goTo('#parcours', options)" text
          >Mon parcours</v-btn
        >
        <v-btn @click="$vuetify.goTo('#experience', options)" text
          >Mon experience</v-btn
        >
        <v-btn
          dark
          rounded
          color="grey darken-4"
          @click="$vuetify.goTo('#avis', options)"
          text
          >avis</v-btn
        >

        <v-btn
          dark
          rounded
          color="primary"
          @click="$vuetify.goTo('#contact', options)"
          text
          >Contact</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text">
          <v-btn
            @click="$vuetify.goTo(link.id, options)"
            class="white--text "
            text
          >
            {{ link.text }}
          </v-btn>
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
  data() {
    return {
      drawer: false,
      options: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      },
      links: [
        { icon: "mdi-school", text: "Mon parcours", id: "#parcours" },
        { icon: "mdi-teach", text: "Mon expérience", id: "#experience" },
        { icon: "mdi-card-text-outline", text: "Voir mes avis", id: "#avis" },
        { icon: "mdi-account-box", text: "Contactez moi", id: "#contact" }
      ]
    };
  }
};
</script>

<style>
.v-toolbar__content {
  padding: 0px !important;
}
</style>
