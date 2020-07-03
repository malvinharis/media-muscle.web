<template>
  <div class="main__home">
    <div class="main__home-banner">
      <div class="main__home-category__item-image">
        <img :src="this.$route.params.data.image" alt="" />
      </div>
      <span class="main__home-category__item-title">
        {{ this.$route.params.data.title }}
      </span>
    </div>
    <template v-if="!isDone">
      <TemplateOrder @progress-done="handleDone" />
    </template>
    <template v-else>
      <div class="main__order-finish">
        <div class="main__order-finish__head">
          <v-icon color="success">mdi-checkbox-marked-circle-outline</v-icon>
        </div>
        <div class="main__order-finish__body">
          <span>
            You just added 1 item to your cart
          </span>
          <v-btn class="block" color="success" @click="goToCart">
            Go to Cart
          </v-btn>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { TemplateOrder } from "@/components";
export default {
  components: { TemplateOrder },
  data: () => ({
    slides: [
      `A Hassel-free ways to advertise in various media`,
      `A Hassel-free ways to advertise in various media`,
    ],
    isDone: false,
  }),
  mounted() {
    console.log(this.$route);
  },
  methods: {
    handleDone(e) {
      this.isDone = e;
    },
    goToCart() {
      this.$router.push({ path: "/cart" });
    },
  },
};
</script>

<style></style>
