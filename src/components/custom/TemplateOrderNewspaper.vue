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
                >Publisher</v-stepper-step
              >

              <v-stepper-step color="#472F83" :complete="stepper > 3" step="3"
                >Date
              </v-stepper-step>

              <v-stepper-step color="#472F83" :complete="stepper > 4" step="4"
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
                    Choose your publisher
                  </div>
                </div>
                <div class="form__body">
                  <v-select
                    v-model="form.publisher"
                    :items="publisher"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="Publisher"
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
                  <v-btn text @click="stepper = 2">Back</v-btn>
                  <v-btn color="success" @click="stepper = 4">
                    Continue
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="4">
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
                        :items="size"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Size"
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
                  <v-btn text @click="stepper = 3">Back</v-btn>
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
    publisher: ["Publisher 1", "Publisher 2"],
    size: ["Half Page", "Quarter Page"],
    duration: [15, 30, 45, 60],
    position: ["Premium", "Run On Print"],
    programs: [
      {
        id: 1,
        program_name: "Program A",
        time_start: "00:00",
        time_end: "00:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "00:30",
        time_end: "00:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "01:00",
        time_end: "01:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "01:30",
        time_end: "01:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "02:00",
        time_end: "02:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "02:30",
        time_end: "02:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "03:00",
        time_end: "03:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "03:30",
        time_end: "03:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "04:00",
        time_end: "04:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "04:30",
        time_end: "04:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "05:00",
        time_end: "05:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "05:30",
        time_end: "05:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "06:00",
        time_end: "06:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "06:30",
        time_end: "06:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "07:00",
        time_end: "07:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "07:30",
        time_end: "07:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "08:00",
        time_end: "08:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "08:30",
        time_end: "08:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "09:00",
        time_end: "09:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "09:30",
        time_end: "09:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "10:00",
        time_end: "10:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "10:30",
        time_end: "10:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "11:00",
        time_end: "11:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "11:30",
        time_end: "11:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "12:00",
        time_end: "12:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "12:30",
        time_end: "12:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "13:00",
        time_end: "13:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "13:30",
        time_end: "13:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "14:00",
        time_end: "14:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "14:30",
        time_end: "14:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "15:00",
        time_end: "15:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "15:30",
        time_end: "15:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "16:00",
        time_end: "16:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "16:30",
        time_end: "16:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "17:00",
        time_end: "17:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "17:30",
        time_end: "17:45",
      },
      {
        id: 3,
        program_name: "Program B",
        time_start: "18:00",
        time_end: "18:15",
      },
      {
        id: 4,
        program_name: "Program B",
        time_start: "18:30",
        time_end: "18:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "19:00",
        time_end: "19:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "19:30",
        time_end: "19:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "20:00",
        time_end: "20:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "20:30",
        time_end: "20:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "21:00",
        time_end: "21:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "21:30",
        time_end: "21:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "22:00",
        time_end: "22:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "22:30",
        time_end: "22:45",
      },
      {
        id: null,
        program_name: "",
        time_start: "23:00",
        time_end: "23:15",
      },
      {
        id: null,
        program_name: "",
        time_start: "23:30",
        time_end: "23:45",
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
