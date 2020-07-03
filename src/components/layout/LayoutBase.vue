<template>
  <div class="viewport" id="app">
    <Navigation />
    <main class="main">
      <div class="main__wrapper">
        <div class="main__body">
          <TemplateMessage />
          <transition
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
            mode="out-in"
          >
            <router-view style="animation-duration: .5s" />
          </transition>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TemplateMessage from "../custom/TemplateMessage";
import Navigation from "../navigation/Navigation";
import JwtService from "@/plugins/utils/services/jwt.service";

export default {
  components: {
    Navigation,
    TemplateMessage,
  },
  async created() {
    const token = JwtService.getToken();
    if (token) {
      await this.$store.dispatch("initToken");
      this.isCheckToken = false;
      this.isLoading = false;
    } else {
      this.$router.push({ name: "login" });
    }
    // console.log('Parent')
    // console.log(init)
  },
};
</script>
