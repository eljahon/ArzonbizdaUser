<script>
import { CThemeProvider, CBox, CFlex } from '@chakra-ui/vue'
import PhoneModel from './compare-tab-simple-comonents/PhoneModel.vue'
import PhoneVersion from './compare-tab-simple-comonents/PhoneVersion.vue'

export default {
  name: 'CompareCharacter',

  components: {
    CThemeProvider,
    CBox,
    PhoneModel,
    PhoneVersion,
    CFlex,
  },

  props: {
    item: {
      type: Object || Array,
      default: null,
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
    <c-box
      :padding="[
        '15px 25px',
        '15px 25px',
        '17px',
        '20px 30px',
        '22px 43px',
        '24px 45px',
      ]"
    >
      <c-flex>
        <c-box>
          <c-box v-for="(el, id) in item" :key="id">
            <phone-model :item="el" />
          </c-box>
        </c-box>
        <c-box>
          <c-box v-for="(el, id) in item" :key="id">
            <phone-version :item="el" />
          </c-box>
        </c-box>
      </c-flex>
    </c-box>
  </CThemeProvider>
</template>

<style></style>
