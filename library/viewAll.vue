<template>
  <div>
    <c-link _hover="{{}}" href="#" color="color.WarningColor1">
      <c-flex
        font-family="Yandex Sans Display"
        :font-size="['10px', '12px', '14px', '16px']"
        :line-height="['18px', '20px', '22px', '24px']"
        align-items="center"
        >{{ $t('viewAll') }}

        <CIcon
          name="right_arrow"
          :ml="['6px', '7px', '8px', '9px', '10px', '10px']"
          mt="10px"
          :size="['14px', '14px', '16px', '18px', '19px', '20px']"
        />
      </c-flex>
    </c-link>
  </div>
</template>

<script>
import { CLink, CIcon } from '@chakra-ui/vue'

export default {
  name: 'ViewAllIcon',
  components: { CLink, CIcon },
}
</script>
