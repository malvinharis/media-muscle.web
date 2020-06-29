<template>
  <div class="main__register">
    <div class="main__form">
      <div class="main__form-head">
        <div class="main__form-title">
          <span>Register</span>
        </div>
        <v-tabs color="#472F83">
          <v-tab @click="registerType = 'Personal'">Personal</v-tab>
          <v-tab @click="registerType = 'Company'">Company</v-tab>
        </v-tabs>
      </div>
      <div class="main__form-body">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row>
            <v-col cols=6>
              <v-text-field
                v-model="form.name"
                :rules="nameRules"
                label="Name"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols=6>
              <v-text-field
                v-model="form.phone"
                :rules="phoneRules"
                label="Phone Number"
                outlined
                required
              ></v-text-field>
            </v-col>


            <v-col cols="6">
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

            <v-col cols=6>
              <v-text-field
                v-model="email"
                :rules="[emailRules.required, emailRules.format]"
                label="E-mail"
                outlined
                required
              ></v-text-field>
            </v-col>

            <v-col cols=6>
              <v-select
                v-model="form.nationality"
                :items="nationalities"
                :rules="[(v) => !!v || 'Item is required']"
                label="Nationality"
                outlined
                required
              ></v-select>
            </v-col>

            <v-col cols=6>
              <v-text-field
                v-model="form.npwp"
                :rules="npwpRules"
                label="NPWP"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols=6 v-if="registerType === 'Personal'">
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
            <v-col cols=6 v-if="registerType === 'Personal'">
              <v-text-field
                v-model="form.idCard"
                :rules="idCardRules"
                label="ID Card"
                outlined
                required
              ></v-text-field>
            </v-col>


            <v-col cols=6 v-if="registerType === 'Company'">
              <v-textarea
                v-model="form.address"
                :rules="addressRules"
                label="Address"
                rows="1"
                outlined
                required
              ></v-textarea>
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
            Sign Up
          </v-btn>
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
    nationalities: ["Jakarta", "Bandung", "Surabaya"],
  }),
  mounted() {
    this.registerType = "Personal"
  },
  watch: {
      menuDate (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
  },
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
    save (date) {
      this.$refs.menu.save(date)
    },
  },
};
</script>
