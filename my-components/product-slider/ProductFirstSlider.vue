<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'ProductFirstSlider',

  components: {
    Hooper,
    Slide,
  },
}
</script>

<template>
  <div>
    <hooper
      group="group1"
      style="height: 583px; width: 705px"
      :items-to-show="1"
      :center-mode="true"
      :infinite-scroll="true"
    >
      <slide>
        <img class="slider__hero" src="~/assets/img/poco-phone.png" />
      </slide>

      <slide>
        <img class="slider__hero" src="~/assets/img/poco-phone.png" />
      </slide>

      <slide>
        <img class="slider__hero" src="~/assets/img/poco-phone.png" />
      </slide>

      <slide>
        <img class="slider__hero" src="~/assets/img/poco-phone.png" />
      </slide>

      <slide>
        <img class="slider__hero" src="~/assets/img/poco-phone.png" />
      </slide>
    </hooper>

    <hooper group="group1" :items-to-show="3" :center-mode="false">
      <slide style="height: 100px; width: 100px">
        <img src="~/assets/img/poco-phone.png" />
      </slide>

      <slide style="height: 100px; width: 100px">
        <img src="~/assets/img/poco-phone.png" />
      </slide>

      <slide style="height: 100px; width: 100px">
        <img src="~/assets/img/poco-phone.png" />
      </slide>

      <slide style="height: 100px; width: 100px">
        <img src="~/assets/img/poco-phone.png" />
      </slide>

      <slide style="height: 100px; width: 100px">
        <img src="~/assets/img/poco-phone.png" />
      </slide>

      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<style lang="scss" scoped>
.slider__hero {
  max-width: 443px;
  max-height: 469px;
  margin: 57px 0 0 131px;
}
.hooper-list {
  .hooper-slide {
    background: #f4f4f4;
    border-radius: 12px;
  }

  // img {
  //   width: 81px;
  //   height: 81px;
  //   margin: 0 auto;
  // }
}
</style>
