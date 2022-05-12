<script lang="js">
import DescriptionComponent from "@/my-components/description/DescriptionComponent.vue";
import NewBlog from "@/my-components/newBlog/NewBlog.vue";
import BannerComponent from "@/my-components/bannerImgBox/BannerComponent.vue";
import PopularProducts from "~/my-components/popular-products/popularProducts.vue";
import CategoriesComponent from "~/my-components/categories-component/categoriesComponent.vue";
import BrandsComponent from "~/my-components/brands-component/brandsComponent.vue";
import SliderComponent from "~/my-components/banner/SliderComponent.vue";


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
  props: ['products'],
}
</script>

<template>
  <div>
    <SliderComponent />
    <PopularProducts :products="products" />
    <CategoriesComponent />
    <BrandsComponent />
    <BannerComponent />
    <PopularProducts />
    <DescriptionComponent />
    <NewBlog />
  </div>
</template>
