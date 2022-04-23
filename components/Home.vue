<template>
  <div>
    <SliderComponent />
    <PopularProducts />
    <CategoriesComponent />
    <BrandsComponent />
  </div>
</template>

<script lang="js">
import SliderComponent from "@/my-components/banner/SliderComponent.vue";
import CategoriesComponent from "@/my-components/categories-component/categoriesComponent.vue";
import BrandsComponent from "@/my-components/brands-component/brandsComponent.vue";
import PopularProducts from "@/my-components/popular-products/popularProducts.vue";

export default {

name:"IndexComponent",
components: {
    SliderComponent,
    CategoriesComponent,
    BrandsComponent,
    PopularProducts
},
}
</script>
