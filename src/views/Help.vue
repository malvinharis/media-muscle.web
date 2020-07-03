<template>
  <div class="main__register">
    <div class="main__form">
      <div class="main__form-head">
        <div class="main__form-title">
          <span>Have Some Question?</span>
        </div>
      </div>
      <div class="main__form-body">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="form.name"
                :rules="nameRules"
                label="Name"
                append-icon="mdi-account"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.phone"
                :rules="phoneRules"
                label="Phone Number"
                append-icon="mdi-phone"
                outlined
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="email"
                :rules="[emailRules.required, emailRules.format]"
                label="E-mail"
                append-icon="mdi-email"
                outlined
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-textarea
                v-model="form.address"
                :rules="addressRules"
                label="Description"
                append-icon="mdi-lead-pencil"
                rows="1"
                outlined
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                large
                block
                @click="validate"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    registerType: "Personal",
    valid: true,
    menuDate: false,
    form: {
      name: "",
      phone: "",
      nationality: "",
      dob: "", //Personal
      dobFormat: "",
      address: "", //Company
      idCard: "", //
      npwp: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    emailRules: {
      required: (v) => !!v || "E-mail is required",
      format: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
    passwordRules: {
      required: (value) => !!value || "Password is required",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    lazy: true,
    nationalities: ["Indonesia", "Germany", "England"],
  }),
  mounted() {
    this.registerType = "Personal";
  },
  watch: {
    menuDate(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();

      const notify = {
        isNotify: true,
        message: "Register Success",
        status: "SUCCESS",
      };

      this.$store.dispatch("queryNotify", notify);

      console.log(notify);

      this.$router.push({ path: "/Login" });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
