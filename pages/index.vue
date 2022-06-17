<template>
  <div>
    <Home />
  </div>
</template>

<script>
export default {
  name: 'IndexComponent',

  async asyncData({ $axios, store, query }) {
   try {
     await store.dispatch('changeProducts', {
       axios: $axios,
       query: query.search,
     });
     const blogList = await $axios.get('blog/posts')
     store.dispatch('blogListAdd', blogList.data.posts)
   } catch(err) {
   }
  },
}
</script>
