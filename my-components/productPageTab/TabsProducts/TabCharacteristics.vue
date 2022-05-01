<script>
import { CBox } from '@chakra-ui/vue'
import AndroidWord from './AndroidWord.vue'
import AndroidName from './AndroidName.vue'
export default {
  components: {
    CBox,
    AndroidWord,
    AndroidName,
  },
}
</script>
<template>
  <CBox>
    <CFlex>
      <CBox :width="['153px', '170px', '300px', '320px', '320px', '314px']">
        <AndroidWord />
        <AndroidWord />
        <AndroidWord />
        <AndroidWord />
        <AndroidWord />
        <AndroidWord />
        <AndroidWord />
        <AndroidWord />
        <AndroidWord />
        <AndroidWord />
        <AndroidWord />
      </CBox>
      <CBox margin-left="30px">
        <AndroidName />
        <AndroidName />
        <AndroidName />
        <AndroidName />
        <AndroidName />
        <AndroidName />
        <AndroidName />
        <AndroidName />
        <AndroidName />
        <AndroidName />
        <AndroidName />
      </CBox>
    </CFlex>
  </CBox>
</template>
<style></style>
