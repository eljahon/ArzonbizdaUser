<template>
  <div>
    <c-link _hover="none" href="#" color="color.WarningColor1">
      <c-flex
        font-family="Yandex Sans Display"
        :font-size="['10px', '12px', '14px', '16px']"
        :line-height="['18px', '20px', '22px', '24px']"
      >
        Простмотреть все <icon-component name="right_arrow" />
      </c-flex>
    </c-link>
  </div>
</template>

<script>
import { CLink } from '@chakra-ui/vue'
import iconComponent from '~/assets/icon/icon.vue'
export default {
  components: { CLink, iconComponent },
}
</script>
