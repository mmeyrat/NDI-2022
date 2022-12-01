<template>
    ceci est la page d'index

    <v-btn elevation="2">MAEBA</v-btn>
    <v-btn elevation="4">MAEBA</v-btn>
    <v-btn elevation="8">MAEBA</v-btn>
    <v-btn elevation="16">MAEBA</v-btn>
    <a href="/">MAEBA LIEN</a> <br>
    <a href="">doggito</a>

    
</template>

<script setup lang="ts">
import { ref } from "vue";
import {onMounted, onUnmounted} from "vue"

let displaying: boolean = false; 

/**
 * setup un event listener. Affiche key pressed (e.key)
 */
function setupListeners()
{

    window.addEventListener("keypress", handleDownInput);
    window.addEventListener("keyup", handleUpInput);
}

function destroyListeners(){
    window.removeEventListener("keypress", handleDownInput);
    window.removeEventListener("keyup", handleUpInput);
}

/**
 * Si shift -> Afficher touches a utiliser pour y acceder
 */
function handleDownInput(event)
{
    if (displaying)
    {
        //
    }
    else
    {
        console.log("Down 4: " + event.key);
        displaying = true;
    }
}

function handleUpInput(event)
{
    if (displaying)
    {
        //
    }
    else
    {
        console.log("Up 4: " + event.key);
        displaying = false;
    }

    
}

onMounted(setupListeners);
onUnmounted(destroyListeners);

</script>