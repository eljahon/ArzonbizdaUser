<script>
import { CThemeProvider, CBox, CButton } from '@chakra-ui/vue'
import StarButton from './TabSectionBox/StarButton.vue'
import TabInformation from './TabSectionBox/TabInformation.vue'
import TabComment from './TabSectionBox/TabComment.vue'
export default {
  components: {
    CThemeProvider,
    CBox,
    CButton,
    StarButton,
    TabInformation,
    TabComment,
  },
  props:{
    reviews:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
      TabInformation: [
        {
          id: 1,
          fullname: 'Abduvali Rajabov',
          address: 'Toshkent, Yunusobod',
          time: '2 hafta oldin',
          attention:
            'Внимание! Неправильно указанный номер телефона, неточный или неполный адрес могут привести к дополнительной задержке! Пожалуйста, внимательно проверяйте Ваши персональные данные при регистрации и оформлении заказа. Конфиденциальность ваших регистрационных данных гарантируется.',
          delivery__time:
            'Доставка выполняется ежедневно с 09:00 до 19:00 часов.',
        },
        {
          id: 2,
          fullname: 'Abduvali Rajabov',
          address: 'Toshkent, Yunusobod',
          time: '2 hafta oldin',
          attention:
            'Внимание! Неправильно указанный номер телефона, неточный или неполный адрес могут привести к дополнительной задержке! Пожалуйста, внимательно проверяйте Ваши персональные данные при регистрации и оформлении заказа. Конфиденциальность ваших регистрационных данных гарантируется.',
          delivery__time:
            'Доставка выполняется ежедневно с 09:00 до 19:00 часов.',
        },
        {
          id: 3,
          fullname: 'Abduvali Rajabov',
          address: 'Toshkent, Yunusobod',
          time: '2 hafta oldin',
          attention:
            'Внимание! Неправильно указанный номер телефона, неточный или неполный адрес могут привести к дополнительной задержке! Пожалуйста, внимательно проверяйте Ваши персональные данные при регистрации и оформлении заказа. Конфиденциальность ваших регистрационных данных гарантируется.',
          delivery__time:
            'Доставка выполняется ежедневно с 09:00 до 19:00 часов.',
        },
      ],
    }
  },

}
</script>

<template>
  <CThemeProvider>
    <CBox
      :bg="['white', 'white', 'white', 'white', '#FAFAFA', '#FAFAFA']"
      :padding="['0px', '0px', '0px', '0px', '20px', '20px']"
    >
      <CBox>
        <CBox :display="['none', 'none', 'none', 'none', 'block', 'block']">
          <CButton
            background-color="color.WarningColor1"
            color="white"
            border-radius="12px"
            padding="23px 17px"
            border-color="color.WarningColor1"
            border-width="1px"
            :_focus="{
              shadow: 'none',
              bg: 'white',
              color: 'color.WarningColor1',
            }"
            :_hover="{ color: 'color.WarningColor1', backgroundColor: 'white' }"
            >Показать все</CButton
          >
          <StarButton />
          <StarButton />
          <StarButton />
          <StarButton />
          <StarButton />
        </CBox>
      </CBox>
      <CBox>
        <TabComment />
      </CBox>
      <CBox v-for="item in TabInformation" :key="item.id">
        <TabInformation :item="item" />
      </CBox>
    </CBox>
  </CThemeProvider>
</template>

<style lang="scss"></style>
