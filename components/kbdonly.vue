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

let holdingShift: boolean = false; 

/**
 * setup un event listener. Affiche key pressed (e.key)
 */
function setupListeners()
{

    window.addEventListener("keydown", handleDownInput);
    window.addEventListener("keyup", handleUpInput);
}

function destroyListeners(){
    window.removeEventListener("keydown", handleDownInput);
    window.removeEventListener("keyup", handleUpInput);
}

/**
 * Si shift -> Afficher touches a utiliser pour y acceder
 */
function handleDownInput(event)
{
    if (holdingShift)
    {
        console.log("Currently holding down Shift");
    }
    else
    {
        console.log("Down: " + event.key);
        if (event.key == "Shift")
        {
            holdingShift = true;
        }
    }
}

function handleUpInput(event)
{
    if (holdingShift)
    {
        console.log("Up: " + event.key);
        if (event.key == "Shift")
        {
            holdingShift = false;
        }
    }
    else
    {
        
    }

    
}

onMounted(setupListeners);
onUnmounted(destroyListeners);

</script>