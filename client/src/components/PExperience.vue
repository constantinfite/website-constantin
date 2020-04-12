<template>
  <v-row justify="center">
    <v-col>
      <v-card flat color="transparent" class="card">
        <v-card-title class="card-title font-weight-bold headline">{{ exp.title }}</v-card-title>
        <v-card-subtitle class="font-weight-bold subtitle-1">{{ exp.date }}</v-card-subtitle>
        <v-card-text class="font-weight-bold title">{{ exp.text }}</v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <div align="center" class="card">
        <v-img :src="logo(exp.img)" max-width="400px" max-height="300px" contain />
      </div>
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
</style>
