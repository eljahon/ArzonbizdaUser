<script>
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'

export default {
  name: 'UserComponents',
  components: { CompareProduct },

  mounted() {
    this.fetchItems()
  },

  methods: {
    async fetchItems() {
      //   const query = { prs: this.$store.state.isBadge }
      const { data } = await this.$axios.get('/product/compare', {
          data:{
              "prs":["43853fbb-bc33-4bec-b281-bfcecd3a8b63","dfd5e17d-be85-41ec-95e9-e21f85125956"]
          }
      })
      console.log(data)

    },
  },
}
</script>

<template>
  <div>
    <div class="compare__slider"></div>
    <compare-product />
    <compare-product />
  </div>
</template>

<style lang="scss" scoped></style>
