<template>
  <div>
    <c-link _hover="none" href="#" color="color.WarningColor1">
      <c-flex
        font-family="Yandex Sans Display"
        :font-size="['10px', '12px', '14px', '16px']"
        :line-height="['18px', '20px', '22px', '24px']"
        >{{ $t('viewAll') }}<Icon name="right_arrow" />
      </c-flex>
    </c-link>
  </div>
</template>

<script>
import { CLink } from '@chakra-ui/vue'
import Icon from '~/components/icon.vue'
export default {
  name: 'ViewAllIcon',
  components: { CLink, Icon },
}
</script>
