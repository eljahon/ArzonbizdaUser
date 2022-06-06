<script>
import { CButton, CIcon } from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
export default {
  name: 'CompareProductBtn',
  components: {
    CIcon,
    CButton,
  },

  props: {
    items: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isCom: false,
    }
  },

  computed: {
    ...mapGetters(['isBadgeLength']),
  },

  methods: {
    IsComponents() {
      this.$store.dispatch('actionsIsCom', this.$route.params.id)

      if (this.isBadgeLength < 2) {
        this.$router.push('/')
      } else if (this.isBadgeLength === 2) {
        console.log(this.$store.state.isBadge)
      }
    },
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
