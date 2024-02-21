<template>

<div class="carte">
    <div class="image">
      <a href="#"
        ><img :src="imgLink" :alt="altText"
      /></a>
    </div>
  </div>

</template>

<script setup>
defineProps({
    imgLink:String,
    alttext:String,
    bandText:String
})

</script>

<style scopped>

</style>

