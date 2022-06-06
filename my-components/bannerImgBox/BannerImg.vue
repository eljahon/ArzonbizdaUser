<script>
import { CBox, CImage } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CImage,
  },
  props: ['imagePath'],
}
</script>

<template>
  <CBox
    width="100%"
    :mt="['24px', '32px', '40px', '50px', '60px', '88px']"
    :height="['70px', '90px', '100px', '120px', '150px', '240px']"
    position="relative"
  >
    <CImage
      position="absolute"
      width="100%"
      height="100%"
      object-fit="cover"
      :border-radius="['8px', '10px', '12px', '14px', '16px', '16px']"
      :src="require(`@/assets/img/${imagePath}`)"
      alt="Jonathan Bakebwa"
    />
  </CBox>
</template>

<style></style>
