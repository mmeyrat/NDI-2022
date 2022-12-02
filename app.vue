<template>
  <div>
    <v-app style="background-color:#F5F5F5">
    <navBarVue />
    <kbdonly/>
    <v-btn elevate="2" to="/index">Index</v-btn>
    <v-btn elevate="2" to="/test">Test</v-btn>
     <NuxtPage></NuxtPage>
    </v-app>
  </div>
</template>
<script setup>
import kbdonly from './components/kbdonly.vue';
import navBarVue from './components/navBar.vue';
</script>
