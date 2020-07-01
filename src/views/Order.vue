<template>
  <div class="main__home">
    <div class="main__home-banner">
      <div class="main__home-category__item-image">
        <img :src="this.$route.params.data.image" alt="">
      </div>
      <span class="main__home-category__item-title">
        {{ this.$route.params.data.title }}
      </span>
    </div>
    <TemplateOrder />
  </div>
</template>

<script>
import { TemplateOrder } from '@/components'
export default {
  components: { TemplateOrder },
  data: () => ({
    slides: [`A Hassel-free ways to advertise in various media`, `A Hassel-free ways to advertise in various media`],
  }),
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style>

</style>
