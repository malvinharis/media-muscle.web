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
                >Placement & Type</v-stepper-step
              >

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
                    Choose your placment & type
                  </div>
                </div>
                <div class="form__body">
                  <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="7">
                    <gmap-marker
                      v-for="(item, index) in markers"
                      :key="index"
                      :position="item.position"
                      :clickable="true"
                      @click="toggleInfoWindow(item, index)"
                    >
                    </gmap-marker>
                    <gmap-info-window
                      :options="infoOptions"
                      :position="infoWindowPos"
                      :opened="infoWinOpen"
                      @closeclick="infoWinOpen = false"
                    >
                      <div class="gmap-info-window">
                        <span>
                          {{ infoTitle }}
                        </span>
                        <p>
                          {{ infoContent }}
                        </p>
                      </div>
                    </gmap-info-window>
                  </gmap-map>

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
                    Addtional Info
                  </div>
                </div>
                <div class="form__body">
                  <v-row>
                    <v-col>
                      <v-select
                        v-model="form.duration"
                        :items="duration"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Duration"
                        outlined
                        required
                      ></v-select>
                    </v-col>
                    <v-col>
                      <v-select
                        v-model="form.period"
                        :items="period"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Period"
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
    center: {
      lat: -6.2087634,
      lng: 106.845599,
    },
    mapTypeId: "roadmap",
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35,
      },
    },
    infoTitle: "",
    infoContent: "",
    infoWindowPos: null,
    infoWinOpen: false,
    currentMidx: null,
    region: ["National", "Local"],
    type: ["Static", "LED"],
    duration: [15, 30],
    period: ["1 Month", "2 Month"],
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
    markers: [
      {
        position: {
          lat: -6.2087634,
          lng: 106.845599,
        },
      },
    ],
    location: [
      {
        name: "Store one",
        address: "Budapest, Deák Ferenc u. 19, 1052",
        phone: "(70) 881 9463",
        email: "some@email.com",
        picture: "https://picsum.photos/200/300",
        latlng: [47.4968864, 19.0531093],
      },
      {
        name: "Store one",
        address: "G354+5R Budapest",
        phone: "(1) 311 9666",
        email: "some@email.com",
        picture: "https://picsum.photos/200/300",
        latlng: [47.5079722, 19.0570521],
      },
      {
        name: "Store one",
        address: "Budapest, Deák Ferenc u. 19, 1052",
        phone: "(70) 881 9463",
        email: "some@email.com",
        picture: "https://picsum.photos/200/300",
        latlng: [47.4968864, 19.0531093],
      },
      {
        name: "Store one",
        address: "G354+5R Budapest",
        phone: "(1) 311 9666",
        email: "some@email.com",
        picture: "https://picsum.photos/200/300",
        latlng: [47.5079722, 19.0570521],
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
