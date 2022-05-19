<script lang="js">
import DescriptionComponent from "@/my-components/description/DescriptionComponent.vue";
import NewBlog from "@/my-components/newBlog/NewBlog.vue";
import BannerComponent from "@/my-components/bannerImgBox/BannerComponent.vue";
import PopularProducts from "~/my-components/popular-products/popularProducts.vue";
import CategoriesComponent from "~/my-components/categories-component/categoriesComponent.vue";
import BrandsComponent from "~/my-components/brands-component/brandsComponent.vue";
import SliderComponent from "~/my-components/banner/SliderComponent.vue";

import aos from "@/helpers/aos"

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {

name:"IndexComponent",

components: {
    PopularProducts,
    DescriptionComponent,
    NewBlog,
    BannerComponent,
    CategoriesComponent,
    BrandsComponent,
    SliderComponent
},
  mixins: [
    {
      methods: {
        aos,
      },
    },
  ],

  props: ['products'],

  mounted() {
    AOS.init({ })
  },
}
</script>

<template>
  <div>
    <SliderComponent data-aos="zoom-in" data-aos-duration="1000" />
    <div>
      <PopularProducts
        data-aos="fade-up"
        :products="products"
        title="Популярные товары"
      />
    </div>
    <CategoriesComponent data-aos="fade-up" data-aos-duration="1000" />
    <BrandsComponent data-aos="zoom-in-up" data-aos-duration="1000" />
    <BannerComponent data-aos="zoom-in-down" data-aos-duration="1000" />
    <PopularProducts
      data-aos="fade-up"
      title="Популярные товары"
      data-aos-duration="1000"
    />
    <DescriptionComponent data-aos="fade-up" data-aos-duration="1000" />
    <NewBlog data-aos="fade-up" data-aos-duration="1000" />
  </div>
</template>
