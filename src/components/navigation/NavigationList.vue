<template>
  <el-submenu :index="index" class="nav__list-item">
    <template slot="title" class="nav__list-item">
      <span>{{ title }}</span>
    </template>
    <NavigationItem
      v-for="(item, i) in children"
      :key="i"
      :index="`${index}-${i}`"
      :title="item.title"
      :to="item.to"
      :subject="item.subject"
    />
  </el-submenu>
</template>

<script>
import NavigationItem from "./NavigationItem";

export default {
  components: { NavigationItem },
  props: {
    index: String,
    to: String,
    title: String,
    children: Array
  },
  methods: {}
};
</script>
