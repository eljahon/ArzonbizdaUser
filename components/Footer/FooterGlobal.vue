<script>
import { CThemeProvider, CSimpleGrid, CBox } from '@chakra-ui/vue'
import FooterLogoPart from '~/components/Footer/FooterLogoPart.vue'
import FooterInfoPart from '~/components/Footer/FooterInfoPart.vue'
import FooterAboutPart from '~/components/Footer/FooterAboutPart.vue'
import FooterAppPart from '~/components/Footer/FooterAppPart.vue'
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
  },
}
</script>
<template>
  <CThemeProvider>
    <CBox
      bg="color.TextColor3"
      w="100%"
      :pb="['0px', '0px', '20px', '50px']"
      :pt="['10px', '20px', '30px', '40px']"
    >
      <div class="containerBox">
        <CSimpleGrid :columns="['3', '3', '4', '4']">
          <FooterLogoPart />
          <FooterInfoPart />
          <FooterAboutPart />
          <FooterAppPart />
        </CSimpleGrid>
      </div>
    </CBox>
  </CThemeProvider>
</template>
