<script>
import { CBox, CImage } from '@chakra-ui/vue'

export default {
  name: 'BlogDiscImgBanner',

  components: { CBox, CImage },

  props: {
    image: {
      type: Object || Array,
      default: null,
      required: true,
    },
  },
}
</script>

<template>
  <c-box
    position="relative"
    :mt="['11px', '14px', '16px', '20px', '25px', '34px']"
    width="100%"
    :height="['208px', '230px', '260px', '300px', '330px', '370px']"
  >
    <c-image
      border-radius="12px"
      :src="image"
      position="absolute"
      width="100%"
      height="100%"
      object-fit="cover"
    >
    </c-image>
  </c-box>
</template>
