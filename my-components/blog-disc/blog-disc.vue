<script>
import blogDiscComponent from './blog-disc-component.vue'

export default {
  components: { blogDiscComponent },

  props: {
    blog: {
      type: Object || Array,
      default: null,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <blog-disc-component :blog="blog" />
  </div>
</template>

<style></style>
