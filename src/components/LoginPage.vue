<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Logowanie</v-toolbar-title>
              </v-toolbar>
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
                <v-btn
                  :disabled="disabled"
                  text
                  small
                  @click="handlePressForgetPassword()"
                >Nie pamiętam hasła</v-btn>
                <v-btn
                  :disabled="disabled"
                  text
                  @click="handlePressRegister()"
                  class="btn-register"
                >Zarejestruj się</v-btn>
                <v-spacer />
                <v-btn :disabled="disabled" @click="handlePressLogin()" color="primary">Zaloguj się</v-btn>
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
import router from "../router/index";

export default {
  name: "LoginPage",
  data() {
    return {
      snackbar: false,
      timeout: 3000,
      snackText: "",
      showPassword: false,
      disabled: false,
      input: {
        login: "",
        password: ""
      },
      rules: {
        required: value => {
          return !!value || "Pole nie może być puste";
        }
      }
    };
  },
  methods: {
    async handlePressLogin() {
      this.disabled = true;
      if (this.input.login === "" || this.input.password === "") {
        this.snackText = "Pola nie mogą być puste";
        this.snackbar = true;
        this.disabled = false;
      } else {
        var pass = await sha3_512(this.input.password + this.input.login);
        axios
          .post("/api/login", {
            login: this.input.login,
            password: pass
          })
          .then(
            response => {
              if (response.data.status != 200) {
                this.snackText = response.data.message;
                this.snackbar = true;
                this.disabled = false;
              } else {
                this.snackText = response.data.message;
                this.snackbar = true;
                localStorage.setItem("token", response.data.token);
                router.push("/history");
                //router.push({name:'history', params: {id: response.data.id, token: response.data.token}})
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
    },
    handlePressRegister() {
      router.push("/register");
    },
    handlePressForgetPassword() {
      router.push("/resetpassword");
    }
  }
};
</script>