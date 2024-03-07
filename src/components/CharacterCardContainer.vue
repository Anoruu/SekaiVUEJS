<template>
    <div class="carte">
      <div class="image">
        <a href="#"><img :src="imgLink" :alt="altText" /></a>
        <p> {{ charaText }} </p>
      </div>
    </div>
  </template>
  
  <script setup>
  
  defineProps({
    imgLink: String,
    altText: String,
    charaText: String
  })
  
  </script>
  
  <style lang="scss" scopped>
  .carte {
  border: 10px;
  overflow: hidden;
  border-radius: 1%;

  &:hover {
    
   .image a {
      opacity: 0.33;
    }

    .image p {
      display: block;
      z-index: 1;
      text-align: center;
      padding: 0 10%;
      font-size: x-large;
    }

  }

}
  
  p {
    display: none;
  }
  
  .image {
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 15em;
    height: 15em;
    margin: 0 5em;
  
    a {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
    }
  
  }
  </style>
  
  