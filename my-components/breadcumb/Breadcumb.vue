<script>
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbLink,
  CBreadcrumbSeparator,
} from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
export default {
  name: 'BreadcumbItems',
  components: {
    CBreadcrumb,
    CBreadcrumbItem,
    CBreadcrumbLink,
    CBreadcrumbSeparator,
  },
  computed: {
    ...mapGetters(['breadCumbs']),
  },
}
</script>

<template>
  <div class="breadcumb">
    <c-breadcrumb-item>
      <c-breadcrumb-link as="nuxt-link" to="/"> Asosiy </c-breadcrumb-link>
    </c-breadcrumb-item>
    <!-- {{breadCumbs}} -->
    <c-breadcrumb
      v-for="(page, index) in breadCumbs"
      :key="index"
      font-weight="medium"
      font-size="sm"
    >
      <c-breadcrumb-separator
        color="gray"
        font-size="10px"
        font-weight="bold"
      />
      <c-breadcrumb-item>
        <c-breadcrumb-link as="nuxt-link" :to="page.fullPath">
          {{ page.name }}
        </c-breadcrumb-link>

        <c-breadcrumb-separator
          color="gray"
          font-size="10px"
          font-weight="bold"
        />
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