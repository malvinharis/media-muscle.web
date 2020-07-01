<template>
  <div class="main__home bg-gradient-primary">
    <div class="main__home-banner">
      <div class="main__home-banner__title white--text">
        Welcome
        to a revolutionary
        step in advertising your brand
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
            <v-form
              ref="form"
              v-model="valid"
              :lazy-validation="lazy"
            >
              <v-text-field
                v-model="email"
                :rules="[emailRules.required,emailRules.format]"
                label="E-mail"
                append-icon="mdi-email"
                outlined
                required
              ></v-text-field>

              <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passwordRules.required, passwordRules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              outlined
              @click:append="show1 = !show1"
            ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                large
                block
                @click="validate"
              >
                Sign In
              </v-btn>

              <div class="main__form-addtional">
                <div class="main__form-additional__item"><a href="#" @click="isForm = 'ForgotPassword'">Forgot your password ?</a>
                </div>
                <div class="main__form-additional__item">
                  <span>Don't have an account? <router-link to="/register">Register Now</router-link></span>
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
            <v-form
              ref="form"
              v-model="valid"
              :lazy-validation="lazy"
            >
              <v-text-field
                v-model="email"
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
                <div class="main__form-additional__item"><a href="#" @click="isForm = 'Login'">Back to Login</a>
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
  export default {
    data: () => ({
      isForm: 'ForgotPassword',
      valid: true,
      email: '',
      emailRules: {
        required: v => !!v || 'E-mail is required',
        format: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      },
      password: '',
      passwordRules: {
          required: value => !!value || 'Password is required',
          min: v => v.length >= 8 || 'Min 8 characters'
      },
      lazy: true,
    }),
    mounted(){
      this.isForm = 'Login'
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style>

</style>
