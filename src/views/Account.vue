<template>
  <div class="main__register">
    <div class="main__form">
      <div class="main__form-head">
        <div class="main__form-title">
          <span>My Account</span>
        </div>

        <v-tabs color="#472F83">
          <v-tab @click="registerType = 'Personal'">Personal</v-tab>
        </v-tabs>
      </div>
      <div class="main__form-body">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row align="center" justify="center">
            <v-card class="main__form-profile">
              <v-img
                :src="`https://picsum.photos/500/300?image=1`"
                :lazy-src="`https://picsum.photos/10/6?image=1`"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                large
                block
                @click="validate"
              >
                Change Photo Profile
              </v-btn>
            </v-card>
          </v-row>
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
                v-model="form.password"
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
              <v-select
                v-model="form.nationality"
                :items="nationalities"
                :rules="[(v) => !!v || 'Item is required']"
                label="Nationality"
                append-icon="mdi-flag"
                outlined
                required
              ></v-select>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="form.npwp"
                :rules="npwpRules"
                label="NPWP"
                append-icon="mdi-card-account-details"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6" v-if="registerType === 'Personal'">
              <v-menu
                ref="menu"
                v-model="menuDate"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="form.bod"
                    label="Date of Birth"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    append-icon="mdi-calendar"
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="form.bod"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6" v-if="registerType === 'Personal'">
              <v-text-field
                v-model="form.idCard"
                :rules="idCardRules"
                label="ID Card"
                append-icon="mdi-card-account-details"
                outlined
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" v-if="registerType === 'Company'">
              <v-textarea
                v-model="form.address"
                :rules="addressRules"
                label="Address"
                append-icon="mdi-map-marker"
                rows="1"
                outlined
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row class="px-15">
            <v-col cols="6">
              <v-btn
                :disabled="!valid"
                color="info"
                class="mr-4"
                large
                block
                @click="validate"
              >
                Cancel
              </v-btn>
            </v-col>
            <v-col cols="6">
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
  },
};
</script>
