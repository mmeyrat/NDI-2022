<template>
    <div v-if="mounted && !user.email">
        <v-btn @click="toggleLoginDialog">
            <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-dialog v-model="loginDialog" width="500">
            <v-card>
                <v-toolbar color="primary" dark>
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="loginDialog = false">
                        <v-icon icon="mdi-vuetify"></v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-form ref="formLogin">
                        <v-text-field v-model="userInfoLogin.email" prepend-icon="mdi-account" name="login"
                            label="Email" type="text"></v-text-field>
                        <v-text-field v-model="userInfoLogin.password" id="password" prepend-icon="mdi-lock"
                            name="password" label="Password" type="password"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-card-actions class="justify-end">
                        <v-btn color="primary" @click="login">Login</v-btn>
                    </v-card-actions>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
    <div v-else>
        <div class="hidden-xs">
            {{user.email}}
            <v-btn icon @click="logout">
                <v-icon icon="mdi-logout"></v-icon>
            </v-btn>
        </div>
        <div class="hidden-sm-and-up">
            <v-btn to="/MySpace">
                <v-icon icon="mdi-folder-heart"></v-icon>
            </v-btn>
            <v-btn to="/account">
                <v-icon icon="mdi-card-account-details"></v-icon>
            </v-btn>
            <v-btn icon @click="logout">
                <v-icon icon="mdi-logout"></v-icon>
            </v-btn>

        </div>
    </div>


</template>
<script setup>
import { useLoginStore } from '@/stores/login';
import { storeToRefs } from 'pinia';


const loginStore = useLoginStore();
const { token, user } = storeToRefs(loginStore);
const mounted = ref(false);



onMounted(async () => {
    mounted.value = true;
});

const loginDialog = ref(false)
const userInfoLogin = ref({
    email: '',
    password: ''
})
function toggleLoginDialog() {
    loginDialog.value = !loginDialog.value
}

function login() {
    toggleLoginDialog();
    loginStore.login(userInfoLogin.value.email, userInfoLogin.value.password).then(() => {
        console.log('login success');
        console.log(token.value);
        console.log(user.value);

    }).catch((error) => {
        console.log('login error');
        console.log(error);
        toggleLoginDialog();
    });
}
function logout() {
    console.log(user.value);
    console.log('logout');
    loginStore.logout();
}

</script>