<script>
import { CIcon } from '@chakra-ui/vue'

export default {
  components: {
    CIcon,
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
          <c-drawer-header>Create your account</c-drawer-header>
          <c-close-button @click="isOpen = false" />
        </c-box>
        <c-drawer-body>
          <c-input ref="inputInsideModal" placeholder="Type here..." />
        </c-drawer-body>

        <c-drawer-footer>
          <c-button variant="outline" mr="3" @click="isOpen = false"
            >Cancel</c-button
          >
          <c-button variant-color="blue">Save</c-button>
        </c-drawer-footer>
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
</style>
