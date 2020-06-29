<template>
  <div class="main__forgot-password">
    <div class="main__form">
      <div class="main__form-head">
        <div class="main__form-title">
          <span>Forgot Password</span>
        </div>
      </div>
      <div class="main__form-body">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required, passwordRules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="New Password"
                hint="At least 8 characters"
                counter
                outlined
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>


            <v-col cols="6">
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required, passwordRules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Confirm Password"
                hint="At least 8 characters"
                counter
                outlined
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>

          </v-row>

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
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    form: {
      password: "",
    },
    passwordRules: {
      required: (value) => !!value || "Password is required",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    lazy: true
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
