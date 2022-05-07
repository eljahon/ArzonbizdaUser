<template>
  <div>
    <Home :products='sendData'/>
<!--    <button @click='() => $store.dispatch("coutn", 3)'>ok</button>-->
<!--    <h1>adadsas</h1>-->
  </div>
</template>
<script lang="js">
export default {

name:"IndexComponent",

components: {
},
  async asyncData({ $axios, store }) {
    const data  = await $axios.get("/product/home");
    console.log(data.data.data.products)
    const sendData = data.data.data.products.map(el => {
      return {
        id: el.id,
        name: el.brand_name,
        img: el.images[0].src,
        price: el.price
      }
    });
// store.dispatch('changeProducts', data.data.data.products)
    return {sendData};
  },
  computed: {
  },
  mounted() {
  // this.feat()
  },
  methods: {
   // async feat ()  {
   //   // const data  = await this.$axios.get("/product/home");
   //   // const sendData = data.data.data.products.map(el => {
   //   //   return {
   //   //     id: el.id,
   //   //     name: el.brand_name,
   //   //     img: el.images[0].src,
   //   //     price: el.price
   //   //   }
   //   // });
   // }
  }

}
</script>
