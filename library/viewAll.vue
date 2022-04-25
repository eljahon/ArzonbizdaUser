<template>
  <div>
    <c-link href="#" color="color.WarningColor1">
      <c-flex
        align-items="center"
        :gap="['6px', '7px', '9px', '10px']"
        font-family="Yandex Sans Display"
        :font-size="['8px', '10px', '14px', '16px']"
        :line-height="['16px', '18px', '22px', '24px']"
        :width="['77px', '102px', '124px', '152px']"
        white-space="nowrap"
      >
        Простмотреть все <Icon name="right_arrow" />
      </c-flex>
    </c-link>
  </div>
</template>

<script>
import { CLink } from '@chakra-ui/vue'
import Icon from '~/components/icon.vue'
export default {
  components: { Icon, CLink },
}
</script>
