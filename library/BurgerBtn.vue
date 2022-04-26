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
      border="1px solid #e4e6e6"
      border-radius="12px"
      w="56px"
      h="56px"
      bg="transparent"
      cursor="pointer"
      _focus="none"
      ml="20px"
    >
      <icon name="burger" />
    </c-button>
  </div>
</template>

<style lang="scss" scoped>
.burger__btn {
  border: 1px solid #e3e6e6;
  border-radius: 12px;
  width: 56px;
  height: 56px;
  cursor: pointer;
  background: transparent;
}
</style>
