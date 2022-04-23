<script lang="js">
import { CFlex, CThemeProvider } from "@chakra-ui/vue";
import HeaderButton from "~/library/HeaderButton.vue";
import HeaderInput from "~/library/HeaderInput.vue";
import LangButton from "~/library/LangButton.vue";
// import BurgerBtn from "~/library/BurgerBtn.vue";
import Drawer from "~/library/Drawer.vue";

export default {

  name: 'TestHeader',
  components: {
    HeaderButton,
    CThemeProvider,
    CFlex,
    HeaderInput,
    LangButton,
    // BurgerBtn,
    Drawer,
},
}
</script>

<template>
  <CThemeProvider>
    <CFlex>
      <header class="header">
        <NuxtLink to="/">
          <img
            class="header__logo"
            src="@/assets/img/logo.png"
            alt="Arzoni bizda"
            width="187px"
            height="42px"
          />
        </NuxtLink>
        <Drawer />
        <HeaderInput />
        <LangButton />
        <HeaderButton />
      </header>
    </CFlex>
  </CThemeProvider>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  gap: 19px;
  padding: 20px 0;
  margin: 0 auto;
}

.header__logo {
  width: 187px;
  height: 42px;
  padding-right: 94px;
}
</style>
