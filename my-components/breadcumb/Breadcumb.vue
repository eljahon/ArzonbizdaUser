<script>
import { CBreadcrumb, CBreadcrumbItem, CBreadcrumbLink } from '@chakra-ui/vue'
import { mapGetters } from 'vuex'

export default {
  name: 'BreadcumbItems',

  components: {
    CBreadcrumb,
    CBreadcrumbItem,
    CBreadcrumbLink,
  },

  data() {
    return {
      namePage: '',
    }
  },

  computed: {
    ...mapGetters(['breadCumbs']),

    bredcrumbsData: {
      set(newValue) {
        this.pageN = newValue
      },

      get() {
        if (this.$route.params) {
          return Object.keys(this.$route.params).map((item) => {
            return {
              name: item,
              param: this.$route.params[item],
            }
          })
        }

        return null
      },
    },
  },

  mounted() {
    this.getIdProduct(this.$route.params.id)
  },

  methods: {
    async getIdProduct(id) {
      const { data } = await this.$axios.get(`/product/${id}`)

      const crumb = await data.product.brand_name
      this.namePage = crumb
    },
  },
}
</script>

<template>
  <div class="breadcumb">
    <c-breadcrumb font-weight="medium" font-size="sm">
      <c-breadcrumb-item gap="30px">
        <c-breadcrumb-link as="nuxt-link" to="/">
          <p class="breadcumb-item">Главная</p>
        </c-breadcrumb-link>
      </c-breadcrumb-item>
      <c-breadcrumb-item
        v-for="(page, index) in bredcrumbsData"
        :key="index"
        gap="30px"
      >
        <c-breadcrumb-link
          as="nuxt-link"
          :to="
            localePath({ name: page.name, params: { [page.name]: page.param } })
          "
        >
          <p class="breadcumb-item">
            {{ page.name === 'id' ? namePage : page.param }}
          </p>
        </c-breadcrumb-link>
      </c-breadcrumb-item>
    </c-breadcrumb>
  </div>
</template>

<style scoped>
.breadcumb {
  display: flex;
  align-items: center;
  background: #f5f7f7;
  height: 48px;
}
.breadcumb-item {
  color: #0f6cb0;
}
</style>
