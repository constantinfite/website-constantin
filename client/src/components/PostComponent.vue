<template>
  <div>
    <v-col cols="12" md="12" lg="12">
      <v-col v-for="(post, index) in posts" :key="post._id" :item="post" :index="index">
        <v-card width="300px" outlined class="my-2">
          <v-card-title class="black--text font-weight-medium">{{ post.prenom }}</v-card-title>

          <v-card-subtitle class="grey--text text--lighten-1">
            {{
              `${post.createdAt.getDate()}/${('0' + (post.createdAt.getMonth() + 1)).slice(
                -2
              )}/${post.createdAt.getFullYear()}`
            }}
          </v-card-subtitle>

          <v-card-text class="black--text">{{ post.texte }}</v-card-text>
          <!--
          <v-btn small color="error" @click="deletePost(post._id)"
            >supprimer</v-btn
          >
          --->
        </v-card>
      </v-col>
    </v-col>
    <v-row justify="center">
      <v-btn class="white--text bouton-header" x-large color="primary" rounded @click="dialog = true"
        >Ecrire un avis</v-btn
      >
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Ecrire un avis</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-form ref="SignUpForm" v-model="formValidity">
                  <v-text-field v-model="info.nom" :rules="nomRules" label="Nom*" class="mb-3" />
                  <v-text-field v-model="info.prenom" label="Prénom*" :rules="prenomRules" class="mb-3" />
                  <v-text-field v-model="info.email" :rules="emailRules" type="email" label="Email*" class="mb-7" />

                  <v-textarea
                    v-model="info.text"
                    outlined
                    name="input-7-1"
                    label="Votre avis*"
                    placeholder="..."
                    hint
                    :rules="avisRules"
                    class="mb-5"
                  />

                  <v-btn class="mr-5" color="error" @click="closeForm">Fermer</v-btn>
                  <v-btn color="success" :disabled="!formValidity" @click="createPost">Envoyer</v-btn>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
          <p class="subtitle font-weight-bold">Seulement votre prénom et votre avis seront affichés sur le site</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PostService from '../PostService'
export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      formValidity: false,
      dialog: false,
      nomRules: [value => !!value || 'Nom est nécessaire'],
      prenomRules: [value => !!value || 'Prenom est nécessaire'],
      avisRules: [value => !!value || 'Avis est nécessaire'],
      emailRules: [
        value => !!value || 'Email est nécessaire',
        value => value.indexOf('@') !== 0 || 'Email doit avoir un username',
        value => value.includes('@') || 'Email doit avoir un @',
        value => value.lastIndexOf('.') - value.indexOf('@') > 1 || 'Email doit avoir un valide domaine',
        value => value.lastIndexOf('.') <= value.length - 3 || 'Email doit avoir un valide domaine extension'
      ],
      info: { texte: '', prenom: '', email: '', nom: '' }
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts()
    } catch (err) {
      this.error = err.message
    }
  },
  methods: {
    async createPost() {
      this.formValidity = false
      this.$refs.SignUpForm.validate()
      await PostService.insertPost(this.info)
      this.posts = await PostService.getPosts()
      this.dialog = false
      this.$refs.SignUpForm.reset()
    },
    async deletePost(id) {
      await PostService.deletePost(id)
      this.posts = await PostService.getPosts()
    },
    closeForm() {
      this.dialog = false
      this.$refs.SignUpForm.resetValidation()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
