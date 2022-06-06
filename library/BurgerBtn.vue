<script>
import { CIcon } from '@chakra-ui/vue'
import Drawer from '~/my-components/drawer/Drawer.vue'
import LangButton from '~/library/LangButton.vue'

export default {
  components: {
    CIcon,
    Drawer,
    LangButton,
  },

  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    close() {
      this.isOpen = false
    },
  },
}
</script>

<template>
  <div>
    <c-button
      ref="btnRef"
      class="burger__button"
      border="1px solid #e4e6e6"
      border-radius="12px"
      w="56px"
      h="56px"
      bg="transparent"
      cursor="pointer"
      :_focus="false"
      ml="20px"
      mr="20px"
      @click="isOpen = true"
    >
      <CIcon name="burger" size="24px" />
    </c-button>

    <c-drawer
      w="80%"
      :is-open="isOpen"
      placement="left"
      :on-close="close"
      :initial-focus-ref="() => $refs.inputInsideModal"
    >
      <c-drawer-overlay />
      <c-drawer-content>
        <c-box
          d="flex"
          align-items="center"
          justify-content="space-between"
          pr="25px"
        >
          <c-drawer-header>Категория товаров </c-drawer-header>
          <c-drawer-header><LangButton /> </c-drawer-header>
          <c-close-button @click="isOpen = false" />
        </c-box>
        <c-drawer-body>
          <Drawer />
        </c-drawer-body>
      </c-drawer-content>
    </c-drawer>
  </div>
</template>

<style lang="scss" scoped>
@media screen and(max-width: 768px) {
  .burger__button {
    margin-right: 0;
  }
}
@media screen and(max-width: 350px) {
  .burger__button {
    height: 48px !important;
    margin: 0;
  }
}
</style>
