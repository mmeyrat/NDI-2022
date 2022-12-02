<template>
    <cbtn content="Allo" identifier="btn1" @click=test />
    <cbtn content="Allo2" identifier="btn2" @click=test />
    <cbtn content="Allo3" identifier="btn3" @click=test />
    <clink identifier="a3" url="/test3" content="Test3" />
      <clink identifier="a4" url="/test4" content="Test4" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import {onMounted, onUnmounted} from "vue"
import { useKbdonlyStore } from "../stores/kbdonly"
import cbtn from "./cbutton.vue";
import clink from "./clink.vue"

let holdingShift = ref(false);
let actionDone: boolean = false;



function test()
{
    console.log("Hello from kbdonly.vue");
}
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
    const kbdonlyStore = useKbdonlyStore();
    const clickables = kbdonlyStore.clickables;

    let orderedClickables = []
                
        clickables.forEach((button) =>
        {
            let rect = button.getBoundingClientRect();
            orderedClickables.push([(rect.left + rect.right) / 2, (rect.top + rect.bottom) / 2, button]);
        });
        

        orderedClickables.sort((a, b) => 
        {
            if (a[0] < b[0] && a[1] < b[1])
            {
                return -1;
            }

            if (a[0] > b[0] && a[1] > b[1])
            {
                return 1;
            }

            return 0;
        })

    if (holdingShift.value)
    {

        orderedClickables[event.key.charCodeAt(0)-65][2].click();
    }

    else
    {
        console.log("Down: " + event.key);
        if (event.key == "Shift")
        {
            

            orderedClickables.forEach((clickable, index) =>
            {
                if (clickable[2].textContent.split(" (").length < 2)
                {
                    clickable[2].textContent = clickable[2].textContent + " (" + String.fromCharCode(index+65) + ")";
                }
                
            })
            holdingShift.value = true;
        }
    }
}

function handleUpInput(event)
{
    if (holdingShift.value)
    {
        if (event.key == "Shift")
        {
            const kbdonlyStore = useKbdonlyStore();
            const clickables = kbdonlyStore.clickables;

            clickables.forEach((clickable) =>
            {
                clickable.textContent = clickable.textContent.split(" (")[0];
            })
            holdingShift.value = false;
        }
    }
    else
    {
        
    }

    
}

onMounted(setupListeners);
onUnmounted(destroyListeners);

</script>