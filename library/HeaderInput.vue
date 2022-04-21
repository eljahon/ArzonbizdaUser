<script>
import { CInput, CThemeProvider, CFlex } from '@chakra-ui/vue'
import Icon from '~/assets/icon/icon.vue'

export default {
  name: 'HeaderInput',
  components: {
    CInput,
    CThemeProvider,
    CFlex,
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
          max-width="708px"
          height="56px"
          _focus="none"
          _hover="none"
          border="InputBorder"
          border-top-left-radius="12px"
          border-bottom-left-radius="12px"
          border-bottom-end-radius="none"
          border-top-right-radius="none"
        />
        <button class="input__btn"><Icon /></button>
      </c-flex>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped>
.input__btn {
  background: #e50914;
  width: 72px;
  height: 56px;
  border: none;
  cursor: pointer;
  border-radius: 0px 11px 11px 0px;
}
</style>
