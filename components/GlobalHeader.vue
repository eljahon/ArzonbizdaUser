<template>
  <div class="container">
    <p>Телефоны</p>
    <!-- <CButton variant-color="green">Button</CButton> -->
    <CThemeProvider>
      <c-button
        variant="primary"
        size="md"
        height="50px"
        width="250px"
        bg-color="none"
        border="none"
        _focus="none"
        cursor="pointer"
      >
        Button
      </c-button>
    </CThemeProvider>
  </div>
</template>

<script lang="js">

import { CThemeProvider,  CButton } from '@chakra-ui/vue'

export default {

  name: 'TestHeader',
  components: {
    CThemeProvider,
    CButton
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

p {
  font-family: 'Yandex Sans Display';
  font-size: 20px;
  color: red;
}
</style>
