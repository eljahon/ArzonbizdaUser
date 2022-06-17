<script>
import { CBox } from '@chakra-ui/vue'
import NewBlog from '~/my-components/newBlog/NewBlog.vue'
import BlogDisc from "~/my-components/blog-disc/blog-disc";
import Mixins from "@/mixins/aos"
export default {
  name: 'BlogComponent',
  components: {NewBlog, CBox,BlogDisc },
  mixins: [Mixins],
  async asyncData ({$axios, store,params}) {
    const {data} = await $axios.get('/admin/blog/post/'+params.id);
    const blogList = await $axios.get('blog/posts')

    const dataFormat = {
      avatar: process.env.baseUrl+data.post.image,
      ...data.post
    }
    store.dispatch('blogListAdd', blogList.data.posts)
    store.dispatch('singBlogChanges', dataFormat)
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
            <blog-disc data-aos="fade-up" data-aos-duration="1000" />
      <NewBlog data-aos="fade-up" data-aos-duration="1000" />
    </div>
  </c-box>
</template>
<!--<script>-->
<!--import BlogDisc from '~/my-components/blog-disc/blog-disc.vue'-->
<!--import NewBlog from '~/my-components/newBlog/NewBlog.vue'-->
<!--export default {-->
<!--  name: 'BlogComponent',-->
<!--  components: { BlogDisc, NewBlog },-->
<!--}-->
<!--</script>-->
<!--<template>-->
<!--  <div>-->
<!--    <blog-disc />-->
<!--    <NewBlog />-->
<!--  </div>-->
<!--</template>-->
