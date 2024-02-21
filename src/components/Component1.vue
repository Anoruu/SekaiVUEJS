<template>
    <main class="Compo1">
        <h1>     
            {{ test1 }}   
        </h1>
        <p>
            {{ test2 }}
        </p>
    </main>
</template>

<script setup>

import { defineProps } from 'vue';

defineProps({
    test1:String,
    test2:String,
})

</script>

<style>

</style>