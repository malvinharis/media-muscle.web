<template>
  <div class="main__order">
    <div class="main__form">
      <div class="main__form-body">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-stepper v-model="stepper">
            <v-stepper-header>
              <v-stepper-step color="#472F83" :complete="stepper > 1" step="1"
                >Region</v-stepper-step
              >

              <v-stepper-step color="#472F83" :complete="stepper > 2" step="2"
                >City</v-stepper-step
              >

              <v-stepper-step color="#472F83" :complete="stepper > 3" step="3"
                >Broadcast</v-stepper-step
              >

              <v-stepper-step color="#472F83" :complete="stepper > 4" step="4"
                >Date
              </v-stepper-step>

              <v-stepper-step color="#472F83" :complete="stepper > 5" step="5"
                >Additional Info</v-stepper-step
              >
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="form__head">
                  <div class="form__head-title">
                    Choose your region
                  </div>
                </div>
                <div class="form__body">
                  <v-select
                    v-model="form.region"
                    :items="region"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="Region"
                    outlined
                    required
                  ></v-select>
                </div>
                <div class="form__nav justify-center">
                  <v-btn color="success" @click="stepper = 2">
                    Continue
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="2">
                <div class="form__head">
                  <div class="form__head-title">
                    Choose your city
                  </div>
                </div>
                <div class="form__body">
                  <v-select
                    v-model="form.city"
                    :items="city"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="City"
                    outlined
                    required
                  ></v-select>
                </div>
                <div class="form__nav">
                  <v-btn text @click="stepper = 1">Back</v-btn>
                  <v-btn color="success" @click="stepper = 3">
                    Continue
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="3">
                <div class="form__head">
                  <div class="form__head-title">
                    Choose your broadcast
                  </div>
                </div>
                <div class="form__body">
                  <v-select
                    v-model="form.broadcast"
                    :items="broadcast"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="Broadcast"
                    outlined
                    required
                  ></v-select>
                </div>
                <div class="form__nav">
                  <v-btn text @click="stepper = 2">Back</v-btn>
                  <v-btn color="success" @click="stepper = 4">
                    Continue
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="4">
                <div class="form__head">
                  <div class="form__head-title">
                    Choose your date
                  </div>
                </div>
                <div class="form__body">
                  <v-date-picker
                    color="#472F83"
                    v-model="form.date"
                    class="mb-5"
                    :min="new Date().toISOString().substr(0, 10)"
                  ></v-date-picker>
                </div>
                <div class="form__nav">
                  <v-btn text @click="stepper = 3">Back</v-btn>
                  <v-btn color="success" @click="stepper = 5">
                    Continue
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="5">
                <div class="form__head">
                  <div class="form__head-title">
                    Addtional Info
                  </div>
                </div>
                <div class="form__body">
                  <v-row>
                    <v-col>
                      <v-select
                        v-model="form.type"
                        :items="type"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Type"
                        outlined
                        required
                      ></v-select>
                    </v-col>
                    <v-col>
                      <v-select
                        v-model="form.position"
                        :items="position"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Position"
                        outlined
                        required
                      ></v-select>
                    </v-col>
                  </v-row>
                </div>
                <div class="form__nav">
                  <v-btn text @click="stepper = 4">Back</v-btn>
                  <v-btn color="success" @click="finish">
                    Finish
                  </v-btn>
                </div>
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
    menuTime: false,
    stepper: 1,
    region: ["National", "Local"],
    broadcast: ["Radio 1", "Radio 2"],
    type: ["Loose Spot", "Add Lips"],
    duration: [15, 30, 45, 60],
    position: ["Premium", "Run On Print"],
    city: [
      {
        id: 1,
        text: "Aceh",
      },
      {
        id: 16,
        text: "Bali",
      },
      {
        id: 15,
        text: "Banten",
      },
      {
        id: 13,
        text: "Di Yogyakarta",
      },
      {
        id: 10,
        text: "Dki Jakarta",
      },
      {
        id: 28,
        text: "Gorontalo",
      },
      {
        id: 5,
        text: "Jambi",
      },
      {
        id: 11,
        text: "Jawa Barat",
      },
      {
        id: 12,
        text: "Jawa Tengah",
      },
      {
        id: 14,
        text: "Jawa Timur",
      },
      {
        id: 19,
        text: "Kalimantan Barat",
      },
      {
        id: 21,
        text: "Kalimantan Selatan",
      },
      {
        id: 20,
        text: "Kalimantan Tengah",
      },
      {
        id: 22,
        text: "Kalimantan Timur",
      },
      {
        id: 23,
        text: "Kalimantan Utara",
      },
      {
        id: 8,
        text: "Kepulauan Bangka Belitung",
      },
      {
        id: 9,
        text: "Kepulauan Riau",
      },
      {
        id: 7,
        text: "Lampung",
      },
      {
        id: 30,
        text: "Maluku",
      },
      {
        id: 31,
        text: "Maluku Utara",
      },
      {
        id: 17,
        text: "Nusa Tenggara Barat",
      },
      {
        id: 18,
        text: "Nusa Tenggara Timur",
      },
      {
        id: 33,
        text: "Papua",
      },
      {
        id: 32,
        text: "Papua Barat",
      },
      {
        id: 4,
        text: "Riau",
      },
      {
        id: 29,
        text: "Sulawesi Barat",
      },
      {
        id: 26,
        text: "Sulawesi Selatan",
      },
      {
        id: 25,
        text: "Sulawesi Tengah",
      },
      {
        id: 27,
        text: "Sulawesi Tenggara",
      },
      {
        id: 24,
        text: "Sulawesi Utara",
      },
      {
        id: 2,
        text: "Sumatera",
      },
      {
        id: 3,
        text: "Sumatera Barat",
      },
      {
        id: 6,
        text: "Sumatera Selatan",
      },
    ],
    form: {
      television_id: 1,
      television_program_id: 11,
      time: "Prime",
      duration: 45,
      position: "Premium",
      region: "",
      selectTime: false,
      selectProgram: [],
    },
    passwordRules: {
      required: (value) => !!value || "Password is required",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    lazy: true,
  }),
  computed: {
    rules() {
      return [this.form.selectProgram.length === 1 || "Just Only One"];
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    finish() {
      this.$emit("progress-done", true);
    },
  },
};
</script>
