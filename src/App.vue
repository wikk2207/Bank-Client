<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import LoginPage from './components/LoginPage';
//import RegistrationPage from './components/RegistrationPage';


export default {
  name: 'App',

  components: {
    //LoginPage,
    //RegistrationPage,
  },

  data: () => ({
    //
  }),
};
</script>
