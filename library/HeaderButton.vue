<script>
import {
  CThemeProvider, CButton, CIcon, CMenu,
  CMenuButton,
  CMenuList,
  CMenuItem,
  CImage,
  CBadge
} from '@chakra-ui/vue'
import {mapGetters} from 'vuex'
import Mixins from '@/mixins/aos'

export default {
  name: 'HeaderButton',
  components: {
    CThemeProvider,
    CButton,
    CIcon,
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,
    CBadge,
    CImage
  },
  mixins: [Mixins],
  computed: {
    ...mapGetters(['isBadgeLength']),
  },
  methods: {
    cheknamePraduck(item) {
      if (item.length > 15) {
        return item.slice(0, 20)
      } else {
        return item
      }
    },
    handelClick(event) {
      this.$store.dispatch('setSelectIdFilter', event)
    },
    toRoute() {
      const data = this.$store.state.isBadge

      if (this.isBadgeLength === 2) {
        this.$router.push(
          this.localePath({
            path: '/compare',
            query: {firstId: data[0].id, secondId: data[1].id},
          })
        )
      } else if (this.isBadgeLength === 0 || this.isBadgeLength === 1) {
        this.$router.push(
          this.localePath('/')
        )
      }
    },
  },
}
</script>

<template>
  <div>
    <CThemeProvider>
      <c-menu>
        <c-menu-button
:mw="['56px', '56px', '56px', '56px', '56px', '215px']"
                       _focus="{{}}"
                       align-item="center"
                       background-color="none"
                       bg="transparent"
                       border="1px solid"
                       border-color="color.BorderColor"
                       class="header__button"
                       color="color.InputBorder"
                       cursor="pointer"
                       gap="8.5px"
                       height="56px"
                       justify-content="center"
                       ml="20px"
                       right-icon="chevron-down"
                       rounded="12"
                       style="background-color: white"
                       variant-color="color.WhiteColor">
          {{ $t('compare') }}
          <CBadge
            variant="solid"
            background="#6FCF97"
            border-radius="10px"
            margin-bottom="10px"
            padding-top="2px"
            w="16px"
            h="16px"
          >
            {{ isBadgeLength }}
          </CBadge>
        </c-menu-button>
        <c-menu-list style="padding: 8px">
          <c-menu-item
            v-for="(item,index) in $store.state.isBadge" :key="index" class="menu-list-item"
            @click="handelClick(item.id)">
            <main class="menu-list-item-main">
              <c-image
                size="2rem"
                rounded="full"
                :src="item.image"
                alt="Fluffybuns the destroyer"
                mr="12px"></c-image>
              <span>{{ cheknamePraduck(item.name) }}</span>
              <c-icon name="close" size="12px" style="color: red; margin-left: 3px"></c-icon>
            </main>
          </c-menu-item>
          <c-menu-item style="margin-top: 10px">
            <c-button
class="header__button"
                      style="width: 100%"
                      size="xs" variant-color="color.WhiteColor"
                      border-color="color.BorderColor"
                      right-icon="arrow-forward"
                      variant="outline"
                      @click="toRoute">
              <span style="color: red">{{ $t('compare') }}</span>
            </c-button>
          </c-menu-item>
        </c-menu-list>

      </c-menu>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped>
.menu-list-item {
  display: flex;
  padding: 5px;
  justify-content: space-between
}

.menu-list-item-main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

@media screen and(max-width: 1024px) {
  .icon__text {
    display: none;
  }
}

@media screen and(max-width: 768px) {
  .header__button {
    margin-left: 0;
  }
}

@media screen and(max-width: 350px) {
  .header__button {
    height: 48px !important;
  }
}
</style>
