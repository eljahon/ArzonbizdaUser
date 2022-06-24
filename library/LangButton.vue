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
      loacale: this.$i18n.locale,

      list: {
        ru: 'Ru',
        en: 'En',
        uz: 'Uz',
      },
    }
  },
  watch: {
    '$i18n.locale'(event) {
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
          v-model="$i18n.locale"
          border-radius="12px"
          _focus="{{}}"
          border="LangBorder"
          color="color.InputColor"
          h="56px"
        >
          <option
            v-for="(item, index) in $i18n.locales"
            :key="index"
            :value="item"
          >
            {{ list[item] }}
          </option>
        </c-select>
      </c-box>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped></style>
