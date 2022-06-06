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

  props: {
    blog: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    // console.log(this.blog)
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
          >{{ blog.title }}
        </CText>
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
              >{{ blog.firstName }}</CText
            >
            <CText
              ml="5px"
              color="color.WarningColor1"
              :font-size="['8px', '10px', '12px', '13px', '15px', '16px']"
              font-family="Yandex Sans Display"
              font-weight="400"
              :line-height="['10px', '12px', '14px', '16px', '18px', '20px']"
              >{{ blog.lastName }}</CText
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
              >{{ blog.time }}</CText
            >
          </CBox>
        </CBox>
        <blog-disc-img-banner :blog="blog" />
        <blog-disc-text-component :blog="blog" />
      </CBox>
    </CBox>
  </CThemeProvider>
</template>

<style></style>
