<script>
import BreadCumb from '../my-components/breadcumb/Breadcumb.vue'
import CategoryMain from '~/my-components/categories-component/CategoryMain.vue'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'UserComponent',

  components: {
    CategoryMain,
    BreadCumb,
  },

  data() {
    return {
      route: this.$route,
    }
  },

  mounted() {
    this.$store.dispatch('addBreadcumbs', this.route)
    AOS.init({})
  },
}
</script>

<template>
  <div>
    <BreadCumb />
    <CategoryMain data-aos="fade-up" data-aos-duration="1000" />
  </div>
</template>
