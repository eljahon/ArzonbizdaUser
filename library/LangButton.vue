<script>
import { CThemeProvider } from '@chakra-ui/vue'
export default {
  name: 'LanguageButton',
  components: {
    CThemeProvider,
  },
  props: {
    langOptins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loacales: '',
    }
  },
  watch: {
    loacales(event) {
      this.$router.push(this.switchLocalePath(event))
    },
  },
}
</script>

<template>
  <!-- selectga icon qo'yib ketish kerak. Qo'yib qo'yilsin -->

  <div>
    <CThemeProvider>
      <c-box w="87px" height="56px">
        <c-select
          v-model="loacales"
          border-radius="12px"
          :_focus="false"
          border="LangBorder"
          color="color.InputColor"
          placeholder="Рус"
          h="56px"
        >
          <option value="ru">Ru</option>
          <option value="uz">Uzb</option>
          <option value="en">Eng</option>
        </c-select>
      </c-box>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped></style>
