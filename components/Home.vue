<script lang="js">
import DescriptionComponent from "@/my-components/description/DescriptionComponent.vue";
import NewBlog from "@/my-components/newBlog/NewBlog.vue";
import BannerComponent from "@/my-components/bannerImgBox/BannerComponent.vue";
import PopularProducts from "~/my-components/popular-products/popularProducts.vue";
import CategoriesComponent from "~/my-components/categories-component/categoriesComponent.vue";
import BrandsComponent from "~/my-components/brands-component/brandsComponent.vue";
import SliderComponent from "~/my-components/banner/SliderComponent.vue";
import Mixins from "@/mixins/aos"
export default {

name:"IndexComponent",

components: {
    PopularProducts,
    DescriptionComponent,
    NewBlog,
    BannerComponent,
    CategoriesComponent,
    BrandsComponent,
    SliderComponent,
},
  mixins: [Mixins],


data(){
  return{
    columns:['3', '3', '3', '4', '4', '5']
  }
},
}
</script>

<template>
  <div>
    <no-ssr>
      <SliderComponent data-aos="zoom-in" data-aos-duration="1000" />
    </no-ssr>
    <div>
      <no-ssr>
        <PopularProducts
          data-aos="fade-up"
          :products="$store.state.productsList"
          :title="$t('populargoods')"
          :columns="columns"
        />
      </no-ssr>
    </div>
    <no-ssr>
      <CategoriesComponent data-aos="fade-up" data-aos-duration="1000" />
    </no-ssr>
    <no-ssr>
      <BrandsComponent data-aos="zoom-in-up" data-aos-duration="1000" />
    </no-ssr>
    <no-ssr>
      <BannerComponent data-aos="zoom-in-down" data-aos-duration="1000" />
    </no-ssr>
    <no-ssr>
      <PopularProducts
        :columns="columns"
        data-aos="fade-up"
        :title="$t('populargoods')"
        data-aos-duration="1000"
      />
    </no-ssr>
    <no-ssr>
      <DescriptionComponent data-aos="fade-up" data-aos-duration="1000" />
    </no-ssr>
    <no-ssr>
      <NewBlog data-aos="fade-up" data-aos-duration="1000" />
    </no-ssr>
  </div>
</template>
