<template>
  <main class="home__main">
    <h1>SekaiVUEJS</h1>

    <h3>A small website project using te VueJS framework, the goal is to showcase the different bands and caracters from the game Project Sekai Colorful Stage.

    The goal is to use different features of VueJS that we learned during that course.</h3>

    <h3>Project SEKAI COLORFUL STAGE! feat. Hatsune Miku (often shortened to 'Project SEKAI' or 'Proseka') is a rhythm game developed as a collaboration between SEGA, Craft Egg, Colorful Palette, and Crypton Future Media. The first server of Project SEKAI was released on September 30, 2020 for iOS and Android devices. </h3>

    <img src="../images/Background.png" alt="">

  </main>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() =>{
  console.log('LandingPage has been mounted')
})

onUnmounted(() =>{
  console.log('LandingPage has been mounted')
})

</script>

<style lang="scss" scoped>

.home__main {
  display: flex;
  flex-wrap: wrap;
}

h1 {
  margin: auto;
  text-decoration: underline;
}

h3 {
  margin: auto;
  margin: auto;
  padding: 1% 2% 1% 2%;
}

img {
  opacity: 0.7;
  padding-top: 1%;
}

</style>