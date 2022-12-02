<template>
    <v-app-bar color="blue">
        <v-app-bar-title>
            <v-toolbar-title>NDI 2022</v-toolbar-title>
        </v-app-bar-title>

  
        <!-- <v-btn v-for="link in links" :key="link.title" :to="link.value" color="white" class="mx-2">
            {{ link.title }}
        </v-btn> -->
        <!--login ou register button-->
        <loginVue />
        <registerVue />

    </v-app-bar>
    <div style="min-height:70px;"> </div>

</template> 
<script setup>
import { ref } from 'vue'
import loginVue from './login/login.vue';
import registerVue from './login/register.vue';

const mavarioble = ref('ma valeur')
const madata = ref({})
const registerDialog = ref(false)
const links = ref([{
    title: "Home",
    value: "/",
}, {
    title: "About",
    value: "/about",
}, {
    title: "Contact",
    value: "/contact",
}])

onMounted(() => {
    fetch('https://apitips.sangi.tech/api/tips',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json()).then((data) => {
        console.log(data)
    })
})




</script>
<style>
.v-toolbar-title {
    color: white;
}
</style>