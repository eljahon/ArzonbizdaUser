<script>
import { CThemeProvider, CBox, CFlex } from '@chakra-ui/vue'
import PhoneModel from './compare-tab-simple-comonents/PhoneModel.vue'
import PhoneVersion from './compare-tab-simple-comonents/PhoneVersion.vue'

export default {
  components: {
    CThemeProvider,
    CBox,
    PhoneModel,
    PhoneVersion,
    CFlex,
  },
  data() {
    return {
      phoneVersion: [
        { id: 1, version: 'OS versiyasi' },
        { id: 2, version: 'OS versiyasi' },
        { id: 3, version: 'OS versiyasi' },
        { id: 4, version: 'OS versiyasi' },
        { id: 5, version: 'OS versiyasi' },
        { id: 6, version: 'OS versiyasi' },
        { id: 7, version: 'OS versiyasi' },
        { id: 8, version: 'OS versiyasi' },
        { id: 9, version: 'OS versiyasi' },
        { id: 10, version: 'OS versiyasi' },
      ],
      phoneModel: [
        { id: 1, name: 'Android11' },
        { id: 2, name: 'Android11' },
        { id: 3, name: 'Android11' },
        { id: 4, name: 'Android11' },
        { id: 5, name: 'Android11' },
        { id: 6, name: 'Android11' },
        { id: 7, name: 'Android11' },
        { id: 8, name: 'Android11' },
        { id: 9, name: 'Android11' },
        { id: 10, name: 'Android11' },
      ],
    }
  },
}
</script>
<template>
  <CThemeProvider>
    <c-box>
      <c-flex>
        <c-box>
          <c-box v-for="item in phoneModel" :key="item.id">
            <phone-model :item="item" />
          </c-box>
        </c-box>
        <c-box>
          <c-box v-for="data in phoneVersion" :key="data.id">
            <phone-version :data="data" />
          </c-box>
        </c-box>
      </c-flex>
    </c-box>
  </CThemeProvider>
</template>

<style></style>
