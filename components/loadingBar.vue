<template>


  <div>
    <v-progress-linear
      v-model="props.progress_value"
      color="amber"
      height="25"
      stream
    >
    </v-progress-linear>
  </div>
</template>

<script setup>
import { ref } from "vue";



const interval = ref(0);

const props = defineProps({
  progress_value: {
    type: Number,
    default: 0,
  },
});



</script>
