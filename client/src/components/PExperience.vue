<template>
  <v-row align="center">
    <v-col>
      <v-card flat color="transparent" class="card">
        <v-card-title class="font-weight-bold card-title">{{ exp.title }}</v-card-title>
        <v-card-subtitle>{{ exp.date }}</v-card-subtitle>
        <v-card-text  >{{ exp.text }}</v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-img :src="logo(exp.img)" max-width="400px" max-height="300px" contain />
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    exp: {
      type: Object,
      default: function() {
        return {};
      }
    },
    right: Boolean
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
.card-title {
  word-break: normal;
}
</style>
