import { defineStore } from "pinia";
export const useLoadingStore = defineStore("loading", () => {
  const progress = ref(0);
  const time = ref(0);

  return {
    progress,
    time,
  };
});
