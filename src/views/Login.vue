<template>
  <div class="main__home bg-gradient-primary">
    <div class="main__home-banner">
      <div class="main__home-banner__title white--text">
        Welcome to a revolutionary step in advertising your brand
      </div>
    </div>
    <div class="main__home-form">
      <template v-if="isForm === 'Login'">
        <div class="main__form">
          <div class="main__form-head">
            <div class="main__form-title">
              <span>Login</span>
            </div>
          </div>
          <div class="main__form-body">
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                v-model="form.email"
                :rules="[emailRules.required, emailRules.format]"
                label="E-mail"
                append-icon="mdi-email"
                outlined
                required
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required, passwordRules.min]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                outlined
                @click:append="showPassword = !showPassword"
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                large
                block
                :loading="loading"
                @click="handleSubmit"
              >
                Sign In
              </v-btn>

              <div class="main__form-addtional">
                <div class="main__form-additional__item">
                  <a href="#" @click="isForm = 'ForgotPassword'"
                    >Forgot your password ?</a
                  >
                </div>
                <div class="main__form-additional__item">
                  <span
                    >Don't have an account?
                    <router-link to="/register">Register Now</router-link></span
                  >
                </div>
              </div>
            </v-form>
          </div>
        </div>
      </template>
      <template v-else-if="isForm === 'ForgotPassword'">
        <div class="main__form">
          <div class="main__form-head">
            <div class="main__form-title">
              <span>Forgot Password</span>
            </div>
          </div>
          <div class="main__form-body">
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                v-model="form.email"
                :rules="[emailRules.format]"
                label="E-mail"
                append-icon="mdi-email"
                outlined
              ></v-text-field>

              <v-btn
                color="success"
                class="mr-4"
                large
                block
                @click="sendPasswordReset"
              >
                Send Password Reset Link
              </v-btn>
              <div class="main__form-addtional">
                <div class="main__form-additional__item">
                  <a href="#" @click="isForm = 'Login'">Back to Login</a>
                </div>
              </div>
            </v-form>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    isForm: "ForgotPassword",
    valid: true,
    showPassword: false,
    form: {
      email: "alvinharis08@gmail.com",
      password: "asdasdasd",
    },
    email: "",
    password: "",
    emailRules: {
      required: (v) => !!v || "E-mail is required",
      format: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
    passwordRules: {
      required: (value) => !!value || "Password is required",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    lazy: true,
  }),
  computed: {
    ...mapState({
      loading: (state) => state.authentication.loading,
    }),
  },
  mounted() {
    this.isForm = "Login";
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
    },
    async handleSubmit() {
      const form = {
        email: this.form.email,
        password: this.form.password,
      };
      const response = await this.$store.dispatch("postAuthentication", form);
      if (response) {
        const notify = {
          isNotify: true,
          message: "Login Success",
          status: "SUCCESS",
        };

        this.$store.dispatch("queryNotify", notify);

        this.$router.push({ path: "/" });
      } else {
        const notify = {
          isNotify: true,
          message: "Incorrect Email / Password, Please Try Again ",
          status: "ERROR",
        };

        this.$store.dispatch("queryNotify", notify);
      }
    },
    sendPasswordReset() {
      console.log("reset pass");
    },
  },
};
</script>

<style></style>
