<template>
  <div class="page-Tipo">
      <div class="columns is-multiline">
          <div class="column is-12">
              <h2 class="is-size-2 has-text-centered">{{ tipo.tipo }}</h2>
          </div>

          <DocumentoBox
            v-for="documento in tipo.documentos"
            v-bind:key="documento.id"
            v-bind:documento="documento"
          />
      </div>

  </div>
</template>

<script>
import axios from 'axios'

import DocumentoBox from "@/components/DocumentoBox";

import { toast } from 'bulma-toast'

export default {
  name: "Tipo",
  components: {
    DocumentoBox
  },
  data() {
      return {
          tipo: {
            documentos: []
          }
      }
  },
  mounted() {
    this.getTipo()
  },
  watch: {
    // to.name es siempre to.name al referirse a la dirreccion
      $route(to, from) {
          if (to.name === 'Tipo') {
            this.getTipo()
          }
      }
  },
  methods: {
    async getTipo() {
      const tipoSlug = this.$route.params.tipo_slug

      this.$store.commit('setIsLoading', true)

      await axios
          .get(`/api/v1/documentos/${tipoSlug}/`)
          .then(response => {
              this.tipo = response.data

              document.title = this.tipo.tipo + ' | Libreria Mintic'
          })
          .catch(error => {
            console.log(error)

            toast({
                message: 'Algo esta mal. Por Favor Intente Nuevamente',
                type: 'is-danger',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
            })
          })
      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>

<style scoped>

</style>