<script>
import { CThemeProvider } from '@chakra-ui/vue'
export default {
  name: 'LanguageButton',
  components: {
    CThemeProvider,
  },

  data() {
    return {
      burgerType: '',
    }
  },
}
</script>

<template>
  <!-- selectga icon qo'yib ketish kerak. Qo'yib qo'yilsin -->

  <div>
    <CThemeProvider>
      <c-box mb="3" w="87px" height="56px">
        <c-select
          v-model="burgerType"
          border-radius="12px"
          _focus="none"
          border="LangBorder"
          color="color.InputColor"
          placeholder="Eng"
          h="56px"
        >
          <option value="jRus">RU</option>
          <option value="Uzb">Uzb</option>
          <option value="Eng">Eng</option>
        </c-select>
      </c-box>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped></style>
