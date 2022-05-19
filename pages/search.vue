<script>
import popularProducts from '~/my-components/popular-products/popularProducts.vue'
import LoaderComponent from '~/library/LoaderComponent.vue'

export default {
  name: 'SearchComponent',
  components: { popularProducts, LoaderComponent },
}
</script>

<template>
  <div>
    <LoaderComponent />
    <popular-products title="Найденные данные" />
  </div>
</template>

<style lang="scss" scoped></style>
