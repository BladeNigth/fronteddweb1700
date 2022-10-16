<template>
  <div class="home">
    <section class="hero is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
            Bienvenidos a Liberia Mintic
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

      <div
          class="column is-3"
          v-for="documento in latestDocuments"
          v-bind:key="documento.id"
      >
          <div class="box">
              <figure class="image mb-4">
                <img v-bind:src="documento.get_thumbnail">
              </figure>

              <h3 class="is-size-4">{{ documento.nombre }}</h3>
              <p class="is-size-6 has-text-grey">Alquiler ${{ documento.precioA }}</p>
              <p class="is-size-6 has-text-grey">Compra ${{ documento.precioV }}</p>

              <router-link v-bind:to="documento.get_absolute_url" class="button is-dark mt-4">Ver Detalles</router-link>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeView',
  data() {
    return {
      latestDocuments: []
    }
  },
  components: {
  },
  mounted() {
    this.getLatestDocuments()
  },
  methods: {
    getLatestDocuments() {
      axios
          .get('/api/v1/latest-documentos/')
          .then(response =>{
            this.latestDocuments = response.data
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
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;

  }
</style>
