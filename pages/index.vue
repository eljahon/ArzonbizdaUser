<template>
  <div>
    <HeaderButton />
    <HeaderInput />
    <LangButton />
  </div>
</template>

<script lang="js">
import "@/assets/main.scss"
import HeaderButton from "~/library/HeaderButton.vue"
import HeaderInput from "~/library/HeaderInput.vue"
import LangButton from "~/library/LangButton.vue"
export default {

name:"IndexComponent",
components: {
    HeaderButton,
    HeaderInput,
    LangButton
},
}
</script>
