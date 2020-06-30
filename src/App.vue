<template>
  <v-app>
    <transition
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      mode="out-in"
    >
        <router-view style="animation-duration: .5s" />
    </transition>
  </v-app>
</template>

<style lang="scss"></style>
