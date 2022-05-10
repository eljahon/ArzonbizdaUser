<script>
import BlogDisc from '~/my-components/blog-disc/blog-disc.vue'
import CompareChakraTab from '~/my-components/compare-tabs/CompareChakraTab.vue'
import NewBlog from '~/my-components/newBlog/NewBlog.vue'
export default {
  name: 'BlogComponent',
  components: { BlogDisc, NewBlog, CompareChakraTab },
}
</script>
<template>
  <div>
    <blog-disc />
    <NewBlog />
    <compare-chakra-tab />
  </div>
</template>
