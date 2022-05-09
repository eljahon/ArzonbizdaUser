<script>
import { CThemeProvider, CBox, CText, CIcon } from '@chakra-ui/vue'
import BlogDiscImgBanner from './Blog-disc-imgBanner.vue'
import BlogDiscTextComponent from './blog-disc-text-component.vue'
export default {
  name: 'BlogDiscComponents',
  components: {
    CThemeProvider,
    CBox,
    CText,
    CIcon,
    BlogDiscImgBanner,
    BlogDiscTextComponent,
  },
}
</script>
<template>
  <CThemeProvider>
    <CBox
      display="flex"
      :mt="['24px', '35px', '45px', '50px', '55px', '64px']"
      justify-content="center"
      align-items="center"
    >
      <CBox
        :width="['100%', '100%', '100%', '705px', '705px', '705px']"
        :padding="['0px', '10px', '15px', '35px', '35px', '35px']"
        border-radius="12px"
        :bg="[
          'initial',
          'initial',
          'initial',
          'color.blog__discBg__Color',
          'color.blog__discBg__Color',
          'color.blog__discBg__Color',
        ]"
      >
        <CText
          color="color.TextColor2"
          :font-size="['12px', '14px', '16px', '22px', '26px', '28px']"
          font-family="Yandex Sans Display"
          :font-weight="['700', '700', '700', '400', '400', '400']"
          :line-height="['16px', '20px', '24px', '30px', '44px', '48px']"
          >{{ $t('forguys') }}</CText
        >
        <CBox
          :mt="['9px', '12px', '14px', '16px', '18px', '20px']"
          display="flex"
          align-items="center"
        >
          <CBox display="flex" align-items="center">
            <CIcon
              name="user"
              :size="['11px', '13px', '15px', '17px', '19px', '24px']"
              fill="transparent"
            />
            <CText
              ml="5px"
              color="color.WarningColor1"
              :font-size="['8px', '10px', '12px', '13px', '15px', '16px']"
              font-family="Yandex Sans Display"
              font-weight="400"
              :line-height="['10px', '12px', '14px', '16px', '18px', '20px']"
              >{{ $t('ivan') }}</CText
            >
          </CBox>
          <CBox ml="42px" display="flex" align-items="center">
            <CIcon
              :size="['11px', '13px', '15px', '17px', '19px', '24px']"
              name="watch"
              fill="transparent"
            />
            <CText
              ml="7px"
              color="color.WarningColor1"
              :font-size="['8px', '10px', '12px', '13px', '15px', '16px']"
              font-family="Yandex Sans Display"
              font-weight="400"
              :line-height="['10px', '12px', '14px', '16px', '18px', '20px']"
              >02.01.2022</CText
            >
          </CBox>
        </CBox>
        <blog-disc-img-banner image-path="1.png" />
        <blog-disc-text-component
          text=" Отчет охватывает все iPhone, проданные в период с апреля по июнь. Частью
      исследования стал опрос 500 клиентов Apple, которые приобрели продукт
      Apple в апреле-июне. Сюда входят iPhone, iPad, компьютер Mac или Apple
      Watch. По мере ослабления ограничений, связанных с пандемией, потребители
      стали покупать более дорогие iPhone. Это привело к удвоению продаж в
      интернет-магазинах Apple. Согласно опросу, iPhone 12 Pro Max и iPhone 11
      были самыми продаваемыми моделями, на долю которых пришлось 23% iPhone,
      купленных респондентами. На все четыре модели iPhone 12 приходилось 63
      процента всех iPhone. Самыми продаваемыми моделями квартала стали iPhone
      12 mini и iPhone XR. Их торговая доля составляла всего 5 процентов."
        />
        <blog-disc-img-banner image-path="2.png" />
        <blog-disc-text-component
          text=" Отчет охватывает все iPhone, проданные в период с апреля по июнь. Частью
      исследования стал опрос 500 клиентов Apple, которые приобрели продукт
      Apple в апреле-июне. Сюда входят iPhone, iPad, компьютер Mac или Apple
      Watch. По мере ослабления ограничений, связанных с пандемией, потребители
      стали покупать более дорогие iPhone. Это привело к удвоению продаж в
      интернет-магазинах Apple. Согласно опросу, iPhone 12 Pro Max и iPhone 11
      были самыми продаваемыми моделями, на долю которых пришлось 23% iPhone,
      купленных респондентами. На все четыре модели iPhone 12 приходилось 63
      процента всех iPhone. Самыми продаваемыми моделями квартала стали iPhone
      12 mini и iPhone XR. Их торговая доля составляла всего 5 процентов."
        />
      </CBox>
    </CBox>
  </CThemeProvider>
</template>

<style></style>
