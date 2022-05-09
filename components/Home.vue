<script lang="js">
import DescriptionComponent from "@/my-components/description/DescriptionComponent.vue";
import NewBlog from "@/my-components/newBlog/NewBlog.vue";
import BannerComponent from "@/my-components/bannerImgBox/BannerComponent.vue";
import PopularProducts from "~/my-components/popular-products/popularProducts.vue";
import CategoriesComponent from "~/my-components/categories-component/categoriesComponent.vue";
import BrandsComponent from "~/my-components/brands-component/brandsComponent.vue";


export default {

name:"IndexComponent",
components: {
    PopularProducts,
    DescriptionComponent,
    NewBlog,
    BannerComponent,
    CategoriesComponent,
    BrandsComponent,
},
  props: ['products'],
  // async asyncData({ $axios }) {
  //   const data  = await $axios.get("/product/home");
  //   console.log(data.data)
  //   return {data:data.data.data.products};
  // },
}
</script>

<template>
  <div>
<!--    <SliderComponent />-->
    <PopularProducts :products='products'/>
    <CategoriesComponent />
    <BannerComponent />
    <BrandsComponent />
    <BannerComponent />
    <PopularProducts />
    <DescriptionComponent />
    <NewBlog />
  </div>
</template>
