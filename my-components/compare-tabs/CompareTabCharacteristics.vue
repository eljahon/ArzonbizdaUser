<script>
import { CThemeProvider, CBox } from '@chakra-ui/vue'
import PhoneModel from './compare-tab-simple-comonents/PhoneModel.vue'
import PhoneVersion from './compare-tab-simple-comonents/PhoneVersion.vue'

export default {
  name: 'CompareCharacter',

  components: {
    CThemeProvider,
    CBox,
    PhoneModel,
    PhoneVersion,
  },

  props: {
    item: {
      type: Array,
      default: () => Array,
      required: true,
    },
  },

  data() {
    return {
      phoneVersion: [{ version: 'OS versiyasi' }],
      phoneModel: [{ name: 'Android11' }],
    }
  },
}
</script>

<template>
  <CThemeProvider>
    <c-box :padding="['0', '0', '17px', '20px 30px', '22px 43px', '24px 45px']">
      <div  v-for="(el, id) in item" :key="id" class="character__hero">
            <phone-version :item="el" />
            <phone-model :item="el" />
        </div>
    </c-box>
  </CThemeProvider>
</template>

<style lang="scss" scoped>
.character__hero {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  align-items: baseline;
  justify-content: space-between;
  gap: 5px;
}
</style>
