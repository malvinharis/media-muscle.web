<template>
  <transition
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
    mode="out-in"
  >
    <v-app>
      <router-view style="animation-duration: .5s" />
    </v-app>
  </transition>
</template>

<style lang="scss"></style>
