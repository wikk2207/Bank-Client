<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Resetowanie hasła</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="input.email"
                    label="Adres e-mail"
                    name="email"
                    type="email"
                    :rules="[rules.required, rules.email]"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn text @click="handlePressBack()">Powrót</v-btn>
                <v-spacer />
                <v-btn @click="handlePressRegister()" color="primary">Resetuj</v-btn>
              </v-card-actions>
            </v-card>
            <v-snackbar v-model="snackbar" :timeout="timeout">
              {{ snackText }}
              <v-btn color="blue" text @click="snackbar = false">Zamknij</v-btn>
            </v-snackbar>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
var validator = require("email-validator");
axios.defaults.baseURL = "http://localhost:4000";
import router from "../router/index";

export default {
  name: "ResetPasswordPage",
  data() {
    return {
      snackbar: false,
      timeout: 3000,
      snackText: "",
      input: {
        email: "",
      },
      rules: {
        required: value => {
          return !!value || "Pole nie może być puste";
        },
        email: value => {
          return validator.validate(value) || "Niepoprawny email";
        },
      }
    };
  },
  methods: {
    async handlePressRegister() {
      if (
        this.input.login === "" ||
        this.input.email === "" ||
        this.input.password1 === "" ||
        this.input.password2 === ""
      ) {
        this.snackText = "Pole nie może być puste";
        this.snackbar = true;
      } else if (
        !validator.validate(this.input.email) ||
        !this.input.password1.localeCompare(this.input.password2) === 0 ||
        !this.input.password1 >= 6
      ) {
        this.snackText = "Nieprawidłowe dane";
        this.snackbar = true;
      } else {
        //axios
          /*.post("/api/register", {
            login: this.input.login,
            email: this.input.email,
            password: pass
          })
          .then(
            response => {
              if (response.data.status != 201) {
                this.snackText = response.data.message;
                this.snackbar = true;
              } else {
                this.snackText = response.data.message;
                this.snackbar = true;
                setTimeout(function() {
                  router.push("/");
                }, 3000);
              }
            },
            error => {
              // eslint-disable no-console 
              console.log(error);
              // eslint-enable no-console 
            }
          );*/
      }
    },
    handlePressBack() {
      router.push("/");
    }
  }
};
</script>