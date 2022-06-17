<script>
import { CImage } from '@chakra-ui/vue'

export default {
  name: 'TabReviewsImg',
  components: { CImage },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
  <CBox
    :height="['100px', '100px', '115px', '128px', '131px', '131px']"
    class="img__box"
    border-radius="12px"
    overflow="hidden"
    position="relative"
    ml="4px"
    ><CImage
      position="absolute"
      width="100%"
      height="100%"
      object-fit="cover"
      :src="require(`@/assets/img/${data.imgUrl}`)"
      alt="Jonathan Bakebwa"
    ></CImage
  ></CBox>
</template>

<style>
@media (max-width: 375px) {
  .img__box {
    height: 100px;
  }
}
</style>
