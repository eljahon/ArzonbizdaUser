<script>
import { CBox, CText } from '@chakra-ui/vue'
export default {
  name: 'FooterBottom',
  components: {
    CBox,
    CText,
  },
}
</script>

<template>
  <CBox bg="color.TextColor2" class="footerBottom">
    <CBox as="div" class="containerBox" py="16px">
      <CText font-weight="300" line-height="24px" color="white">
        © 2022. ООО "Arzon Bizda"
      </CText>
    </CBox>
  </CBox>
</template>

<style lang="scss" scoped>
.footerBottom {
  @media screen and(max-width: 995px) {
    display: none;
  }
}
</style>
