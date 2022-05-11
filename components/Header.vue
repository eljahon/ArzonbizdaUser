<script lang="js">
import { CFlex, CThemeProvider,CIcon,CBox} from "@chakra-ui/vue";
import HeaderButton from "~/library/HeaderButton.vue";
import HeaderInput from "~/library/HeaderInput.vue";
import LangButton from "~/library/LangButton.vue";
import BurgerBtn from "~/library/BurgerBtn.vue"


export default {
  name: 'HeaderComponent',

  components: {
    HeaderButton,
    CThemeProvider,
    CFlex,
    HeaderInput,
    LangButton,
    BurgerBtn,
    CIcon,CBox
},
}
</script>

<template>
  <CThemeProvider>
    <header class="header">
      <c-flex
        align="center"
        justify-content="space-between"
        mt="20px"
        mb="20px"
        flex-wrap="wrap"
      >
        <c-box width="139px" height="40px">
          <NuxtLink as="router-link" to="/">
            <!-- <img
              class="header__logo"
              src="@/assets/img/logo.png"
              alt="Arzoni bizda"
              width="139px"
              height="24px"
            /> -->
            <c-flex display="flex" align-items="center">
              <c-icon name="logo_ab" size="36px" />
              <c-icon name="arzonBizdaHeader" width="139px" height="24px" />
            </c-flex>
          </NuxtLink>
        </c-box>

        <c-box>
          <c-flex
            justify="center"
            align-items="baseline"
            gap="10px"
            flex-wrap="wrap"
          >
            <BurgerBtn class="burger__Btn" />
            <HeaderButton class="mobile" />
          </c-flex>
        </c-box>
        <HeaderInput class="header__input" />
        <LangButton class="lang__btn" />
        <HeaderButton class="desktop" />
      </c-flex>
    </header>
    <NavbarPopular />
  </CThemeProvider>
</template>
<style lang="scss" scoped>
.header {
  gap: 19px;
  padding: 20px 0;
  margin: 0 auto;
  flex-direction: row;
}

.mobile {
  display: none;
}

.header__logo {
  width: 139px;
  height: 40px;
}

@media screen and(max-width: 1024px) {
  .lang__btn {
    display: none;
  }
}
@media screen and(max-width: 1333px) {
}

@media screen and(max-width: 912px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
