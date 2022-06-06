<script>
import { CBox, CSimpleGrid } from '@chakra-ui/vue'
import TabsproductItems from './tabsproduct-items.vue'

export default {
  name: 'TabsProducts',

  components: {
    CBox,
    CSimpleGrid,
    TabsproductItems,
  },

  props: {
    products: {
      type: Array || Object,
      default: null,
      required: true,
    },
  },
}
</script>

<template>
  <CBox
    mt="12px"
    :bg="['white', 'white', 'white', 'white', 'color.BgColor', 'color.BgColor']"
    :padding="['0px', '0px', '0px', '0px', '20px', '20px']"
  >
    <CSimpleGrid
      class="Tabsproduct__grid"
      spacing="10px"
      :columns="['3', '3', '3', '3', '1', '1']"
    >
      <TabsproductItems v-for="(item, id) in products" :key="id" :item="item" />
      <div
        v-if="
          $store.state.has_content === 'no_content' && !$store.state.loading
        "
        data-aos="fade-up"
      >
        Информация не найдена
      </div>
    </CSimpleGrid>
  </CBox>
</template>

<style lang="scss" scoped>
@media (max-width: 374px) {
  .Tabsproduct__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
