<script>
import Icon from '~/components/icon.vue'
export default {
  components: {
    Icon,
  },
}
</script>

<template>
  <div>
    <button class="burger__btn">
      <Icon name="burger" />
    </button>
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
