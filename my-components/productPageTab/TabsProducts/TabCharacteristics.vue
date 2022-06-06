<script>
import { CBox } from '@chakra-ui/vue'
import PhoneCharacteristics from './PhoneCharacteristics.vue'
import PhoneName from './PhoneName.vue'
export default {
  components: {
    CBox,
    PhoneName,
    PhoneCharacteristics,
  },
  props: {
    characterics: {
      type: Array || Object,
      required: true,
    },
  },
  data() {
    return {
      PhoneName: [
        { id: 1, namephone: 'Android 11' },
        { id: 2, namephone: 'Android 11' },
        { id: 3, namephone: 'Android 11' },
        { id: 4, namephone: 'Android 11' },
        { id: 5, namephone: 'Android 11' },
        { id: 6, namephone: 'Android 11' },
        { id: 7, namephone: 'Android 11' },
        { id: 8, namephone: 'Android 11' },
        { id: 9, namephone: 'Android 11' },
        { id: 10, namephone: 'Android 11' },
        { id: 11, namephone: 'Android 11' },
      ],
      phoneVersion: [
        { id: 1, versionForPhone: 'OS versiyasi' },
        { id: 2, versionForPhone: 'OS versiyasi' },
        { id: 3, versionForPhone: 'OS versiyasi' },
        { id: 4, versionForPhone: 'OS versiyasi' },
        { id: 5, versionForPhone: 'OS versiyasi' },
        { id: 6, versionForPhone: 'OS versiyasi' },
        { id: 7, versionForPhone: 'OS versiyasi' },
        { id: 8, versionForPhone: 'OS versiyasi' },
        { id: 9, versionForPhone: 'OS versiyasi' },
        { id: 10, versionForPhone: 'OS versiyasi' },
        { id: 11, versionForPhone: 'OS versiyasi' },
      ],
    }
  },
}
</script>

<template>
  <CBox
    :padding="[
      '15px 10px',
      '20px 15px',
      '20px 15px',
      '25px 20px',
      '30px 24px',
      '32px 24px',
    ]"
    :bg="[
      'initial',
      'initial',
      'initial',
      'initial',
      'color.BgColor',
      'color.BgColor',
    ]"
  >
    <CFlex>
      <CBox>
        <CBox
          v-for="data in characterics"
          :key="data.id"
          :width="['153px', '170px', '300px', '320px', '320px', '314px']"
        >
          <PhoneName :data="data" />
        </CBox>
      </CBox>
      <CBox display="flex" flex-direction="column">
        <CBox
          v-for="datas in characterics"
          :key="datas.id"
          display="flex"
          margin-left="30px"
        >
          <PhoneCharacteristics :datas="datas" />
        </CBox>
      </CBox>
    </CFlex>
  </CBox>
</template>
<style></style>
