<script>
import { CBox, CImage, CText } from '@chakra-ui/vue'
export default {
  components: {
    CBox,
    CImage,
    CText,
  },
  props: ['item'],
}
</script>

<template>
  <CBox
    ><CBox
      class="imgDiv"
      :height="['200px', '250px', '300px', '370px']"
      :border-radius="['8px','10px','12px','16px']"
      overflow="hidden"
      position="relative"
      ><CImage
        position="absolute"
        width="100%"
        height="100%"
        object-fit="cover"
        :src="require(`@/assets/img/${item.imgageURL}`)"
        alt="Jonathan Bakebwa"
      ></CImage
    ></CBox>
    <CBox>
      <CText
        class="__qator2"
        :mt="['10px', '15px', '20px', '24px']"
        color="color.#242625"
        text-align="start"
        :font-size="['10px', '25px', '20px', '24px']"
        font-family="Yandex Sans Display"
        font-weight="700"
        :line-height="['14px', '20px', '24px', '28px']"
        >{{ item.textName }}</CText
      >
    </CBox>
  </CBox>
</template>
<style lang="scss" scoped>
@media (max-width: 489px) {
  .imgDiv {
    height: 122px;
  }
}
@media (max-width: 489px) {
  .imgDiv {
    height: 102px;
  }
}
</style>
