<template>
  <div>
    <svg>
      <clipPath id="star__" clipPathUnits="objectBoundingBox">
        <path
          d="M0.45,0.059 C0.47,0.009,0.539,0.009,0.558,0.059 L0.651,0.301 C0.659,0.323,0.679,0.338,0.701,0.339 L0.95,0.357 C1,0.361,1,0.429,0.983,0.464 L0.792,0.631 C0.775,0.646,0.767,0.67,0.773,0.693 L0.834,0.945 C0.846,0.999,0.791,1,0.746,1 L0.535,0.873 C0.516,0.861,0.492,0.861,0.473,0.873 L0.262,1 C0.218,1,0.162,0.999,0.175,0.945 L0.236,0.693 C0.241,0.67,0.234,0.646,0.217,0.631 L0.025,0.464 C-0.015,0.429,0.006,0.361,0.059,0.357 L0.307,0.339 C0.33,0.338,0.349,0.323,0.357,0.301 L0.45,0.059"
        ></path>
      </clipPath>
    </svg>
    <div class="star">
      <div class="overlay" :style="{ height: rating * 20 + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleStarRating',
  props: ['rating'],
}
</script>

<style lang="scss" scoped>
svg {
  position: absolute;
  width: 0;
  height: 0;
}
.star {
  position: relative;
  width: 27px;
  height: 27px;
  background-color: #e3e5e5;
  clip-path: url(#star__);
  @media screen and(max-width: 1024px) {
    width: 24px;
    height: 24px;
  }
  @media screen and(max-width: 912px) {
    width: 21px;
    height: 21px;
  }
  @media screen and(max-width: 768px) {
    width: 18px;
    height: 18px;
  }
  @media screen and(max-width: 425px) {
    width: 15px;
    height: 15px;
  }
  @media screen and(max-width: 375px) {
    width: 13px;
    height: 13px;
  }
}
.overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 30%;
  background-color: #f8d34f;
}
</style>
