<script>
import popularProducts from '~/my-components/popular-products/popularProducts.vue'
import LoaderComponent from '~/library/LoaderComponent.vue'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'SearchComponent',
  components: { popularProducts, LoaderComponent },

  mounted() {
    AOS.init({})
  },
}
</script>

<template>
  <div>
    <popular-products
      :columns="[]"
      data-aos="fade-up"
      title="Найденные данные"
    />
    <LoaderComponent v-if="$store.state.loading" />
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
