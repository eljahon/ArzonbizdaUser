<script>
import { CInput, CThemeProvider, CFlex, CButton } from '@chakra-ui/vue'
import Icon from '~/components/icon.vue'
// import Icon from '~/components/icon.vue'

export default {
  name: 'HeaderInput',
  components: {
    CInput,
    CThemeProvider,
    CFlex,
    CButton,
    Icon,
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
          :width="['244px', '410px', '650px', '768px']"
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
        >
          <Icon name="search" />
        </c-button>
      </c-flex>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped></style>
