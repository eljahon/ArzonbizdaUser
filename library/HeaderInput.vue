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

  data() {
    return {
      search: this.$route.query.search ? this.$route.query.search : '',
    }
  },

  methods: {
    searchProductGetAll() {
      this.$router.push({
        path: this.localePath('/search'),
        query: { search: this.search },
      })
      this.$store.dispatch('changeProducts', {
        axios: this.$axios,
        query: this.search,
      })
    },
    handleKeyPress(event) {
      if (event.charCode === 13) {
        this.searchProductGetAll()
      }
    },
  },
}
</script>

<template>
  <div class="header__input">
    <CThemeProvider>
      <c-flex align="center">
        <c-input
          v-model="search"
          class="header___input"
          type="text"
          _focus-border-color="color.InputColor"
          placeholder="Поиск..."
          color="color.InputColor"
          :width="['100%', '100%', '100%', '430px', '300px', '540px']"
          height="56px"
          _focus="{{}}"
          _hover="{{}}"
          border="InputBorder"
          border-top-left-radius="12px"
          border-bottom-left-radius="12px"
          border-bottom-end-radius="none"
          border-top-right-radius="none"
          @keypress="handleKeyPress"
        />

        <c-button
          class="header__button"
          type="submit"
          background-color="color.WarningColor1"
          aria-label="Search database"
          _focus="{{}}"
          _hover="{{}}"
          border="none"
          height="56px"
          border-radius="0px
          11px
          11px
          0px;"
          cursor="pointer"
          mr="20px"
          @click="searchProductGetAll"
        >
          <!-- :disabled="search.length === 0" -->
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
@media screen and(max-width: 1333px) {
}
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
  .header__input {
    width: 234px;
  }
}
</style>
