<template>
  <div class="home">
    <section class="hero is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
            Bienvenidos a Libreria Mintic
        </p>
        <p class="subtitle">
            La mejor Liberia Online
        </p>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered"> Ultimos Documentos</h2>
      </div>

      <DocumentoBox
        v-for="documento in latestDocuments"
        v-bind:key="documento.id"
        v-bind:documento="documento"
      />

    </div>
  </div>
</template>

<script>
import axios from 'axios'

import DocumentoBox from "@/components/DocumentoBox";

export default {
  name: 'HomeView',
  data() {
    return {
      latestDocuments: []
    }
  },
  components: {
    DocumentoBox
  },
  mounted() {
    this.getLatestDocuments()

    document.title = 'Home | Libreria Mintic'
  },
  methods: {
    async getLatestDocuments() {
      this.$store.commit('setIsLoading', true)

      await axios
          .get('/api/v1/latest-documentos/')
          .then(response =>{
            this.latestDocuments = response.data
          })
          .catch(error => {
            console.log(error)
          })

      this.$store.commit('setIsLoading', false)

    }
  }
}
</script>

