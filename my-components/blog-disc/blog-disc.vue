<script>
import AndPageDescription from '../andPageDescription/andPageDescription.vue'
import blogDiscComponent from './blog-disc-component.vue'
export default {
  components: { blogDiscComponent, AndPageDescription },
}
</script>
<template>
  <div>
    <blog-disc-component />
    <and-page-description
      description-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa duis hac
        tellus nunc, neque fermentum netus magna. Turpis volutpat neque, odio
        mollis sit justo, blandit. Faucibus luctus odio aliquet ultrices. Mauris
        elit a vitae viverra id. Mattis neque, urna ultrices enim massa diam
        lacus. Aliquam ridiculus nibh etiam nunc. Vestibulum nisl et enim ut
        fames in justo, diam. Ultrices quisque proin vivamus nisl, malesuada
        aliquam molestie. Tempor cursus in convallis ac nisl. Scelerisque netus
        morbi quam eget posuere. Quis nascetur est turpis nunc. Quis massa, mi
        rutrum varius. Sed mattis sollicitudin commodo semper egestas. Ante
        tellus dignissim consectetur eu, senectus maecenas. Vel vulputate velit
        proin nam pulvinar. Volutpat, consequat cursus nisl nunc. Felis aliquam
        in eu convallis. Nulla dui eu diam feugiat mollis tellus."
    />
  </div>
</template>

<style></style>
