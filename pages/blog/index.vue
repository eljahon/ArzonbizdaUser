<script>
import { CBox } from '@chakra-ui/vue'
import NewBlog from '~/my-components/newBlog/NewBlog.vue'
import Mixins from "@/mixins/aos"
export default {
  name: 'BlogComponent',
  components: {NewBlog, CBox },
  mixins: [Mixins],
  async asyncData ({$axios, store}) {
    const blogList = await $axios.get('blog/posts')
    store.dispatch('blogListAdd', blogList.data.posts)
  },

  data() {
    return {
      route: this.$route,
      loading: false,
    }
  },
}
</script>

<template>
  <c-box>
    <div>
      <!--      <blog-disc :blog="blogList" data-aos="fade-up" data-aos-duration="1000" />-->
      <NewBlog data-aos="fade-up" data-aos-duration="1000" />
    </div>
  </c-box>
</template>
