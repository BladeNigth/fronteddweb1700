<template>
    <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Carrito</h1>
            </div>

            <div class="column is-12 box">
                <table class="table is-fullwidth" v-if="cartTotalLength">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <CartItem
                            v-for="item in cart.items"
                            v-bind:key="item.documento.id"
                            v-bind:initialItem="item"
                            v-on:removeFromCart="removeFromCart" />
                    </tbody>
                </table>

                <p v-else> You don't have any products in your cart...</p>
            </div>

            <div class="column is-12 box">
                <h2 class="subtitle">Resultado</h2>

                <strong>${{ cartTotalPrice.toFixed(2) }}</strong>, {{ cartTotalLength }} items

                <hr>

                <router-link to="/cart/checkout" class="button is-dark">Pasar a la Caja</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import CartItem from '@/components/CartItem'

export default {
  name: "Cart",
  components: {
    CartItem
  },
  data() {
    return {
        cart: {
            items: []
        }
    }
  },
  mounted() {
      this.cart = this.$store.state.cart

      document.title = 'Mi Carrito | Libreria Mintic'
  },
  methods: {
      removeFromCart(item) {
          this.cart.items = this.cart.items.filter( i => i.documento.id !== item.documento.id)
      }
  },
  computed: {
      cartTotalLength() {
          return this.cart.items.reduce((acc, curVal) => {
              return acc += curVal.quantity
          }, 0)
      },
      cartTotalPrice() {
          return this.cart.items.reduce((acc, curVal) => {
              return acc += curVal.documento.precioV * curVal.quantity
          }, 0)
      },
  }
}
</script>

<style scoped>

</style>