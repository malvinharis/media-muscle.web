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
import TemplateMessage from "../custom/TemplateMessage"
import Navigation from "../navigation/Navigation";

export default {
  components: {
    Navigation,
    TemplateMessage
  }
};
</script>
