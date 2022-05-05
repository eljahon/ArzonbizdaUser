<template>
  <div>
       <CThemeProvider>
           <CCheckbox
           variant-color="color.iconBg"
           >
            {{ $t('compare') }}
           </CCheckbox>
       </CThemeProvider>
  </div>
</template>

<script>
import { CCheckbox, CThemeProvider } from "@chakra-ui/vue"
export default {
  name: 'CategoryFilter',
  components:{
      CCheckbox,
      CThemeProvider
  }
}
</script>

<style lang="scss" scoped></style>
