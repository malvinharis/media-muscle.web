<template>
  <nuxt-link :to="to">
    <el-menu-item :index="index" class="nav__list-item">
      <span>{{ title }}</span>
    </el-menu-item>
  </nuxt-link>
</template>

<script>
export default {
  components: {},
  props: {
    index: String,
    to: String,
    title: String,
    subject: String
  },
  methods: {}
};
</script>
