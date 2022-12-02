<template>
  <div>
<<<<<<< HEAD
    <v-app style="background-color:#F5F5F5">
    <navBarVue />
    <kbdonly/>
    <v-btn elevate="2" to="/index">Index</v-btn>
    <v-btn elevate="2" to="/test">Test</v-btn>

    <v-container>
      <cbutton content="App1" identifier="btn4" @click=test />
      <cbutton content="App2" identifier="btn5" @click=test />
      <clink identifier="a1" url="/test1" content="Test1" />
      <clink identifier="a2" url="/test2" content="Test2" />
    </v-container>
=======
    <v-app>
>>>>>>> add some marvel test files
     <NuxtPage></NuxtPage>
    </v-app>
  </div>
</template>
<script setup>
import kbdonly from './components/kbdonly.vue';
import navBarVue from './components/navBar.vue';

import cbutton from "./components/cbutton.vue";
import clink from "./components/clink.vue"

function test()
{
  console.log("Hello from app.vue");
}
</script>
