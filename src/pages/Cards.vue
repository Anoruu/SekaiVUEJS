<template>
    <main>
        <Component1 test1="Songs" test2=""/>
        <h1>Cards</h1>
    </main>

    <div class="carte">
        <div class="image">
          <a href="#"
            ><img src="../assets/la.jpg" alt="Gunna & Young Thug"
          /></a>
          <p></p>
        </div>
      </div>

</template>

<script setup>


</script>

<style scoped>

.carte {
  display: inline-block;
  margin: 0.2;
  margin-left: 9%;
  margin-bottom: 100px;
  margin-top: 50px;
  height: 500px;
  width: 400px;
  overflow: hidden;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5%;
}

.carte .image {
  width: 100%;
  height: 100%;
}

.carte .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

</style>