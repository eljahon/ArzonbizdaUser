<script lang="js">
import SliderComponent from "@/my-components/banner/SliderComponent.vue";
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
    SliderComponent,
    DescriptionComponent,
NewBlog,
BannerComponent,
CategoriesComponent,BrandsComponent
},
}
</script>

<template>
  <div>
    <SliderComponent />
    <PopularProducts />
    <CategoriesComponent />
    <BannerComponent />
    <BrandsComponent />
    <BannerComponent />
    <PopularProducts />
    <DescriptionComponent />
    <NewBlog />
  </div>
</template>
