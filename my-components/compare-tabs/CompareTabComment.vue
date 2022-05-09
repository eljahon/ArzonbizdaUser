<script>
import { CThemeProvider, CBox, CText } from '@chakra-ui/vue'
export default {
  components: {
    CThemeProvider,
    CBox,
    CText,
  },
}
</script>
<template>
  <CThemeProvider>
    <c-box padding="24px 45px">
      <c-text
        font-family="Yandex Sans Display"
        font-size="16px"
        font-weight="300"
        font-style="normal"
        line-height="24px"
        color="color.TextColor1"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum
        enim, nulla libero ratione atque provident similique ex ullam mollitia,
        debitis sint iusto fuga, voluptate a exercitationem ipsam beatae harum?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        ullam neque necessitatibus, ab aperiam blanditiis vitae quis molestias
        accusantium porro illo quasi. Ipsa earum eveniet voluptate dolores
        doloremque, veritatis beatae?
      </c-text>
    </c-box>
  </CThemeProvider>
</template>

<style></style>
