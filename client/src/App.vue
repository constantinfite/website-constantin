<template>
  <v-app class="grey lighten-5">
    <p-toolbar class />

    <v-content>
      <router-view />
    </v-content>

    <p-footer />
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import PToolbar from "./components/PToolbar";
import PFooter from "./components/PFooter";

export default {
  name: "App",

  components: {
    PToolbar,
    PFooter
  },

  data: () => ({
    //
  })
};
</script>
<style>
.header {
  background-color: cyan;
}
</style>
