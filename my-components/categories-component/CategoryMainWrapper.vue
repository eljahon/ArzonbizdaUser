<script>
import {
  CSwitch,
  CFlex,
  CFormControl,
  CFormLabel,
  CBox,
  CSelect,
} from '@chakra-ui/vue'
import PopularProducts from '../popular-products/popularProducts.vue'

export default {
  name: 'CategoryMainWrapper',
  components: {
    CSwitch,
    CBox,
    CFlex,
    CFormControl,
    CFormLabel,
    PopularProducts,
    CSelect,
  },

  data() {
    return {
      selectedItem: '',
      switched: true,
      columns: ['4'],
    }
  },

  computed: {
    item() {
      return this.selectedItem
    },
  },

  methods: {
    Switched(e) {
      this.$emit('switch', e.target.checked)
    },
  },
}
</script>

<template>
  <div>
    <CFlex
      direction="column"
      class="c-main__wrapper"
      :class="{ showHide: switched }"
    >
      <CFlex align-items="center">
        <CBox p="10px" border="1px solid #E3E6E6" border-radius="12px">
          <CFormControl>
            <CFlex align-items="center">
              <CSwitch
                id="email-alerts"
                color="red"
                size="md"
                mr="12px"
                :is-checked="true"
                @click="Switched($event)"
              />

              <CFormLabel
                html-for="email-alerts"
                color="color.InputColor"
                font-weight="300"
                font-size="14px"
                line-height="16px"
                white-space="nowrap"
                >{{ $t('showFilter') }}</CFormLabel
              >
            </CFlex>
          </CFormControl>
        </CBox>

        <CBox p="10px">
          <CSelect
            v-model="selectedItem"
            size="md"
            :placeholder="$t('sortBy')"
            border="1px solid #E3E6E6"
            border-radius="12px"
            outline="inherit"
          >
            <option value="grilled">Grilled Backyard Burger</option>
            <option value="pub-style">The Pub-Style Burger</option>
            <option value="jucy-lucy">The Jucy Lucy</option>
          </CSelect>
        </CBox>
      </CFlex>
    </CFlex>
    <PopularProducts
      class="popular__product"
      :class="{ showHide: switched }"
      title="Категория товаров"
      :columns="columns"
    />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1050px) {
  .c-main__wrapper {
    display: none;
  }
}

.showHide {
  grid-template-columns: 1fr !important;
}
</style>
