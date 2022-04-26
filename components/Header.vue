<script lang="js">
import { CFlex, CThemeProvider } from "@chakra-ui/vue";
import HeaderButton from "~/library/HeaderButton.vue";
import HeaderInput from "~/library/HeaderInput.vue";
import LangButton from "~/library/LangButton.vue";
import BurgerBtn from "~/library/BurgerBtn.vue"
// import Drawer from "~/library/Drawer.vue";

export default {
  name: 'HeaderComponent',

  components: {
    HeaderButton,
    CThemeProvider,
    CFlex,
    HeaderInput,
    LangButton,
    BurgerBtn
    // Drawer,
},
}
</script>

<template>
  <CThemeProvider>
    <header>
      <c-icon name="test" color="red" bg="white" fill="white" />
      sdsd
      <c-flex
        align="center"
        justify-content="space-between"
        mt="20px"
        mb="20px"
      >
        <c-box>
          <NuxtLink to="/">
            <img
              class="header__logo"
              src="@/assets/img/logo.png"
              alt="Arzoni bizda"
              width="187px"
              height="42px"
            />
          </NuxtLink>
        </c-box>
        <!-- <Drawer /> -->
        <c-box>
          <c-flex justify="space-between" gap="34px">
            <BurgerBtn />
            <HeaderInput />
            <LangButton />
          </c-flex>
        </c-box>

        <HeaderButton />
      </c-flex>
    </header>
  </CThemeProvider>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 19px;
  padding: 20px 0;
  margin: 0 auto;
}

.header__logo {
  width: 187px;
  height: 42px;
}
</style>
