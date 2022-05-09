<script>
import { CBox, CText } from '@chakra-ui/vue'
export default {
  components: { CBox, CText },
  props: ['item'],
}
</script>
<template>
  <c-box w="300px">
    <c-text
      mt="24px"
      font-family="Yandex Sans Display"
      font-size="16px"
      font-weight="700"
      font-style="normal"
      line-height="24px"
      color="color.TextColor1"
      >{{ item.name }}</c-text
    >
  </c-box>
</template>

<style></style>
