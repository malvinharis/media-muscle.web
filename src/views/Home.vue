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
      <div class="main__home-category__item" v-for="(item, idx) in categories" :key="idx"
      @click="goToOrder(item)">
        <div class="main__home-category__item-image">
          <img :src="item.image" alt="">
        </div>
        <span class="main__home-category__item-title">
          {{item.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    slides: [`A Hassel-free ways to advertise in various media`, `A Hassel-free ways to advertise in various media`],
    categories: [
      {
        title: 'Television',
        image: require('../assets/television.jpg')
      },
      {
        title: 'Radio',
        image: require('../assets/radio.jpg')
      },
      {
        title: 'Newspaper',
        image: require('../assets/newspaper.jpg')
      },
      {
        title: 'Out of Home',
        image: require('../assets/billboard.jpg')
      }
    ]
  }),
  methods:{
    goToOrder(item){
      this.$router.push({ name: "order" ,params: {type: item.title, data: item}});
    }
  }
}
</script>

<style>

</style>
