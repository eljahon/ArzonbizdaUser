<template>
  <div>
    <Home :products="sendData" />
  </div>
</template>

<script lang="js">
import { mapGetters } from "vuex"

export default {
name:"IndexComponent",

  async asyncData({ $axios, store, query }) {
   await store.dispatch("changeProducts",{axios: $axios, query: query.search})
  },

  computed: {
    ...mapGetters(['productsList'])
  },

  mounted() {
    // this.feat()
  },

  methods: {
   async feat ()  {
     const {data}  = await this.$axios.get("/product/home");
     const sendData = data.data.products.map(el => {
       return {
         id: el.id,
         name: el.brand_name,
         img: el.images[0].src,
         price: el.price
       }
     });
this.$store.commit("SET_PRODUCTS_LIST", sendData)
this.$store.commit("SET_LOADING", false)
   }
  }
}
</script>
