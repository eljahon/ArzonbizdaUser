<template>
  <div>
    <SliderComponent />
    <DescriptionComponent />
    <NewBlog />
    <BannerComponent />
    <TabsComponents />
  </div>
</template>

<script lang="js">
import SliderComponent from "@/my-components/banner/SliderComponent.vue";
import DescriptionComponent from "@/my-components/description/DescriptionComponent.vue";
import NewBlog from "@/my-components/newBlog/NewBlog.vue";
import BannerComponent from "@/my-components/bannerImgBox/BannerComponent.vue";
import TabsComponents from "@/my-components/productPageTab/Tab/TabsComponents.vue";


export default {

name:"IndexComponent",
components: {
    SliderComponent,
    DescriptionComponent,
    NewBlog,
    BannerComponent,TabsComponents
},
}
</script>
