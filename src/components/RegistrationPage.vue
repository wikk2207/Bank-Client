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
                    v-model="input.email"
                    label="Adres e-mail"
                    name="email"
                    type="email"
                    :rules="[rules.required, rules.email]"
                  />
                  <v-text-field
                    v-model="input.password1"
                    label="Hasło"
                    name="password1"
                    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                    :type="showPassword ? 'text' : 'password'"
                    :rules="[rules.required, rules.password]"
                    @click:append="showPassword = !showPassword"
                  />
                  <v-text-field
                    v-model="input.password2"
                    label="Powtórz hasło"
                    name="password2"
                    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                    :type="showPassword ? 'text' : 'password'"
                    :rules="[rules.required, rules.passwordMatch]"
                    @click:append="showPassword = !showPassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="handlePressRegister()" color="primary">Zarejestruj się</v-btn>
                <v-btn text @click="handlePressLogin()">Zaloguj się</v-btn>
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
var validator = require("email-validator");
axios.defaults.baseURL = "http://localhost:4000";
import router from '../router/index';

export default {
  name: "RegistrationPage",
  data() {
    return {
      snackbar: false,
      timeout: 3000,
      snackText: "",
      showPassword: false,
      input: {
        login: "",
        email: "",
        password1: "",
        password2: ""
      },
      rules: {
        required: value => {
          return !!value || "Pole nie może być puste";
        },
        email: value => {
          return validator.validate(value) || "Niepoprawny email";
        },
        password: value => {
          return value.length >= 6 || "Hasło musi zawierać minimum 6 znaków";
        },
        passwordMatch: value => {
          return (
            this.input.password1.localeCompare(value) === 0 ||
            "Hasła różnią się"
          );
        }
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
        this.snackText = "Pola nie mogą być puste";
        this.snackbar = true;
      } else if (
        !validator.validate(this.input.email) ||
        !this.input.password1.localeCompare(this.input.password2) === 0 ||
        !this.input.password1 >= 6
      ) {
        this.snackText = "Nieprawidłowe dane";
        this.snackbar = true;
      } else {
        var pass = await sha3_512(this.input.password1 + this.input.login);
        axios
          .post("/api/register", {
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
              /* eslint-disable no-console */
              console.log(error);
              /* eslint-enable no-console */
            }
          );
      }
    },
    handlePressLogin() {
      router.push("/");
    }
  }
};
</script>