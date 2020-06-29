<template>
  <div class="main__home">
    <div class="main__home-banner">
      <v-carousel
          cycle
          hide-delimiter-background
          hide-arrows-on-hover
          :show-arrows="false"
          :light="true"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
          <div class="main__home-banner__title">{{ slide }}</div>
          </v-carousel-item>
        </v-carousel>
    </div>
    <div class="main__home-category">
      <div class="main__home-category__item">
        <div class="main__home-category__item-image">
          <img src="../assets/television.jpg" alt="">
        </div>
        <span class="main__home-category__item-title">
          Television
        </span>
      </div>
      <div class="main__home-category__item">
        <div class="main__home-category__item-image">
          <img src="../assets/radio.jpg" alt="">
        </div>
        <span class="main__home-category__item-title">
          Radio
        </span>
      </div>
      <div class="main__home-category__item">
        <div class="main__home-category__item-image">
          <img src="../assets/newspaper.jpg" alt="">
        </div>
        <span class="main__home-category__item-title">
          Newspaper
        </span>
      </div>
      <div class="main__home-category__item">
        <div class="main__home-category__item-image">
          <img src="../assets/billboard.jpg" alt="">
        </div>
        <span class="main__home-category__item-title">
          Out of Home
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    slides: [`A Hassel-free ways to advertise in various media`, `A Hassel-free ways to advertise in various media`],
  })
}
</script>

<style>

</style>
