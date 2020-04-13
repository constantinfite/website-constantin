<template>
  <v-row justify="center" align="center">
    <v-col cols="11" md="5" lg="5" xl="5">
      <v-card flat color="transparent" class="card">
        <v-card-title class="card-title font-weight-bold headline">{{
          exp.title
        }}</v-card-title>
        <v-card-subtitle class="font-weight-bold subtitle-1">{{
          exp.date
        }}</v-card-subtitle>
        <v-card-text class="font-weight-bold title ">{{
          exp.text
        }}</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="11" md="5" lg="5" xl="5" justify="center">
      <v-img
        :src="logo(exp.img)"
        max-width="400px"
        max-height="300px"
        contain
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    exp: {
      type: Object,
      default: function() {
        return {};
      }
    },
    right: Boolean
  },
  data() {
    return {};
  },
  methods: {
    logo(name) {
      return require("../assets/" + name);
    }
  }
};
</script>

<style>
.card {
  background-color: darkblue;
}
</style>
