<template>
  <div>
    <Home />
<!--    <button @click='() => $store.dispatch("coutn", 3)'>ok</button>-->
  </div>
</template>
<script lang="js">
export default {
  // async asyncData({ $axios }) {
  //   const data  = await $axios.get("/product/home");
  //   console.log(data.data)
  //   return {data:data.data.data.products};
  // },
name:"IndexComponent",

components: {
},
  computed: {
  },
  mounted() {
  // this.feat()
  },
  methods: {
   // async feat ()  {
   //   const data  = await this.$axios.get("/product/home");
   //   console.log(data.data.data.products)
   // }
  }

}
</script>
