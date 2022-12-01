<template>
  <div>
    <kbdonly/>
    <v-btn elevate="2" to="/index">Index</v-btn>
    <v-btn elevate="2" to="/test">Test</v-btn>
     <NuxtPage></NuxtPage>
  </div>
</template>
<script setup>
import kbdonly from './components/kbdonly.vue';
</script>
