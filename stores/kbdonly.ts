import { defineStore } from "pinia";

export const useKbdonlyStore = defineStore("kbdonlyStore", ()=> {
    const clickables = ref([]);
    const buttons = ref([]);
    const links = ref([]);
    return {clickables, buttons, links}
})