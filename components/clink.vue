<template>
    <a :id=identifier :href=url>{{content}}</a>
</template>

<script setup lang="ts">
    import { useKbdonlyStore } from "../stores/kbdonly"
    import { onMounted, onUnmounted } from 'vue';

    const props = defineProps(
    {
        content:
        {
            type:String,
            default: "Link"
        },
        identifier:
        {
            type: String,
            require: true
        },
        url:
        {
            type: String,
            require: true
        }
    });

    onMounted(() =>
    {
        const kbdonlyStore = useKbdonlyStore();
        const links = kbdonlyStore.links;
        const clickables = kbdonlyStore.clickables;

        clickables.push(document.getElementById(props.identifier));
    });

    onUnmounted(() =>
    {
        const kbdonlyStore = useKbdonlyStore();
        const links = kbdonlyStore.links;
        const clickables = kbdonlyStore.clickables;

        clickables.splice(links.indexOf(document.getElementById(props.identifier)), 1);
    })
    
</script>