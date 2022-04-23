<script>
import {
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  //   CDrawerCloseButton,
} from '@chakra-ui/vue'
import BurgerBtn from './BurgerBtn.vue'

export default {
  name: 'DrawerBtn',
  components: {
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    // CDrawerCloseButton,
    BurgerBtn,
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
      width="56px"
      background="transparent"
      border="none"
      _focus="none"
      _active="none"
      @click="isOpen = true"
    >
      <BurgerBtn
    /></c-button>

    <c-drawer
      :is-open="isOpen"
      placement="left"
      :on-close="close"
      :initial-focus-ref="() => $refs.inputInsideModal"
    >
      <c-drawer-overlay />
      <c-drawer-content>
        <c-drawer-close-button />
        <c-drawer-header></c-drawer-header>

        <c-drawer-body>
          <!-- <c-input ref="inputInsideModal" placeholder="Type here..." /> -->
        </c-drawer-body>

        <c-drawer-footer>
          <!-- <c-button variant="outline" mr="3" @click="isOpen = false"
            >Cancel</c-button -->

          <!-- <c-button variant-color="blue">Save</c-button> -->
        </c-drawer-footer>
      </c-drawer-content>
    </c-drawer>
  </div>
</template>
