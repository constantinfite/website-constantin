<template>
  <v-row>
    <v-row v-if="right" align="center">
      <v-col>
        <v-card flat color="transparent" class="card">
          <v-card-title class="card-title">{{ exp.title }}</v-card-title>
          <v-card-subtitle>{{ exp.date }}</v-card-subtitle>
          <v-card-text mb-3>{{ exp.text }}</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-img :src="logo(exp.img)" max-width="400px" />
      </v-col>
    </v-row>
    <v-row v-if="!right" align="center">
      <v-col>
        <v-img :src="logo(exp.img)" max-width="400px" />
      </v-col>
      <v-col>
        <v-card flat color="transparent" class="card">
          <v-card-title class="card-title">{{ exp.title }}</v-card-title>
          <v-card-subtitle>{{ exp.date }}</v-card-subtitle>
          <v-card-text >{{ exp.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
