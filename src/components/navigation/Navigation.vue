[<template>
  <div class="nav">
    <div class="nav__brand">
      <router-link :to="'/'">
        <img src="../../assets/logo.png" alt="" />
      </router-link>
    </div>
    <div class="nav__menu-list">
      <template v-if="!authentication.isAuthenticated">
        <div
          class="nav__menu-item"
          v-for="(item, index) in navigations"
          :key="index"
        >
          <router-link :to="item.to" class="nav__menu-button">
            <v-btn tile color="#8F53A1">
              <v-icon dark left small>mdi-{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </router-link>
        </div>
      </template>
      <template v-else>
        <div
          class="nav__menu-item"
          v-for="(item, index) in authNavigations"
          :key="index"
        >
          <router-link :to="item.to" class="nav__menu-button">
            <v-btn tile color="#8F53A1">
              <v-icon dark left small>mdi-{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </router-link>
        </div>
      </template>
    </div>
    <!-- <el-menu
      default-active="1"
      mode="horizontal"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in navigations">
        <NavigationItem
          v-if="item.type === 'item'"
          :key="index"
          :index="`nav-${index}`"
          :title="item.title"
          :to="item.to"
          :subject="item.subject"
        />
        <NavigationList
          v-else
          :key="index"
          :index="`nav-${index}`"
          :title="item.title"
          :children="item.children"
        />
      </template>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://blog.cakramotor11.com/"
      >
        <el-menu-item class="nav__list-item">
          <span>Blog</span>
        </el-menu-item>
      </a>
    </el-menu> -->
  </div>
</template>

<script>
// import NavigationItem from "./NavigationItem";
// import NavigationList from "./NavigationList";
import { mapState } from "vuex";

export default {
  // components: {
  //   NavigationItem,
  //   NavigationList
  // },
  data: () => ({
    navigations: [
      {
        type: "item",
        subject: "Login",
        title: "Login",
        icon: "login",
        to: "/login",
      },
      {
        type: "item",
        subject: "Register",
        title: "Register",
        icon: "account-plus",
        to: "/register",
      },
      {
        type: "item",
        subject: "Help",
        title: "Need Help",
        icon: "help",
        to: "/help",
      },
    ],
    authNavigations: [
      {
        type: "item",
        subject: "Cart",
        title: "Cart",
        icon: "cart",
        to: "/cart",
      },
      {
        type: "item",
        subject: "History",
        title: "History",
        icon: "history",
        to: "/history",
      },
      {
        type: "item",
        subject: "Help",
        title: "Need Help",
        icon: "help",
        to: "/help",
      },
      {
        type: "item",
        subject: "Account",
        title: "Account",
        icon: "account",
        to: "/account",
      },
    ],
  }),
  computed: {
    ...mapState({
      authentication: (state) => state.authentication,
    }),
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
