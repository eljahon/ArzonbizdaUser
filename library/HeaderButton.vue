<script>
import { CThemeProvider, CButton, CIcon, CBadge } from '@chakra-ui/vue'

import { mapGetters } from 'vuex'

export default {
  name: 'HeaderButton',
  components: {
    CThemeProvider,
    CButton,
    CIcon,
    CBadge,
  },

  computed: {
    ...mapGetters(['isBadgeLength']),
  },

  methods: {
    toRoute() {
      const data = this.$store.state.isBadge
      if (this.isBadgeLength === 2) {
        this.$router.push(
          this.localePath({
            path: '/compare',
            query: { firstId: data[0], secondId: data[1] },
          })
        )
      }
    },
  },
}
</script>

<template>
  <div>
    <CThemeProvider>
      <c-button
        to="/compare"
        class="header__button"
        align-item="center"
        :mw="['56px', '56px', '56px', '56px', '56px', '215px']"
        variant-color="color.WhiteColor"
        border-color="color.BorderColor"
        border="1px solid"
        rounded="12"
        _focus="{{}}"
        color="color.InputBorder"
        height="56px"
        cursor="pointer"
        background-color="none"
        justify-content="center"
        gap="8.5px"
        bg="transparent"
        ml="20px"
        @click="toRoute"
      >
        <CIcon
          name="comparison"
          :size="['16px', '16px', '17px', '18px', '19px', '20px']"
        />
        <p class="icon__text">
          {{ $t('compare') }}
        </p>
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
      </c-button>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped>
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
