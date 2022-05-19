<script>
import popularProducts from '~/my-components/popular-products/popularProducts.vue'
import LoaderComponent from '~/library/LoaderComponent.vue'
import aos from '@/helpers/aos'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'SearchComponent',
  components: { popularProducts, LoaderComponent },

  mixins: [
    {
      methods: {
        aos,
      },
    },
  ],

  mounted() {
    AOS.init({})
  },
}
</script>

<template>
  <div>
    <LoaderComponent />
    <popular-products data-aos="fade-up" title="Найденные данные" />
  </div>
</template>

<style lang="scss" scoped></style>
