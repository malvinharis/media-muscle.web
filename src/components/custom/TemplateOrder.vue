<template>
  <div class="main__order">
    <div class="main__form">
      <div class="main__form-body">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-stepper v-model="stepper">
            <v-stepper-header>
              <v-stepper-step color="#472F83" :complete="stepper > 1" step="1">Pick a Date</v-stepper-step>

              <v-stepper-step color="#472F83" :complete="stepper > 2" step="2">Name of step 2</v-stepper-step>

              <v-stepper-step color="#472F83" step="3">Name of step 3</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-date-picker color="#472F83" v-model="form.date" :min="new Date().toISOString().substr(0, 10)"></v-date-picker>

                <v-btn
                  color="primary"
                  @click="stepper = 2"
                >
                  Continue
                </v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn
                  color="primary"
                  @click="stepper = 3"
                >
                  Continue
                </v-btn>

                <v-btn text @click="stepper = 1">Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn
                  color="primary"
                  @click="stepper = 1"
                >
                  Continue
                </v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    stepper: 1,
    form: {
      password: "",
      date: new Date().toISOString().substr(0, 10),
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
