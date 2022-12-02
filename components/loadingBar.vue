<template>

    <v-btn @click="start_timer()">
        start timer
    </v-btn>

    <v-btn @click="end_timer()">
        end timer
    </v-btn>

    <v-btn @click="leaderboard()">
        end timer
    </v-btn>

    <v-btn @click="update_progress_bar(10)">
        10%
    </v-btn>

    <v-btn @click="update_progress_bar(50)">
        50%
    </v-btn>

    <v-btn @click="update_progress_bar(80)">
        80%
    </v-btn>

    <br>

    <div>
        <v-progress-linear
        v-model="progress_value"
        color="amber"
        height="25" 
        stream >
        </v-progress-linear>
    </div>
</template>

<script setup>
import { ref } from 'vue'
    const progress_value = ref(1)
    const timer = ref(0)
    const interval = ref(0)

    function update_progress_bar(val){
        progress_value.value = val
    }

    function start_timer(){
        interval.value = setInterval(() => {
            timer.value+=1
            if(timer.value== 30){
                console.log("vous avez perdu")
                timer.value = 0
            }
        }, 1000);
    }

    function leaderboard(){
        
    }

    function end_timer(){
        clearInterval(interval.value)
    }

</script>