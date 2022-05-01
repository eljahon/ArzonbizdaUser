<script>
import { CBox, CText } from '@chakra-ui/vue'
export default {
  components: {
    CBox,
    CText,
  },
}
</script>
<template>
  <CBox
    class="description___box"
    bg="['initial'],['initial'],['initial'],['initial'],['color.BgColor'],['color.BgColor']"
    ><CText
      :width="['initial', 'initial', 'initial', 'initial', '786px', '786px']"
      font-family="Yandex Sans Display"
      color="color.TextColor1"
      :font-size="['12px', '12px', '13px', '14px', '16px', '16px']"
      :line-height="['20px', '21px', '22px', '23px', '24px', '24px']"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui amet tellus
      massa non tortor orci, quam id ut. Fames eleifend viverra egestas donec
      non egestas erat. Eu, et pulvinar dolor facilisis malesuada. Lectus tellus
      vestibulum tempor est vestibulum sit sed tristique. Non vitae sed sed
      volutpat mauris nulla. Risus, curabitur neque risus rhoncus. Viverra in
      integer tincidunt orci at id odio montes. Amet volutpat eu, sed egestas
      volutpat maecenas ultricies semper. Ut elit cursus morbi id faucibus.
    </CText></CBox
  >
</template>

<style lang="scss" scoped></style>
