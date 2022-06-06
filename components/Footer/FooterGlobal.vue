<script>
import { CThemeProvider, CSimpleGrid, CBox } from '@chakra-ui/vue'
import FooterLogoPart from '~/components/Footer/FooterLogoPart.vue'
import FooterInfoPart from '~/components/Footer/FooterInfoPart.vue'
import FooterAboutPart from '~/components/Footer/FooterAboutPart.vue'
import FooterAppPart from '~/components/Footer/FooterAppPart.vue'
import FooterBottom from '~/components/Footer/FooterBottom.vue'

export default {
  name: 'FooterGlobal',

  components: {
    CThemeProvider,
    CSimpleGrid,
    CBox,
    FooterLogoPart,
    FooterInfoPart,
    FooterAboutPart,
    FooterAppPart,
    FooterBottom,
  },
}
</script>

<template>
  <div class="footer">
    <CThemeProvider>
      <CBox
        mt="98px"
        bg="color.TextColor3"
        w="100%"
        :pb="['0', '10px', '15px', '20px', '40px', '50px']"
        :pt="['5px', '10px', '15px', '20px', '30px', '40px']"
      >
        <div class="containerBox">
          <CSimpleGrid
            :columns="['3', '3', '4', '4', '4', '4']"
            class="footer-grid"
          >
            <FooterLogoPart />
            <FooterInfoPart />
            <FooterAboutPart />
            <FooterAppPart />
          </CSimpleGrid>
        </div>
      </CBox>

      <FooterBottom />
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped>
.footer-grid {
  @media screen and(max-width: 315px) {
    grid-template-columns: 1fr;
  }
}
</style>
