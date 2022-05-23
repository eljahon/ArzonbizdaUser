<script>
import { CThemeProvider, CBox } from '@chakra-ui/vue'
import PricesTabContentItem from './PricesTabContentItem.vue'
export default {
  components: { PricesTabContentItem, CThemeProvider, CBox },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      // PhoneCharacteristics: [
      //   {
      //     id: 1,
      //     phoneName: 'Смартфон Xiaomi Poco X3 Pro 8/256GB',
      //     payment: 'Без кредита',
      //     price: '3 324 000 сум',
      //   },
      //   {
      //     id: 2,
      //     phoneName: 'Смартфон Xiaomi Poco X3 Pro 8/256GB',
      //     payment: 'Без кредита',
      //     price: '3 324 000 сум',
      //   },
      //   {
      //     id: 3,
      //     phoneName: 'Смартфон Xiaomi Poco X3 Pro 8/256GB',
      //     payment: 'Без кредита',
      //     price: '3 324 000 сум',
      //   },
      //   {
      //     id: 4,
      //     phoneName: 'Смартфон Xiaomi Poco X3 Pro 8/256GB',
      //     payment: 'Без кредита',
      //     price: '3 324 000 сум',
      //   },
      //   {
      //     id: 5,
      //     phoneName: 'Смартфон Xiaomi Poco X3 Pro 8/256GB',
      //     payment: 'Без кредита',
      //     price: '3 324 000 сум',
      //   },
      //   {
      //     id: 6,
      //     phoneName: 'Смартфон Xiaomi Poco X3 Pro 8/256GB',
      //     payment: 'Без кредита',
      //     price: '3 324 000 сум',
      //   },
      //   {
      //     id: 7,
      //     phoneName: 'Смартфон Xiaomi Poco X3 Pro 8/256GB',
      //     payment: 'Без кредита',
      //     price: '3 324 000 сум',
      //   },
      // ],
    }
  },

  mounted() {
    console.log(this.item)
  },
}
</script>
<template>
  <CThemeProvider>
    <c-box v-for="data in item" :key="data"
      ><prices-tab-content-item :item="item" /></c-box
  ></CThemeProvider>
</template>

<style></style>
