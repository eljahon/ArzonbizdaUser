<script>
import { CBox, CSimpleGrid } from '@chakra-ui/vue'
import TabsproductItems from './tabsproduct-items.vue'
export default {
  components: {
    CBox,
    TabsproductItems,
    CSimpleGrid,
  },
  props: {
    toogleWord: {
      required: true,
      type: String,
    },
  },
}
</script>
<template>
  <CBox
    :bg="['white', 'white', 'white', 'white', '#FAFAFA', '#FAFAFA']"
    :padding="['0px', '0px', '0px', '0px', '20px', '20px']"
  >
    <CBox v-if="toogleWord === 'one'">
      <CSimpleGrid
        class="Tabsproduct__grid"
        spacing="10px"
        :columns="['3', '3', '3', '3', '1', '1']"
      >
        <TabsproductItems />
        <TabsproductItems />
        <TabsproductItems />
        <TabsproductItems />
        <TabsproductItems />
        <TabsproductItems />
        <TabsproductItems />
      </CSimpleGrid>
    </CBox>
    <CBox v-if="toogleWord === 'two'">
      <CBox> TWO </CBox>
    </CBox>
    <CBox v-if="toogleWord === 'three'">
      <CBox> Three </CBox>
    </CBox>
    <CBox v-if="toogleWord === 'four'">
      <CBox> Four </CBox>
    </CBox>
  </CBox>
</template>

<style lang="scss" scoped>
@media (max-width: 374px) {
  .Tabsproduct__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
