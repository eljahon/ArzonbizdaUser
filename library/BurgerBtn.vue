<script>
import icon from '@/components/icon.vue'

export default {
  components: {
    icon,
  },
}
</script>

<template>
  <div>
    <c-button
      class="burger__button"
      border="1px solid #e4e6e6"
      border-radius="12px"
      w="56px"
      h="56px"
      bg="transparent"
      cursor="pointer"
      _focus="none"
      ml="20px"
      mr="20px"
    >
      <icon name="burger" />
    </c-button>
  </div>
</template>

<style lang="scss" scoped>
@media screen and(max-width: 768px) {
  .burger__button {
    margin-right: 0;
  }
}
</style>
