<template>
  <div class="column is-3">
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
</template>

<script>
export default {
  name: "DocumentoBox",
  props: {
    documento: Object
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
