import { defineStore } from "pinia";

const useKbdonlyStore = defineStore("kbdonlyStore", ()=> {
    const tab = ref([]);
    return {tab}
})