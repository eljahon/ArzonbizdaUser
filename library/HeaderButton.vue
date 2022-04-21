<script>
import { CThemeProvider, CButton } from '@chakra-ui/vue'
import Icon from '~/assets/icon/icon.vue'

export default {
  name: 'HeaderButton',
  components: {
    CThemeProvider,
    CButton,
    Icon,
  },
}
</script>

<template>
  <div class="container">
    <CThemeProvider>
      <c-button
        align-item="center"
        width="215px"
        variant-color="color.WhiteColor"
        border-color="color.BorderColor"
        border="1px solid"
        _focus="none"
        color="color.InputBorder"
        height="56px"
        cursor="pointer"
        background-color="none"
        justify-content="center"
        gap="8.5px"
      >
        <Icon name="comparison" />
        Сравнить
      </c-button>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped></style>
