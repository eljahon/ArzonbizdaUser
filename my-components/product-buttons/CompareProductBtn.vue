<script>
import { CButton, CIcon } from '@chakra-ui/vue'
export default {
  name: 'CompareProductBtn',
  components: {
    CIcon,
    CButton,
  },
}
</script>
<template>
  <c-button
    height="64px"
    :disabled="isBadgeLength === 2"
    max-w="337px"
    w="100%"
    border="1px"
    border-color="color.BorderColor"
    rounded="12px"
    bg="white"
    :_hover="false"
    :_active="false"
    :_focus="false"
    font-weight="400"
    color="color.BorderColor"
    @click="IsComponents"
  >
    <c-icon name="compare" size="24px" mr="10px" />
    {{ $t('compare') }}
  </c-button>
</template>
