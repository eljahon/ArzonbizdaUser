<script>
import { CBox, CImage, CHeading, CStack, CFlex } from '@chakra-ui/vue'
import Icon from '@/components/icon.vue'
export default {
  name: 'PopularProduct',
  components: {
    CBox,
    CImage,
    CHeading,
    CStack,
    Icon,
    CFlex,
  },
  props: ['item'],
}
</script>

<template>
  <c-box>
    <c-box p="44px" bg="color.ImageBgColor" rounded="12px">
      <c-image :src="require(`@/assets/img/${item.img}`)" />
    </c-box>
    <c-box>
      <c-stack>
        <c-box pt="5">
          <c-heading as="h2" size="lg" mb="8px">от 3 324 000 сум</c-heading>
          <c-box
            as="span"
            font-family="Yandex Sans Display"
            font-size="20px"
            line-height="30px"
            color="color.TextColor2"
            >Xiaomi Poco X3 Pro 8/256GB</c-box
          >
        </c-box>
      </c-stack>
    </c-box>
    <c-box mt="8px">
      <c-flex align="center">
        <c-box d="flex" align-items="center" font-family="Yandex Sans Display">
          <icon name="star" />
          <c-box as="span" ml="7px">4,8</c-box>
        </c-box>
        <c-box
          d="flex"
          align-items="center"
          font-family="Yandex Sans Display"
          ml="36px"
        >
          <icon name="comment" />
          <c-box as="span" ml="7px">26</c-box>
        </c-box>
      </c-flex>
    </c-box>
  </c-box>
</template>

<style></style>
