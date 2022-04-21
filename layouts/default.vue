<script>
import Header from '~/components/Header.vue'

export default {
  name: 'ContainerBox',

  components: {
    Header,
  },
}
</script>

<template>
  <div class="containerBox">
    <Header />
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped></style>
