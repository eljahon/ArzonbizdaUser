<template>
  <div>
    <SliderComponent />
    <DescriptionComponent />
    <NewBlog />
  </div>
</template>

<script lang="js">
// import SliderComponent from "@/my-components/banner/SliderComponent.vue";
import DescriptionComponent from "@/my-components/description/DescriptionComponent.vue";
import NewBlog from "@/my-components/newBlog/NewBlog.vue";


export default {

name:"IndexComponent",
components: {
    // SliderComponent,
    DescriptionComponent,
    NewBlog
},
}
</script>
