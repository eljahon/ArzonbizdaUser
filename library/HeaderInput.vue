<script>
import { CInput, CThemeProvider, CFlex, CButton, CIcon } from '@chakra-ui/vue'
export default {
  name: 'HeaderInput',
  components: {
    CInput,
    CThemeProvider,
    CFlex,
    CButton,
    CIcon,
  },
}
</script>

<template>
  <div class="header__input">
    <CThemeProvider>
      <c-flex align="center">
        <c-input
          focus-border-color="color.InputColor"
          placeholder="Поиск..."
          color="color.InputColor"
          :width="['280px', '332px', '590px', '430px', '360px', '674px']"
          height="56px"
          _focus="none"
          _hover="none"
          border="InputBorder"
          border-top-left-radius="12px"
          border-bottom-left-radius="12px"
          border-bottom-end-radius="none"
          border-top-right-radius="none"
        />
        <c-button
          class="header__button"
          background-color="color.WarningColor1"
          aria-label="Search database"
          _focus="none"
          _hover="none"
          border="none"
          height="56px"
          border-radius="0px
          11px
          11px
          0px;"
          cursor="pointer"
          mr="20px"
        >
          <CIcon
            name="search"
            fill="transparent"
            color="white"
            :size="['14px', '16px', '18px', '20px', '22px', '24px']"
          />
        </c-button>
      </c-flex>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped>
@media screen and(max-width: 768px) {
  .header__input {
    margin: 16px 0 0 0px;
  }
  .header__button {
    margin-right: 0;
  }
}
@media screen and(max-width: 425px) {
  .header__input {
    margin: 16px 0 0 0px;
  }
}

@media screen and(max-width: 320px) {
  .css-6hv6t1-className {
    width: 234px;
  }
}
</style>
