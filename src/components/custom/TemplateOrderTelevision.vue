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
                >Broadcast</v-stepper-step
              >

              <v-stepper-step color="#472F83" :complete="stepper > 3" step="3"
                >Date & Type</v-stepper-step
              >

              <v-stepper-step color="#472F83" :complete="stepper > 4" step="4"
                >Time</v-stepper-step
              >

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
                  <v-btn text @click="stepper = 1">Back</v-btn>
                  <v-btn color="success" @click="stepper = 3">
                    Continue
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="3">
                <div class="form__head">
                  <div class="form__head-title">
                    Choose your date & type
                  </div>
                </div>
                <div class="form__body">
                  <v-date-picker
                    color="#472F83"
                    v-model="form.date"
                    class="mb-5"
                    :min="new Date().toISOString().substr(0, 10)"
                  ></v-date-picker>

                  <v-select
                    v-model="form.type"
                    :items="type"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="Type Time"
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
                    Choose your time
                  </div>
                </div>
                <div class="form__body">
                  <v-row v-for="(item, idx) in programs" :key="idx">
                    <v-col>
                      <v-menu
                        ref="menu"
                        v-model="menuTime"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="item.time_start"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                        disabled
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="item.time_start"
                            label="Start Time"
                            readonly
                            outlined
                            disabled
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="menuTime"
                          v-model="item.time_start"
                          full-width
                          @click:minute="$refs.menu.save(item.time_start)"
                        ></v-time-picker>
                      </v-menu>
                    </v-col>
                    <v-col>
                      <v-menu
                        ref="menu"
                        v-model="menuTime"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="item.time_end"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                        disabled
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="item.time_end"
                            label="End Time"
                            readonly
                            outlined
                            disabled
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="menuTime"
                          v-model="item.time_end"
                          full-width
                          @click:minute="$refs.menu.save(item.time_end)"
                        ></v-time-picker>
                      </v-menu>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="item.program_name"
                        :label="
                          item.program_name === '' ? 'Unavailable' : 'Program'
                        "
                        outlined
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-checkbox
                        v-model="form.selectProgram"
                        label="Spot"
                        :value="item.id"
                        :disabled="item.id === null"
                        :rules="rules"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
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
                        v-model="form.dutaion"
                        :items="duration"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Time Duration"
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
    broadcast: ["TV 1", "TV 2"],
    type: ["Prime", "Non Prime"],
    duration: [15, 30, 45, 60],
    position: ["Premium", "Running On Spot"],
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
