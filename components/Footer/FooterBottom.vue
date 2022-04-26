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
  <CBox bg="color.TextColor2">
    <CBox as="div" class="containerBox" py="16px">
      <CText font-weight="300" line-height="24px" color="white">
        © 2022. ООО "Arzon Bizda"
      </CText>
    </CBox>
  </CBox>
</template>
