<script>
import { CButton } from '@chakra-ui/vue'

export default {
  name: 'OpenProductBtn',

  components: {
    CButton,
  },
}
</script>

<template>
  <c-button
    height="64px"
    max-w="337px"
    w="100%"
    mr="30px"
    border="1px"
    border-color="color.BorderColor"
    rounded="12px"
    bg="color.BorderColor"
    :_hover="false"
    :_active="false"
    :_focus="false"
    font-weight="400"
    color="white"
  >
    {{ $t('view') }}
  </c-button>
</template>
