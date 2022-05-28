<script>
import { CThemeProvider, CBox, CSimpleGrid, CHeading } from '@chakra-ui/vue'
import NewBlogcard from '@/my-components/newBlog/NewBlogcard.vue'

export default {
  components: {
    NewBlogcard,
    CThemeProvider,
    CBox,
    CSimpleGrid,
    CHeading,
  },

  data() {
    return {
      route: this.$route,
      loading: false,
      blogList: [],
    }
  },

  mounted() {
    this.$store.dispatch('addBreadcumbs', this.route)
    this.fetchItems()
  },

  methods: {
    async fetchItems() {
      this.loading = true
      const { data } = await this.$axios.get('admin/blog/posts', {})

      this.blogList = {
        image: data.posts[0].image,
        title: data.posts[0].title,
      }

      console.log(this.blogList)
      this.loading = false
    },
  },
}
</script>

<template>
  <CThemeProvider>
    <div>
      <CHeading
        :mt="['26px', '40px', '60px', '88px']"
        :mb="['16px', '25px', '32px', '40px']"
        color="color.TextColor2"
        :font-size="['12px', '15px', '20px', '24px']"
        font-family="Yandex Sans Display"
        font-weight="700"
        :line-height="['16px', '18px', '20px', '24px']"
        >{{ $t('newBlogWord') }}</CHeading
      >
      <nuxt-link to="/blog">
        <CSimpleGrid
          align-items="center"
          :columns="['3', '3', '3', '3', '4', '4']"
          :spacing="['10px', '12px', '15px', '20px', '25px', '30px']"
        >
          <CBox
            width="100%"
            class="products__div"
            justify-content="center"
            align-items="center"
            display="flex"
          >
            <NewBlogcard :blog="blogList" />
          </CBox>
        </CSimpleGrid>
      </nuxt-link>
    </div>
  </CThemeProvider>
</template>

<style lang="scss" scoped>
.products__div {
  @media screen and(max-width: 1024px) {
    &:nth-child(n + 4) {
      display: none;
    }
  }
}
</style>
