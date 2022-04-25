<script>
import { CThemeProvider, CButton } from '@chakra-ui/vue'
import Icon from '~/components/icon.vue'

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
  <div>
    <CThemeProvider>
      <c-button
        align-item="center"
        width="215px"
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
      >
        <Icon name="comparison" />
        {{ $t('compare') }}
      </c-button>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped></style>
