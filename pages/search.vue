<script>
import popularProducts from '~/my-components/popular-products/popularProducts.vue'
export default {
  name: 'SearchComponent',
  components: { popularProducts },
}
</script>

<template>
  <div>
    <popular-products title="Найденные данные" />
  </div>
</template>

<style lang="scss" scoped></style>
