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
let actionDone: boolean = false;

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
        switch (event.key)
        {
            case "A":
                console.log("Click");
                let links = document.querySelectorAll("button");
                //links[0].click()
                console.log(links.length + " links");
                links.forEach((link) => {link.click();});
                break;

            default:
                console.log("Shift+" + event.key);
        }
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