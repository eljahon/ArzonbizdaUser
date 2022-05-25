<script>
import BlogDisc from '~/my-components/blog-disc/blog-disc.vue'
import NewBlog from '~/my-components/newBlog/NewBlog.vue'

import aos from '@/helpers/aos'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'BlogComponent',

  components: { BlogDisc, NewBlog },

  mixins: [
    {
      methods: {
        aos,
      },
    },
  ],

  data(){
    return {
      route:this.$route
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
    <blog-disc data-aos="fade-up" data-aos-duration="1000" />
    <NewBlog data-aos="fade-up" data-aos-duration="1000" />
  </div>
</template>
