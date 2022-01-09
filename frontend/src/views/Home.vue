<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center" mt-6>
        <v-card>
          <v-card-title>
            Patient Demographic
            <v-spacer />
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="mrn"
                  label="Medical Record Number"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="first"
                  label="First Name"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="last"
                  label="Last Name"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="gender"
                  label="Gender"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="dob"
                  label="Date Of Birth"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="email"
                  label="Email"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions />
        </v-card>
        <v-subheader />
        <v-spacer />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="text-xs-center" mt-6>
        <v-card>
          <v-card-title>
           
            <v-spacer />
          </v-card-title>
          <v-container>
            <highcharts :options="chartOptions"></highcharts>
          </v-container>

          <v-card-actions />
        </v-card>
        <v-subheader />
        <v-spacer />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Chart } from "highcharts-vue";
export default {
  name: "Home",
  components: {
    highcharts: Chart,
  },

  data: () => ({
    mrn: "smart-1288992",
    first: "John",
    last: "Doe",
    gender: "male",
    dob: "1925-12-23",
    email: "daniel.adams@example.com",

    chartOptions: {
      chart: {
        type: "spline",
      },
      title: {
        text: "Blood Glucose Chart for Diabetes Patient",
      },
      tooltip: {
        crosshairs: true,
        shared: true
    },
      series: [
        {
          name: "High",
        data: [70, 70, 70, 70, 70, 70, 70, 70],
        },
        {
          name: "Actual",
        data: [20, 90, 30, 40, 100, 15, 90, 70],
        },
        {
          name: "Low",
          data: [40, 40, 40, 40, 40, 40, 40, 40],
        },
      ],
    },
  }),
};
</script>
