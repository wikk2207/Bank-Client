<template>
  <v-app id="inspire">
    <v-content>
          <v-row align="start" justify="end">
                  <v-card-actions>
                <v-btn big @click="handlePressNewTransfer()" color="primary">Nowy przelew</v-btn>
                <v-btn text @click="handlePressMyAccount()">Moje konto</v-btn>
                <v-btn text @click="handlePressLogOut()" >Wyloguj się</v-btn>
              </v-card-actions>
          </v-row>
          <v-spacer></v-spacer>
        <v-row align="center" justify="center">
            <v-col>
                <v-data-table
                :headers="headers"
                :items="transfers"
                :items-per-page="15"
                class="elevation-1"
              ></v-data-table>
              <v-snackbar v-model="snackbar" :timeout="timeout">
              {{ snackText }}
              <v-btn color="blue" text @click="snackbar = false">Zamknij</v-btn>
            </v-snackbar>
            </v-col>
        </v-row>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
import router from '../router/index';

export default {
  name: "HistoryPage",
  props: ['id', 'token'],
  data() {
    return {
      snackbar: false,
      timeout: 3000,
      snackText: "",
      transfers: [],
      headers: [
        { text: "Nr przelewu", value: "id" },
        { text: "Data", value: "date" },
        { text: "Tytuł przelewu", value: "title" },
        { text: "Kwota", value: "amount" },
        { text: "Nr konta", value: "account_number" }
      ]
    };
  },
  beforeMount() {
    axios
      .get("api/history", {
          headers: {
              'x-access-token': localStorage.getItem('token'),
          }
      })
      .then(response => {
        response.data.transfers
          .forEach(element => {
            var newTransfer = {
              id: element.id,
              date: element.created,
              title: element.title,
              amount: element.amount,
              account_number: element.account_number
            };
            this.transfers.push(newTransfer);
          })
         
      }) .catch(error => {
            /* eslint-disable no-console */
              console.log(error);
              /* eslint-enable no-console */
          });
  },
  methods: {
      handlePressNewTransfer(){
          router.push("/createtransfer");
      },
      handlePressMyAccount(){
          this.snackText = "Work in progress";
          this.snackbar = true;
      },
      handlePressLogOut(){
        localStorage.removeItem('token');
        router.push("/");
      },
  }
};
</script>