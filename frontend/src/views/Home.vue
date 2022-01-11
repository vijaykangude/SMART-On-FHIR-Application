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
                  v-model="firstName"
                  label="First Name"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="lastName"
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
import Highcharts from "highcharts";
import HighchartsNoData from "highcharts/modules/no-data-to-display";
HighchartsNoData(Highcharts);

import axios from "axios";
import jsonata from "jsonata";
export default {
  name: "Home",
  components: {
    highcharts: Chart,
  },

  data: () => ({
    mrn: "",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",

    chartOptions: {
      xAxis: {
        title: {
          text: "Date",
        },
        type: "datetime",
        // Use the date format in the
        // labels property of the chart
        /*labels: {
          formatter: function () {
            return Highcharts.dateFormat("%d %b %Y", this.value);
          },
        }, */
      },

      yAxis: {
        title: {
          text: "Blood Glucose ( in mg/dL )",
        },
      },
      chart: {
        type: "spline",
      },
      title: {
        text: "Blood Glucose Chart for Diabetes Patient",
      },
      tooltip: {
        crosshairs: true,
        shared: true,
      },
      lang: {
        noData: "No data available",
      },
      series: [

        {
          name: "High",
          data: [{
            x: new Date('2018-03-01'),
            y: 109
          },
          {
            x: new Date('2018-04-01'),
            y: 109
          }
           ],
        },
        {
          name: "Actual",
          data: [{
            x: new Date('2018-03-01'),
            y: 50
          },
          {
            x: new Date('2018-04-01'),
            y: 70
          }
            
           ],
        },
        {
          name: "Low",
          data: [{
            x: new Date('2018-03-01'),
            y: 40
          },
          {
            x: new Date('2018-04-01'),
            y: 40
          }
           ],
        }
      ],
    },
  }),
  created: function () {
    this.getPatientDetails();
  },
  methods: {
    async getPatientDetails() {
      console.log("Getting Patient details");
      try {
        const response = await axios.get("/patientDetails");
        let patientDemographicDetails = response.data.patientDemographicDetails;
        let expression = jsonata("name[0].given[0]");
        let firstNamePart1 = expression.evaluate(patientDemographicDetails);
        expression = jsonata("name[0].given[1]");
        let firstNamePart2 = expression.evaluate(patientDemographicDetails);
        this.firstName = firstNamePart2
          ? firstNamePart1 + " " + firstNamePart2
          : firstNamePart1;
        expression = jsonata("name[0].family");
        this.lastName = expression.evaluate(patientDemographicDetails);
        expression = jsonata("identifier.value");
        this.mrn = expression.evaluate(patientDemographicDetails);
        expression = jsonata("gender");
        this.gender = expression.evaluate(patientDemographicDetails);
        expression = jsonata("birthDate");
        this.dob = expression.evaluate(patientDemographicDetails);
        expression = jsonata('telecom[system="email"].value');
        this.email = expression.evaluate(patientDemographicDetails);

        console.log(JSON.stringify(response));
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
