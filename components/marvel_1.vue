<template>
  <div>
    <p>ceci est la page marvel 1 {{timer}} {{time}}</p>

    <v-img src="/divalto-background.png" pos>
        <NuxtLink to="/marvel_2">
        <v-img style="position: relative" src="/divalto-vipi.png" width="5%">
        </v-img>
      </NuxtLink>
    </v-img>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useLoadingStore } from "@/stores/loading";
import { storeToRefs } from "pinia";
const LoadingStore = useLoadingStore();
const { progress,time } = storeToRefs(LoadingStore);


const interval = ref(0);
const timer = ref(0);
const mounted = ref(false);

onMounted(() => {
    mounted.value = true;
    interval.value = setInterval(() => {
    timer.value += 1;
    time.value = timer.value;
  }, 1000);
}),
onUnmounted(() => {
  clearInterval(interval.value);
  time.value = timer.value;
});

</script>
