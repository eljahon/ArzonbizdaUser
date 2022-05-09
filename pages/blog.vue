<script>
import BlogDisc from '~/my-components/blog-disc/blog-disc.vue'
import CompareTabs from '~/my-components/compare-tabs/CompareTabs.vue'
export default {
  name: 'BlogComponent',
  components: { BlogDisc, CompareTabs },
}
</script>
<template>
  <div><blog-disc /> <compare-tabs /></div>
</template>
