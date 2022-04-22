<script>
import icon from '~/assets/icon/icon.vue'
export default {
  components: {
    icon,
  },
}
</script>

<template>
  <div>
    <button class="burger__btn">
      <icon name="burger" />
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
