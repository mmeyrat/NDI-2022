<template>
    <v-app-bar color="blue">
        <v-app-bar-title>
            <v-toolbar-title>NDI 2022</v-toolbar-title>
        </v-app-bar-title>

  
        <loginVue />
        <registerVue />

    </v-app-bar>
    <div style="min-height:70px;"> </div>

</template> 
<script setup>
import { ref } from 'vue'
import loginVue from './login/login.vue';
import registerVue from './login/register.vue';





</script>
<style>
.v-toolbar-title {
    color: white;
}
</style>