<script>
import CategoryMain from '~/my-components/categories-component/CategoryMain.vue'

import aos from '@/helpers/aos'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'UserComponent',

  components: {
    CategoryMain,
  },

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
    <CategoryMain data-aos="fade-up" data-aos-duration="1000" />
  </div>
</template>
