<template>
  <v-snackbar
    v-model="notifys.isNotify"
    :timeout="timeout"
    :color="colorNotify(notifys.status)"
    top
  >
    {{ notifys.message }}
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      notifys: (state) => state.notify.notifys,
    }),
  },
  data: () => ({
    timeout: 5000,
    isOpen: true,
  }),
  mounted() {},
  methods: {
    colorNotify(status) {
      if (status === "SUCCESS") {
        return "success";
      } else if (status === "ERROR") {
        return "error";
      } else {
        return "";
      }
    },
  },
};
</script>

<style></style>
