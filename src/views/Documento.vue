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
                      <a class="button is-dark"> Agregar Al Carrito</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"

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
    getDocumento() {
      const tipo_slug = this.$route.params.tipo_slug
      const document_slug = this.$route.params.document_slug

      axios
          .get(`/api/v1/documentos/${tipo_slug}/${document_slug}`)
          .then(response =>{
              this.documento = response.data
          })
          .catch(error => {
              console.log(error)
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