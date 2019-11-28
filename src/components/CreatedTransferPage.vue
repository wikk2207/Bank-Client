<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-card-text>
                <v-row>
                  <v-col>
                    <div class="mt-12 text-end">Numer transakcji:</div>
                    <div class="mt-12 text-end">Numer konta:</div>
                    <div class="mt-12 text-end">Kwota transakcji:</div>
                    <div class="mt-12 text-end">Tytuł:</div>
                    <div class="mt-12 text-end">Wykonano:</div>
                  </v-col>
                  <v-col>
                    <div class="mt-12 text-start">{{this.id}}</div>
                    <div class="mt-12 text-start">{{this.account_number}}</div>
                    <div class="mt-12 text-start">{{this.amount}}</div>
                    <div class="mt-12 text-start">{{this.title}}</div>
                    <div class="mt-12 text-start">{{this.date}}</div>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="handlePressOk()" color="primary">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
import router from "../router/index";

export default {
  name: "CreatedTransferPage",
  props: ["transferId"],
  data() {
    return {
      id: "",
      account_number: "",
      amount: "",
      title: "",
      date: ""
    };
  },
  beforeMount() {
    /* eslint-disable no-console */
    console.log(this.$route.params.transferId);
    /* eslint-enable no-console */
    var transfer = this.$route.params.transferId;
    axios
      .get("api/transfer", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          transferId: transfer
        }
      })
      .then(response => {
        /* eslint-disable no-console */
        console.log(response);
        /* eslint-enable no-console */
        if (response.data.token) {
          localStorage.setItem("token");
        }
        if (response.status != 200) {
          /* eslint-disable no-console */
          console.log(response);
          /* eslint-enable no-console */
        } else {
          this.id = response.data.transfer.id;
          this.account_number = response.data.transfer.account_number;
          this.amount = response.data.transfer.amount;
          this.title = response.data.transfer.title;
          this.date = response.data.transfer.created;
        }
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
        /* eslint-enable no-console */
      });
  },
  methods: {
    handlePressOk() {
      router.push("/history");
    }
  }
};
</script>