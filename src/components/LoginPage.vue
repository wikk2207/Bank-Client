<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="input.login"
                    label="Login"
                    name="login"
                    type="text"
                    :rules="[rules.required]"
                  />
                  <v-text-field
                    v-model="input.password"
                    id="password"
                    label="Hasło"
                    name="password"
                    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                    :type="showPassword ? 'text' : 'password'"
                    :rules="[rules.required]"
                    @click:append="showPassword = !showPassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn text small @click="handlePressForgetPassword()">Nie pamiętam hasła</v-btn>
                <v-btn @click="handlePressLogin()" color="primary">Zaloguj się</v-btn>
                <v-btn text @click="handlePressRegister()" class="btn-register">Zarejestruj się</v-btn>
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
import { sha3_512 } from "js-sha3";
axios.defaults.baseURL = "http://localhost:4000";

export default {
  name: "LoginPage",
  data() {
    return {
       snackbar: false,
      timeout: 3000,
      snackText: "",
      showPassword: false,
      input: {
        login: "",
        password: ""
      },
      rules: {
        required: value => {
          return !!value || "Pole nie może być puste";
        },
      }
    };
  },
  methods: {
    async handlePressLogin() {
        if (
        this.input.login === "" ||
        this.input.password === "" 
      ) {
        this.snackText = "Pola nie mogą być puste";
        this.snackbar = true;
      } else {
        var pass = await sha3_512(this.input.password + this.input.login);
        axios
          .post("/api/login", {
            login: this.input.login,
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
                  window.location.href = "/";
                }, 3000);
              }
            },
            error => {
              /* eslint-disable no-console */
              console.log(error);
              /* eslint-enable no-console */
            }
          );
      }
    },
    handlePressRegister() {
      window.location.href = "/register";
    }
  }
};
</script>