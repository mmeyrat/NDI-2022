<template>
    <v-btn :id=identifier @click="$emit('click')" :style=addedStyle>{{content}}</v-btn>
</template>

<script setup lang="ts">
    import { useKbdonlyStore } from "../stores/kbdonly"
    import { onMounted, onUnmounted } from 'vue';
    const props = defineProps(
    {
        identifier:
        {
            type: String,
            require: true
        },
        content:
        {
            type: String,
            require: true
        },
        addedStyle:
        {
            type:String,
            default:""
        }
    });


    onMounted(() =>
    {
        const kbdonlyStore = useKbdonlyStore();
        const buttons = kbdonlyStore.buttons;
        const clickables = kbdonlyStore.clickables;

        buttons.push(document.getElementById(props.identifier));
        clickables.push(document.getElementById(props.identifier));
        
        console.log("Added button with id: " + props.identifier + " (" + document.getElementById(props.identifier).textContent + ")")
    });

    onUnmounted(() =>
    {
        const kbdonlyStore = useKbdonlyStore();
        const buttons = kbdonlyStore.buttons;
        const clickables = kbdonlyStore.clickables;

        buttons.splice(buttons.indexOf(document.getElementById(props.identifier)), 1);
        clickables.splice(buttons.indexOf(document.getElementById(props.identifier)), 1);
    })
    
</script>