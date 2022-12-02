<v-btn>
    10%
</v-btn>

<v-btn>
    50%
</v-btn>

<v-btn>
    80%
</v-btn>

<template>
  <div>
    <v-progress-linear
      v-model="power"
      color="amber"
      height="25" >
    </v-progress-linear>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
</script>