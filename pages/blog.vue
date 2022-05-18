<script>
import BlogDisc from '~/my-components/blog-disc/blog-disc.vue'
import NewBlog from '~/my-components/newBlog/NewBlog.vue'
export default {
  name: 'BlogComponent',
  components: { BlogDisc, NewBlog },
}
</script>
<template>
  <div>
    <blog-disc />
    <NewBlog />
  </div>
</template>
