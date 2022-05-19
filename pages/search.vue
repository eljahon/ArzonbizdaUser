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
    <LoaderComponent v-if="$store.state.loading" />
    <popular-products
      v-if="$store.state.has_content === 'content'"
      data-aos="fade-up"
      title="Найденные данные"
    />
    <div
      v-if="$store.state.has_content === 'no_content' && !$store.state.loading"
      data-aos="fade-up"
    >
      Информация не найдена
    </div>
    <div
      v-if="$store.state.has_content === 'pending' && !$store.state.loading"
      data-aos="fade-up"
    >
      Искать что-то
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
