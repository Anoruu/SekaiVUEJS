<template>
  <div class="carte">
    <div class="image">
      <a href="#"><img :src="imgLink" :alt="altText" /></a>
      <p> {{ bandText }} </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgLink: String,
  altText: String,
  bandText: String
})

</script>

<style lang="scss" scopped>
.carte {
  border-color: aqua;
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
  width: 500px;
  height: 500px;

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

