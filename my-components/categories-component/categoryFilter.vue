<script>
  import { CCheckbox, CThemeProvider, CCheckboxGroup, CText, CBox,  } from '@chakra-ui/vue'
  import filterHeader from "./filterHeader.vue"
  export default {
    name: 'CategoryFilter',
    components: {
      filterHeader,
      CCheckbox,
      CThemeProvider,
      CCheckboxGroup,
      CText,
      CBox,
    },
    data(){
      return{
        filters:[
        {
          name:"tablet",
          value:"tablet",
          count:1632
        },
        {
          name:"telephone",
          value:"phone",
          count:877
        },
        {
          name:"tv",
          value:"tv",
          count:540
        },
        {
          name:"noutbook",
          value:"noutbook",
          count:647
        },
        {
          name:"smartWatch",
          count:798
        },
        {
          name:"conditionair",
          count:826
        },
        {
          name:"fridge",
          count:994
        },
        {
          name:"monitor",
          count:492
        },
        ],
        brands:[
        {
          name:"Samsung",
          value:"samsung",
          count:1632
        },
        {
          name:"Xiaomi",
          value:"xiaomi",
          count:647
        },
        {
          name:"LG",
          value:"lg",
          count:540
        },
        {
          name:"Apple",
          value:"apple",
          count:877
        },
        {
          name:"Motorolla",
          value:"motorolla",
          count:798
        }
        ]
      }
    },
    methods:{
    }
  }
</script>

<template>
  <div class="category-filter">
    <CThemeProvider >
      <filterHeader title="category"/>
      <CCheckboxGroup variant-color="red" w="338px">
        <CCheckbox
        v-for="(items, index) in filters"
        :key="index"
        :value="items.value"
        variant-color="red"
        >
        {{ $t(items.name) }}
        <CText
        font-size="md"
        color="color.iconBg">
        {{ items.count }}
      </CText>
    </CCheckbox>
  </CCheckboxGroup>

  <CBox mt="12">
    <filterHeader title="brand"/>
    <CCheckboxGroup variant-color="red" w="338px">
      <CCheckbox
      v-for="(brand, index) in brands"
      :key="index"
      :value="brand.value"
      variant-color="red"
      >
      {{ brand.name }}
      <CText font-size="md" color="color.iconBg">{{ brand.count }}</CText>
    </CCheckbox>
  </CCheckboxGroup>
</CBox>
</CThemeProvider>
</div>
</template>

<style lang="scss" scoped>
  .category-filter{
    width: 328px;
    margin-top: 48px;
  }
  .salom{
    display:flexx
  }
</style>
