<script>
import { CBox } from '@chakra-ui/vue'
import PhoneCharacteristics from './PhoneCharacteristics.vue'
import PhoneName from './PhoneName.vue'
import TabsProducts from './TabsProducts.vue'
export default {
  components: {
    CBox,
    PhoneName,
    PhoneCharacteristics,
    TabsProducts
  },
  props: {
    characterics: {
      type: Array || Object,
      required: true,
    },
    dataList: {
      type: Array,
      required: true
    }
  },
}
</script>

<template>
 <div>
   <CBox
     :padding="[
      '15px 10px',
      '20px 15px',
      '20px 15px',
      '25px 20px',
      '30px 24px',
      '32px 24px',
    ]"
     :bg="[
      'initial',
      'initial',
      'initial',
      'initial',
      'color.BgColor',
      'color.BgColor',
    ]"
   >
     <CFlex>
       <CBox>
         <CBox
           v-for="(data, index) in characterics"
           :key="data.id"
           :width="['153px', '170px', '300px', '320px', '320px', '314px']"
         >
           <PhoneName v-if="index < 6" :data="data" />
         </CBox>
       </CBox>
       <CBox display="flex" flex-direction="column" >
         <CBox
           v-for="(datas, index) in characterics"
           :key="datas.id"
           display="flex"
           margin-left="30px"
         >
           <PhoneCharacteristics v-if="index < 6" :datas="datas" />
         </CBox>
       </CBox>
     </CFlex>
   </CBox>
   <div>
     <br>
     <h1 class="textList">{{$t('similarPraducts')}}</h1>
     <div>
       <tabs-products
         :products="dataList"
         data-aos="fade-up"
       />
     </div>
   </div>
 </div>
</template>
