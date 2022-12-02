<template>
    <div v-if="mounted && !user.email">
        <v-btn @click="toggleRegisterDialog">
            <v-icon>mdi-account-plus-outline</v-icon>
        </v-btn>
        <v-dialog v-model="registerDialog" width="500">
            <v-card>
                <v-toolbar color="primary" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="registerDialog = false">
                        <v-icon icon="mdi-vuetify"></v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-form ref="formLogin">
                        <v-text-field v-model="userInfoRegister.email" prepend-icon="mdi-account" name="login"
                            label="Email" type="text"></v-text-field>
                        <v-text-field v-model="userInfoRegister.password" id="password" prepend-icon="mdi-lock"
                            name="password" label="Password" type="password"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="register">Register</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script setup>
import { useLoginStore } from '@/stores/login';
import { storeToRefs } from 'pinia';


const loginStore = useLoginStore();
const { user } = storeToRefs(loginStore);
const mounted = ref(false);

onMounted(async () => {
    mounted.value = true;
});


const registerDialog = ref(false)
const userInfoRegister = ref({
    email: '',
    password: ''
})
function toggleRegisterDialog() {
    registerDialog.value = !registerDialog.value
}

function register() {
    toggleRegisterDialog()
    loginStore.register(userInfoRegister.value.email, userInfoRegister.value.password).then(() => {
        console.log("register ok")
    }).catch((error) => {
        console.log(error)
        console.log("register error")
        toggleRegisterDialog()
    })

}

</script>