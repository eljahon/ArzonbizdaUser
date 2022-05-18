<script>
import { CThemeProvider, CButton, CIcon, CLink, CBadge } from '@chakra-ui/vue'
import {mapGetters} from "vuex"

export default {
  name: 'HeaderButton',
  components: {
    CThemeProvider,
    CButton,
    CIcon,
    CLink,
    CBadge
  },
  computed:{
    ...mapGetters(["isBadgeLength"]),
  },
}
</script>

<template>
  <div>
    <CThemeProvider>
      <c-link as="router-link" to="/compare" :_hover="false">
        <c-button
          class="header__button"
          align-item="center"
          :mw="['56px', '56px', '56px', '56px', '56px', '215px']"
          variant-color="color.WhiteColor"
          border-color="color.BorderColor"
          border="1px solid"
          rounded="12"
          _focus="none"
          color="color.InputBorder"
          height="56px"
          cursor="pointer"
          background-color="none"
          justify-content="center"
          gap="8.5px"
          bg="transparent"
          ml="20px"
        >
          <CIcon
            name="comparison"
            :size="['16px', '16px', '17px', '18px', '19px', '20px']"
          />
          <p class="icon__text">
            {{ $t('compare') }}
          </p>
          <CBadge variant='solid' color-scheme='green'>
            {{ isBadgeLength }}
          </CBadge>
        </c-button>
      </c-link>
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
</style>
