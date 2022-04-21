<template>
  <div class="container">
    <GlobalHeader />
    <Nuxt />
    
  </div>
</template>
<script>
import GlobalHeader from '~/components/GlobalHeader.vue'

export default {
  name: 'DefaultLayout',

  components: {
    GlobalHeader,
  },
}
</script>
