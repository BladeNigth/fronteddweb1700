<template>
  <div class="page-document">
      <div class="columns is-multiline">
          <div class="column is-9">
              <figure class="image mb-6">
                  <img v-bind:src="documento.get_image">
              </figure>
              <br><br><br>
              <h1 class="title">{{ documento.nombre }}</h1>

              <p> {{ documento.descripcion }}</p>
              <p> {{ documento.genero }}</p>
              <p> {{ documento.año }}</p>
              <p> {{ documento.editorial }}</p>
              <p> {{ documento.idioma }}</p>
              <p> {{ documento.autor }}</p>
              <p> {{ documento.tipo_id }}</p>
          </div>
          <div class="column is-3">
              <h2 class="subtitle">Informacion</h2>
              <p><strong>Precio Compra: </strong>${{ documento.precioV }}</p>
              <p><strong>Precio Alquiler: </strong>${{ documento.precioA }}</p>

              <div class="field has-addons mt-6">
                  <div class="control">
                      <input type="number" class="input" min="1" v-model="quantity">
                  </div>

                  <div class="control">
                      <a class="button is-dark" @click="addToCart"> Agregar Al Carrito</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import { toast } from 'bulma-toast'
export default {
  name: "Documento",
  data() {
      return {
        documento: {},
        quantity: 1
      }
  },
  mounted() {
    this.getDocumento()
  },
  methods: {
    async getDocumento() {
      this.$store.commit('setIsLoading', true)

      const tipo_slug = this.$route.params.tipo_slug
      const document_slug = this.$route.params.document_slug

      await axios
          .get(`/api/v1/documentos/${tipo_slug}/${document_slug}`)
          .then(response =>{
              this.documento = response.data

              document.title = this.documento.nombre + ' | Libreria Mintic'
          })
          .catch(error => {
              console.log(error)
          })

      this.$store.commit('setIsLoading', false)
    },
    addToCart() {
      if (isNaN(this.quantity) || this.quantity < 1) {
        this.quantity = 1
      }

      const item = {
          documento: this.documento,
          quantity: this.quantity
      }

      this.$store.commit('addToCart', item)

      toast({
          message: 'El Producto fue añadido al carrito',
          type: 'is-success',
          dismissible: true,
          pauseOnHover: true,
          duration: 2000,
          position: 'bottom-right',
      })

    }
  }
}
</script>

<style scoped>
.image {
  width: 300px;
  height: 300px;
}
</style>