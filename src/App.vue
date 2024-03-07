<script setup>


import { onMounted } from 'vue';
import Header from './components/Header.vue'

onMounted(() =>{
    console.log('test')
    console.log(import.meta.env.VITE_API_KEY)
})



</script>

<template>

<Header/>
<router-view></router-view>


</template>

<style scoped lang="scss">

</style>
