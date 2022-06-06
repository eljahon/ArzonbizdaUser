<template>
  <div>
    <Home />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexComponent',

  async asyncData({ $axios, store, query }) {
    await store.dispatch('changeProducts', {
      axios: $axios,
      query: query.search,
    })
  },

  computed: {
    ...mapGetters(['productsList']),
  },

  data() {
    return {
      loading: false,
    }
  },

  methods: {
    showToast(title, text) {
      this.$toast({
        title: title ?? 'An error occurred.',
        description: text ?? 'Unable to load sharingan. Please shadow clones.',
        status: 'error',
        duration: 10000,
        position: 'top',
      })
    },

    // async asyncData() {
    //   this.loading = true

    //   try {
    //     const { data } = await this.$axios.get('/product/home')
    //     const sendata = data.data.products.map((el) => {
    //       return {
    //         id: el.id,
    //         name: el.brand_name,
    //         img: el.images[0].src,
    //         price: el.price,
    //       }
    //     })

    //     this.$store.commit('SET_PRODUCTS_LIST', sendata)
    //     this.$store.commit('SET_LOADING', false)
    //   } catch (err) {
    //     console.log(err)
    //   } finally {
    //     this.loading = false
    //   }
    // },
  },
}
</script>
