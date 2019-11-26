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
                    <div class="mt-12 text-end">Numer konta:</div>
                    <div class="mt-12 text-end">Kwota transakcji:</div>
                    <div class="mt-12 text-end">Tytuł:</div>
                  </v-col>
                  <v-col>
                    <div class="mt-12 text-start">{{this.$route.params.account_number}}</div>
                    <div class="mt-12 text-start">{{this.$route.params.amount}}</div>
                    <div class="mt-12 text-start">{{this.$route.params.title}}</div>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn :disabled="disabled" text @click="handlePressBack()" color="primary">Powrót</v-btn>
                <v-spacer />
                <v-btn
                  :disabled="disabled"
                  @click="handlePressConfirm()"
                  color="primary"
                >Wykonaj przelew</v-btn>
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
  name: "ConfirmTransferPage",
  props: ["account_number", "amount", "title"],
  data() {
    return {
      disabled: false
    };
  },
  methods: {
    handlePressBack() {
      router.push({
        name: "createtransfer",
        params: {
          account_number: this.$route.params.account_number,
          amount: this.$route.params.amount,
          title: this.$route.params.title
        }
      });
    },
    handlePressConfirm() {
      this.disabled = true;
      axios
        .post("api/create/transfer", {
          headers: {
            "x-access-token": localStorage.getItem("token")
          },
          account_number: this.$route.params.account_number,
          amount: this.$route.params.amount,
          title: this.$route.params.title
        })
        .then(
          response => {
            if (response.status != 200) {
              this.snackText = response.data.message;
              this.snackbar = true;
              this.disabled = false;
            } else {
              router.push({
                name: "createdtransfer",
                params: {
                  transferId: response.data.transferId,
                }
              });
            }
          },
          error => {
            this.disabled = false;
            /* eslint-disable no-console */
            console.log(error);
            /* eslint-enable no-console */
          }
        );
    }
  }
};
</script>