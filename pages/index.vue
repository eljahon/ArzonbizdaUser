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
}
</script>
