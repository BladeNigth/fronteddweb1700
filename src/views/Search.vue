<template>
  <div class="page-search">
      <div class="columns is-multiline">
          <div class="column is-12">
            <h1 class="title">Buscar</h1>

            <h2 class="is-size-5 has-text-grey">Buscar Termino: "{{ query }}"</h2>
          </div>

          <DocumentoBox
            v-for="documento in documentos"
            v-bind:key="documento.id"
            v-bind:documento="documento"/>

      </div>
  </div>
</template>

<script>
import axios from 'axios'
import DocumentoBox from "@/components/DocumentoBox";

export default {
  name: "Search",
  components: {
    DocumentoBox
  },
  data() {
    return {
      documentos: [],
      query: ''
    }
  },
  mounted() {
      document.title = 'Buscar || Libreria Mintic'

      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)

      if (params.get('query')) {
        this.query = params.get('query')

        this.performSearch()
      }
  },
  methods: {
    async performSearch() {
        this.$store.commit('setIsLoading', true)

        await axios
            .post('/api/v1/documentos/search/', {'query': this.query})
            .then(response => {
              this.documentos = response.data
            })
            .catch(error => {
              console.log(error)
            })

        this.$store.commit('setIsLoading', false)
    }
  }
}
</script>

<style scoped>

</style>