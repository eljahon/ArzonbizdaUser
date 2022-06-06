<script>
import { CThemeProvider } from '@chakra-ui/vue'
import BannerImg from './BannerImg.vue'

export default {
  components: { BannerImg, CThemeProvider },
}
</script>

<template>
  <CThemeProvider>
    <BannerImg mt="88px" image-path="banner1.png" />
  </CThemeProvider>
</template>

<style></style>
