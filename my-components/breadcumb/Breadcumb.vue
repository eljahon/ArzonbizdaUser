<script>
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbLink,
} from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
export default {
  name: 'BreadcumbItems',
  components: {
    CBreadcrumb,
    CBreadcrumbItem,
    CBreadcrumbLink,
  },
  computed: {
    ...mapGetters(['breadCumbs']),
    bredcrumbsData() {
      if(this.$route.params) {
        return Object.keys(this.$route.params).map(item => {
          return {
            name: item,
            param: this.$route.params[item],
          }
        })
      }
      return null
    }
  },
  mounted(){
    // console.log(bredcrumbsData)
  }
}
</script>

<template>
  <div class="breadcumb">
    <c-breadcrumb
      font-weight="medium"
      font-size="sm"
    >
    <c-breadcrumb-item>
      <c-breadcrumb-link as="nuxt-link" to="/">
        Main
      </c-breadcrumb-link>
    </c-breadcrumb-item>
      <c-breadcrumb-item
      v-for="(page, index) in bredcrumbsData"
      :key="index"
      >
        <c-breadcrumb-link as="nuxt-link" :to="localePath({ name: page.name, params: {[page.name]: page.param} })">
          {{ page.param }}
        </c-breadcrumb-link>
      </c-breadcrumb-item>
    </c-breadcrumb>
  </div>
</template>



<style scoped>
.breadcumb {
  display: flex;
  align-items: center;
}
</style>